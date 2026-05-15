import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import './Contact.css'

const SERVICE_ID = 'service_dy32h58'
const TEMPLATE_ID = 'template_n4my5l8'
const PUBLIC_KEY = 'B6VNiVtkJXwTc0HNJ'

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/VilelaFillipy',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fillipy-vilela/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'E-mail',
    href: 'mailto:vilelafillipy101@gmail.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  },
})

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      PUBLIC_KEY
    ).then(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }).catch(() => {
      setStatus('error')
    })
  }

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="container">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="divider" />
          <h2 className="section-title">Entre em <span>Contato</span></h2>
          <p className="section-subtitle">
            Tem um projeto em mente ou quer bater um papo? Adoraria te ouvir.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <h3 className="contact__info-title">Vamos trabalhar juntos?</h3>
            <p className="contact__info-text">
              Aberto a projetos freelance, parcerias e oportunidades full-time.
              Se você tem uma ideia e precisa de alguém para tirar ela do papel,
              me manda uma mensagem — respondo rapidinho.
            </p>

            <div className="contact__socials">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  {s.icon}
                  <span>{s.name}</span>
                </a>
              ))}
            </div>

            <div className="contact__availability">
              <span className="contact__availability-dot" />
              <span>Disponivel para novos projetos</span>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Me fale sobre seu projeto..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn--primary contact__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending'
                ? 'Enviando...'
                : status === 'sent'
                ? 'Mensagem enviada!'
                : 'Enviar mensagem'}
            </button>

            {status === 'sent' && (
              <p className="contact__success">
                Mensagem enviada! Retorno em breve.
              </p>
            )}
            {status === 'error' && (
              <p className="contact__error">
                Erro ao enviar. Tente novamente ou me contate pelo email.
              </p>
            )}
          </motion.form>
        </div>
      </div>

      <div className="contact__footer">
        <p>Desenvolvido por Fillipy Vilela — {new Date().getFullYear()}</p>
      </div>
    </section>
  )
}
