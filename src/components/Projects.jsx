import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { nichos } from '../data/nichos'
import NichoIcon from './NichoIcon'
import './Projects.css'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const totalModelos = nichos.reduce((acc, n) => acc + n.ramos.length, 0)

  return (
    <section id="projetos" ref={ref} className="projects-section">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="divider" />
          <h2 className="section-title">Meus <span>Projetos</span></h2>
          <p className="section-subtitle">
            Sites sob medida para cada tipo de negócio. Escolha o seu segmento e
            veja como ficaria o site da sua empresa funcionando de verdade.
          </p>
        </motion.div>

        <div className="projects__showcase">
          <div className="projects__niches">
            {nichos.map((nicho, i) => (
              <motion.div
                key={nicho.slug}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.07 }}
              >
                <Link
                  to={`/projetos/${nicho.slug}`}
                  className="niche-pill"
                  style={{ '--n1': nicho.cor, '--n2': nicho.cor2 }}
                >
                  <span className="niche-pill__icon">
                    <NichoIcon name={nicho.slug} size={26} />
                  </span>
                  <span className="niche-pill__text">
                    <strong>{nicho.titulo}</strong>
                    <small>{nicho.ramos.length} projetos</small>
                  </span>
                  <span className="niche-pill__arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.aside
            className="projects__panel"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          >
            <div className="projects__panel-glow" />
            <p className="projects__panel-kicker">Portfólio por segmento</p>
            <h3 className="projects__panel-title">
              {nichos.length} segmentos · +{totalModelos} projetos no ar
            </h3>
            <p className="projects__panel-desc">
              Cada projeto é um site completo e navegável, feito para o jeito que
              cada negócio vende. Entre, explore e imagine o seu no lugar.
            </p>
            <Link to="/projetos" className="btn btn--primary projects__panel-btn">
              Ver os projetos
            </Link>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}