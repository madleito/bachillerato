import { useEffect, useState } from 'react'
import { DIMENSIONES } from '../contenido/imagenes'

/**
 * Imágenes de los apuntes originales (fórmulas, esquemas, fotografías).
 *
 * Todas se sirven desde public/img en WebP. Llevan ancho y alto para que el
 * navegador reserve su hueco antes de cargarlas, se cargan en diferido y se
 * pueden tocar para verlas a pantalla completa: en el móvil muchas fórmulas
 * solo se leen bien ampliadas.
 */

export interface DatosImagen {
  /** Ruta dentro de public/img, p. ej. 'bio-u2/maltosa.webp'. */
  src: string
  alt: string
  pie?: string
}

export function urlImagen(src: string): string {
  return `${import.meta.env.BASE_URL}img/${src}`
}

function Foto({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const dim = DIMENSIONES[src]
  return (
    <img
      src={urlImagen(src)}
      alt={alt}
      width={dim?.[0]}
      height={dim?.[1]}
      loading="lazy"
      decoding="async"
      className={`block w-full h-auto ${className}`}
    />
  )
}

/** Visor a pantalla completa. Se cierra tocando fuera, con la ✕ o con Escape. */
function Visor({ imagen, onCerrar }: { imagen: DatosImagen; onCerrar: () => void }) {
  useEffect(() => {
    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCerrar()
    }
    window.addEventListener('keydown', alPulsar)
    const overflowPrevio = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', alPulsar)
      document.body.style.overflow = overflowPrevio
    }
  }, [onCerrar])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={imagen.alt}
      onClick={onCerrar}
      className="fixed inset-0 z-[100] bg-tierra-charcoal/90 flex flex-col items-center justify-center p-3 md:p-8"
    >
      <button
        onClick={onCerrar}
        aria-label="Cerrar"
        className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/10 text-white text-xl hover:bg-white/20 cursor-pointer"
      >
        ✕
      </button>
      <img
        src={urlImagen(imagen.src)}
        alt={imagen.alt}
        onClick={e => e.stopPropagation()}
        className="max-w-full max-h-[80vh] object-contain bg-white rounded-lg"
      />
      {imagen.pie && (
        <p className="font-body text-sm text-white/85 leading-relaxed text-center max-w-2xl mt-4 px-2">
          {imagen.pie}
        </p>
      )}
    </div>
  )
}

/** Botón que envuelve una imagen y la abre en el visor. */
function Ampliable({
  imagen,
  children,
  className = '',
}: {
  imagen: DatosImagen
  children: React.ReactNode
  className?: string
}) {
  const [abierta, setAbierta] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => setAbierta(true)}
        aria-label={`Ampliar: ${imagen.alt}`}
        className={`group relative block w-full cursor-zoom-in text-left ${className}`}
      >
        {children}
        <span
          aria-hidden="true"
          className="absolute top-1.5 right-1.5 w-7 h-7 flex items-center justify-center text-sm bg-tierra-charcoal/60 text-white rounded-full opacity-70 group-hover:opacity-100 transition-opacity"
        >
          ⤢
        </span>
      </button>
      {abierta && <Visor imagen={imagen} onCerrar={() => setAbierta(false)} />}
    </>
  )
}

/** Una imagen de los apuntes, con su pie, dentro del texto de «La Historia». */
export function Imagen({ src, alt, pie }: DatosImagen) {
  return (
    <figure className="my-8">
      <div className="bg-white border border-tierra-sand rounded-2xl p-3 md:p-5">
        <Ampliable imagen={{ src, alt, pie }}>
          <Foto src={src} alt={alt} className="mx-auto max-h-[28rem] object-contain" />
        </Ampliable>
      </div>
      {pie && (
        <figcaption className="font-body text-sm text-tierra-slate/80 leading-relaxed mt-3 text-center px-2">
          {pie}
        </figcaption>
      )}
    </figure>
  )
}

/** Varias imágenes relacionadas, en rejilla. Cada una se amplía por separado. */
export function Galeria({
  imagenes,
  pie,
  columnas = 2,
}: {
  imagenes: DatosImagen[]
  pie?: string
  columnas?: 2 | 3
}) {
  const rejilla = columnas === 3 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'
  return (
    <figure className="my-8">
      <div className={`grid ${rejilla} gap-3`}>
        {imagenes.map(img => (
          <div key={img.src} className="bg-white border border-tierra-sand rounded-2xl p-2 md:p-3 flex flex-col">
            <Ampliable imagen={img} className="flex-1 flex items-center">
              <Foto src={img.src} alt={img.alt} className="max-h-64 object-contain" />
            </Ampliable>
            {img.pie && (
              <p className="font-body text-xs text-tierra-slate leading-snug text-center mt-2 px-1">{img.pie}</p>
            )}
          </div>
        ))}
      </div>
      {pie && (
        <figcaption className="font-body text-sm text-tierra-slate/80 leading-relaxed mt-3 text-center px-2">
          {pie}
        </figcaption>
      )}
    </figure>
  )
}

/** Versión compacta, para fichas y preguntas de quiz. */
export function ImagenCompacta({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-white border border-tierra-sand rounded-xl p-2 mb-4" onClick={e => e.stopPropagation()}>
      <Ampliable imagen={{ src, alt }}>
        <Foto src={src} alt={alt} className="mx-auto max-h-44 object-contain" />
      </Ampliable>
    </div>
  )
}
