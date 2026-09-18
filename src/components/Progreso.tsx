import { useRef, useState } from 'react'
import { exportar, importar, reiniciar } from '../lib/progreso'

/**
 * Copia de seguridad del progreso.
 * Todo vive en el navegador, así que si cambia de móvil o borra los datos del
 * sitio lo perdería: esto permite llevárselo en un fichero.
 */
export function Progreso({ onCerrar }: { onCerrar: () => void }) {
  const [aviso, setAviso] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  function descargar() {
    const blob = new Blob([exportar()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `progreso-estudio-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    setAviso('Progreso descargado.')
  }

  function alElegirFichero(e: React.ChangeEvent<HTMLInputElement>) {
    const fichero = e.target.files?.[0]
    if (!fichero) return
    fichero.text().then(texto => {
      setAviso(
        importar(texto)
          ? 'Progreso restaurado correctamente.'
          : 'Ese fichero no parece una copia válida.',
      )
    })
    e.target.value = ''
  }

  function borrarTodo() {
    if (!window.confirm('¿Seguro? Se borrará todo el progreso de todas las unidades.')) return
    reiniciar()
    setAviso('Progreso borrado.')
  }

  return (
    <div className="bg-white border border-tierra-sand rounded-2xl p-5 md:p-6 text-left">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="font-display text-lg font-bold text-tierra-charcoal">Tu progreso</h3>
          <p className="font-body text-sm text-tierra-slate leading-relaxed mt-1">
            Se guarda solo en este dispositivo. Descárgalo si vas a cambiar de móvil o de navegador.
          </p>
        </div>
        <button
          onClick={onCerrar}
          aria-label="Cerrar"
          className="font-body text-sm text-tierra-slate hover:text-tierra-charcoal cursor-pointer shrink-0"
        >
          ✕
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <button
          onClick={descargar}
          className="font-body text-sm px-4 py-2 rounded-lg bg-petrol text-white hover:bg-petrol-dark transition-colors cursor-pointer"
        >
          Descargar copia
        </button>
        <button
          onClick={() => inputRef.current?.click()}
          className="font-body text-sm px-4 py-2 rounded-lg bg-tierra-cream text-tierra-charcoal hover:bg-tierra-sand transition-colors cursor-pointer"
        >
          Restaurar copia
        </button>
        <button
          onClick={borrarTodo}
          className="font-body text-sm px-4 py-2 rounded-lg bg-terracotta/10 text-terracotta-dark hover:bg-terracotta/20 transition-colors cursor-pointer"
        >
          Borrar todo
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="application/json,.json"
          onChange={alElegirFichero}
          className="hidden"
        />
      </div>

      {aviso && <p className="font-body text-sm text-turquoise-dark mt-3">{aviso}</p>}
    </div>
  )
}
