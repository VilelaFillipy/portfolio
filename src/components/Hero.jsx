import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const PHRASES = [
  'Desenvolvedor Full Stack',
  'Criador de SaaS',
  'Arquiteto de Backend',
  'Especialista em React',
]

function useTyping(phrases, speed = 80, pause = 1800, deleteSpeed = 40) {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setIsDeleting(false)
          setPhraseIdx((i) => (i + 1) % phrases.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIdx, phrases, speed, pause, deleteSpeed])

  return text
}

export default function Hero() {
  const typed = useTyping(PHRASES)

  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero__pre" variants={itemVariants}>
            Olá, eu sou
          </motion.p>

          <motion.h1 className="hero__name" variants={itemVariants}>
            Fillipy<br />
            <span>Vilela</span>
          </motion.h1>

          <motion.div className="hero__title-wrap" variants={itemVariants}>
            <span className="hero__typing">{typed}</span>
            <span className="hero__caret" />
          </motion.div>

          <motion.p className="hero__tagline" variants={itemVariants}>
            Desenvolvo aplicações web rápidas, escaláveis e bem construídas —
            do frontend ao backend, com atenção a cada detalhe.
          </motion.p>

          <motion.div className="hero__actions" variants={itemVariants}>
            <a href="#contact" className="btn btn--primary" onClick={scrollToContact}>
              Entre em contato
            </a>
            <a
              href="https://github.com/VilelaFillipy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </motion.div>

          <motion.div className="hero__stats" variants={itemVariants}>
            <div className="hero__stat">
              <strong>4+</strong>
              <span>Anos de Experiencia</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>20+</strong>
              <span>Projetos Entregues</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>Full</strong>
              <span>Stack Coverage</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__photo-wrap">
            <img
              src="/photo.png"
              alt="Fillipy Vilela"
              className="hero__photo"
            />
          </div>
        </motion.div>
      </div>

    </section>
  )
}
