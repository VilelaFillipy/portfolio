import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const highlights = [
  { label: 'Front-End', desc: 'Interfaces responsivas com React, React Native e Flutter que funcionam como nativo.' },
  { label: 'Back-End', desc: 'APIs escaláveis e microsserviços com Node.js, PHP e Laravel.' },
  { label: 'Cloud & DevOps', desc: 'Pipelines de deploy, containers e infraestrutura na AWS.' },
  { label: 'Automação', desc: 'Automação de fluxos com N8N e integrações de CI/CD.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about__header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="divider" />
          <h2 className="section-title">Sobre <span>Mim</span></h2>
          <p className="section-subtitle">
            Como desenvolvedor, minha vocação é criar sistemas web escaláveis e funcionais que podem mudar o rumo do seu negócio!
          </p>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p>
              Sou um Dev Full Stack com mais de 4 anos de experiência construindo
              produtos que vão de plataformas SaaS e soluções de e-commerce a ferramentas
              internas e aplicativos mobile.
            </p>
            <p>
              Meu trabalho abrange toda a stack — projeto bancos de dados, construo APIs
              RESTful e GraphQL, integro serviços de terceiros e crio interfaces que os
              usuários gostam de usar. Me importo com qualidade de código, performance e
              entregar software que resolve problemas reais.
            </p>
            <p>
              Quando não estou codando, estou explorando novas ferramentas do ecossistema,
              contribuindo para projetos open-source ou mergulhando em system design para
              aprimorar meu trabalho.
            </p>

            <div className="about__badges">
              <span className="badge">Aberto a freelance</span>
              <span className="badge">Remoto</span>
              <span className="badge">Agile</span>
            </div>
          </motion.div>

          <div className="about__cards">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className="about__card"
                variants={fadeUp}
                custom={i * 0.5 + 0.2}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -4, boxShadow: '0 8px 40px var(--accent-glow)' }}
              >
                <h3 className="about__card-label">{h.label}</h3>
                <p className="about__card-desc">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
