import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import BrowserPreview from '../components/BrowserPreview'
import DevicePreview from '../components/DevicePreview'
import NichoIcon from '../components/NichoIcon'
import { getNicho } from '../data/nichos'
import './RamosPage.css'

function RamoCard({ ramo, nicho }) {
  const empresa = ramo.empresa || ramo.titulo
  const ramoLabel = ramo.ramoLabel || nicho.titulo

  const inner = (
    <>
      {/* cabeçalho do card: etiqueta GRANDE do ramo + status, fora do aparelho */}
      <div className="ramo-card__header" style={{ '--n1': ramo.cor, '--n2': ramo.cor2 }}>
        <span className="ramo-card__ramo">
          <NichoIcon name={nicho.slug} size={20} />
          {ramoLabel}
        </span>
        {ramo.tipoSite && <span className="ramo-card__tipo">{ramo.tipoSite}</span>}
      </div>

      <div className="ramo-card__device">
        {ramo.demo ? (
          <DevicePreview slug={ramo.slug} title={empresa} cor={ramo.cor} cor2={ramo.cor2} />
        ) : (
          <BrowserPreview ramo={ramo} />
        )}
      </div>

      <div className="ramo-card__body">
        <div className="ramo-card__head">
          <h3 className="ramo-card__empresa">{empresa}</h3>
          {ramo.categoria && <span className="ramo-card__cidade">{ramo.categoria}</span>}
        </div>
        <p className="ramo-card__desc">{ramo.descricao}</p>

        {ramo.tags && (
          <div className="ramo-card__tags">
            {ramo.tags.map((t) => (
              <span key={t} className="ramo-card__tag">{t}</span>
            ))}
          </div>
        )}

        <span className="ramo-card__cta">
          {ramo.demo ? 'Visitar o site' : 'Em breve'}
          {ramo.demo && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          )}
        </span>
      </div>
    </>
  )

  return ramo.demo ? (
    <Link to={`/demo/${ramo.slug}`} className="ramo-card">
      {inner}
    </Link>
  ) : (
    <div className="ramo-card ramo-card--soon">{inner}</div>
  )
}

export default function RamosPage() {
  const { nicho: slug } = useParams()
  const nicho = getNicho(slug)

  if (!nicho) return <Navigate to="/projetos" replace />

  return (
    <>
      <Navbar />
      <main className="ramos-page">
        <section
          className="ramos-hero"
          style={{ '--n1': nicho.cor, '--n2': nicho.cor2 }}
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/projetos" className="ramos-back">← Todos os nichos</Link>
              <div className="divider" />
              <span className="ramos-hero__foco">
                <NichoIcon name={nicho.slug} size={18} />
                {nicho.foco}
              </span>
              <h1 className="section-title">{nicho.titulo}</h1>
              <p className="section-subtitle ramos-hero__sub">{nicho.subtitulo}</p>
            </motion.div>
          </div>
        </section>

        <section className="ramos-grid-section">
          <div className="container">
            <div className="ramos-grid">
              {nicho.ramos.map((ramo) => (
                <RamoCard key={ramo.slug} ramo={ramo} nicho={nicho} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
