import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import NichoIcon from '../components/NichoIcon'
import { nichos } from '../data/nichos'
import './NichosPage.css'

export default function NichosPage() {
  return (
    <>
      <Navbar />
      <main className="nichos-page">
        <section className="nichos-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/" className="nichos-back">← Voltar ao início</Link>
              <div className="divider" />
              <h1 className="section-title">
                Sites que <span>vendem</span> para o seu segmento
              </h1>
              <p className="section-subtitle nichos-hero__sub">
                Cada segmento tem o seu jeito de conquistar cliente. Escolha o seu e
                veja sites pensados para esse tipo de negócio — no ar e navegáveis.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="nichos-grid-section">
          <div className="container">
            <div className="nichos-grid">
              {nichos.map((nicho) => (
                <Link
                  key={nicho.slug}
                  to={`/projetos/${nicho.slug}`}
                  className="nicho-card"
                  style={{ '--n1': nicho.cor, '--n2': nicho.cor2 }}
                >
                  <div className="nicho-card__glow" />
                  <span className="nicho-card__icon">
                    <NichoIcon name={nicho.slug} size={30} />
                  </span>
                  <div className="nicho-card__main">
                    <h2 className="nicho-card__title">{nicho.titulo}</h2>
                    <p className="nicho-card__sub">{nicho.subtitulo}</p>
                  </div>
                  <div className="nicho-card__foot">
                    <span className="nicho-card__count">{nicho.ramos.length} projetos</span>
                    <span className="nicho-card__arrow" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
