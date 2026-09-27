#!/usr/bin/env python3
"""
Regenera src/contenido/imagenes.ts a partir de las imágenes de public/img.

La web necesita el ancho y el alto de cada imagen para reservar su hueco antes
de que cargue (si no, el texto «salta» al aparecer la imagen). Este script lee
todas las .webp de public/img y escribe ese registro.

Uso:  pnpm imagenes        (o: python3 scripts/registrar-imagenes.py)

Cómo añadir imágenes a una unidad:
  1. Convierte cada imagen a WebP, con fondo blanco y como mucho 1400 px:
       magick origen.png -background white -alpha remove -alpha off \
              -resize '1400x1400>' tmp.png
       cwebp -q 84 -m 6 tmp.png -o public/img/<unidad>/<nombre>.webp
  2. Ejecuta este script.
  3. Úsala en el contenido con su ruta relativa: '<unidad>/<nombre>.webp'.
"""
import struct
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
IMG = RAIZ / 'public' / 'img'
SALIDA = RAIZ / 'src' / 'contenido' / 'imagenes.ts'


def dimensiones_webp(ruta: Path) -> tuple[int, int]:
    """Lee ancho y alto de la cabecera de un WebP, sin dependencias externas."""
    datos = ruta.read_bytes()[:30]
    if datos[:4] != b'RIFF' or datos[8:12] != b'WEBP':
        raise ValueError(f'{ruta} no es un WebP válido')
    trozo = datos[12:16]
    if trozo == b'VP8 ':  # con pérdida
        ancho, alto = struct.unpack('<HH', datos[26:30])
        return ancho & 0x3FFF, alto & 0x3FFF
    if trozo == b'VP8L':  # sin pérdida
        b = datos[21:25]
        ancho = 1 + (((b[1] & 0x3F) << 8) | b[0])
        alto = 1 + (((b[3] & 0xF) << 10) | (b[2] << 2) | ((b[1] & 0xC0) >> 6))
        return ancho, alto
    if trozo == b'VP8X':  # extendido
        ancho = 1 + int.from_bytes(datos[24:27], 'little')
        alto = 1 + int.from_bytes(datos[27:30], 'little')
        return ancho, alto
    raise ValueError(f'{ruta}: formato WebP no reconocido ({trozo!r})')


def main() -> None:
    entradas = []
    for ruta in sorted(IMG.rglob('*.webp')):
        ancho, alto = dimensiones_webp(ruta)
        entradas.append(f"  '{ruta.relative_to(IMG).as_posix()}': [{ancho}, {alto}],")
    lineas = [
        '// Generado por scripts/registrar-imagenes.py. No editar a mano.',
        '// Ancho y alto de cada imagen, para reservar su hueco antes de que cargue.',
        'export const DIMENSIONES: Record<string, [number, number]> = {',
        *entradas,
        '}',
    ]
    SALIDA.write_text('\n'.join(lineas) + '\n', encoding='utf-8')
    print(f'{len(entradas)} imágenes registradas en {SALIDA.relative_to(RAIZ)}')


if __name__ == '__main__':
    main()
