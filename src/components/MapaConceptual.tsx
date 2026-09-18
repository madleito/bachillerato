import { useState } from 'react'
import type { Color, NodoMapa, RamaMapa } from '../types'
import { COLOR_MAP } from '../lib/colores'

function TreeNode({
  node,
  color,
  depth = 0,
}: {
  node: NodoMapa
  color: Color
  depth?: number
}) {
  const [open, setOpen] = useState(false)
  const [showDetail, setShowDetail] = useState(false)
  const hasChildren = !!node.children && node.children.length > 0
  const hasDetail = !!node.detail
  const c = COLOR_MAP[color]

  return (
    <div className={depth > 0 ? `ml-4 md:ml-6 border-l-2 ${c.line}` : ''}>
      <div className={depth > 0 ? 'pl-4 py-1' : 'py-1'}>
        <button
          onClick={() => {
            if (hasChildren) setOpen(!open)
            if (hasDetail) setShowDetail(!showDetail)
          }}
          aria-expanded={hasChildren ? open : undefined}
          className={`
            w-full text-left flex items-start gap-2.5 py-2 px-3 rounded-lg
            transition-colors duration-150 cursor-pointer
            ${open || showDetail ? c.bg : 'hover:bg-tierra-cream/50'}
          `}
        >
          <span className="mt-1.5 shrink-0">
            {hasChildren ? (
              <span
                className={`inline-block text-xs transition-transform duration-200 ${c.text} ${open ? 'rotate-90' : ''}`}
              >
                ▶
              </span>
            ) : (
              <span className={`inline-block w-2 h-2 rounded-full ${c.dot}`} />
            )}
          </span>

          <span
            className={`font-body text-base leading-snug ${hasChildren ? 'font-semibold text-tierra-charcoal' : 'text-tierra-charcoal'}`}
          >
            {node.label}
          </span>
        </button>

        {hasDetail && showDetail && !hasChildren && (
          <div className={`ml-7 mr-2 mt-1 mb-2 p-3 rounded-lg ${c.bg} border ${c.line}`}>
            <p className="font-body text-sm text-tierra-charcoal leading-relaxed">{node.detail}</p>
          </div>
        )}

        {hasChildren && open && (
          <div className="mt-1">
            {node.detail && (
              <div className={`ml-4 md:ml-6 mb-2 p-3 rounded-lg ${c.bg}`}>
                <p className="font-body text-sm text-tierra-slate leading-relaxed">{node.detail}</p>
              </div>
            )}
            {node.children!.map(child => (
              <TreeNode key={child.id} node={child} color={color} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function BranchNode({ branch, defaultOpen }: { branch: RamaMapa; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const c = COLOR_MAP[branch.color]

  return (
    <div className="rounded-xl border border-tierra-sand overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`
          w-full flex items-center gap-3 px-4 py-3.5 text-left cursor-pointer
          transition-colors duration-150
          ${open ? c.bg : 'bg-white hover:bg-tierra-cream/30'}
        `}
      >
        <span className={`w-3 h-3 rounded-full shrink-0 ${c.dot}`} />
        <span className={`font-display text-base md:text-lg font-semibold ${c.text} flex-1`}>
          {branch.label}
        </span>
        <span className={`text-sm transition-transform duration-200 ${c.text} ${open ? 'rotate-90' : ''}`}>
          ▶
        </span>
      </button>

      {open && (
        <div className="px-2 pb-3 bg-white">
          {branch.children?.map(child => (
            <TreeNode key={child.id} node={child} color={branch.color} depth={0} />
          ))}
        </div>
      )}
    </div>
  )
}

export function MapaConceptual({ data, rootLabel }: { data: RamaMapa[]; rootLabel: string }) {
  const [expandAll, setExpandAll] = useState(false)
  const [key, setKey] = useState(0)

  function toggleAll() {
    setExpandAll(!expandAll)
    setKey(k => k + 1)
  }

  return (
    <div className="page-enter max-w-2xl mx-auto">
      <header className="mb-8">
        <p className="font-body text-sm uppercase tracking-widest text-volcanic mb-3">Visión global</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-tierra-charcoal leading-tight mb-3">
          Mapa Conceptual
        </h2>
        <p className="font-body text-base text-tierra-slate leading-relaxed mb-4">
          Explora el tema completo. Toca cada rama para expandirla y ver los subnodos.
        </p>
        <button
          onClick={toggleAll}
          className="font-body text-sm text-petrol-dark hover:text-volcanic underline underline-offset-2 cursor-pointer transition-colors"
        >
          {expandAll ? 'Plegar todas las ramas' : 'Desplegar todas las ramas'}
        </button>
      </header>

      <div className="bg-tierra-charcoal text-white rounded-xl px-5 py-4 mb-6 text-center">
        <h3 className="font-display text-lg md:text-xl font-bold">{rootLabel}</h3>
      </div>

      <div className="space-y-2" key={key}>
        {data.map(branch => (
          <BranchNode key={branch.id} branch={branch} defaultOpen={expandAll} />
        ))}
      </div>
    </div>
  )
}
