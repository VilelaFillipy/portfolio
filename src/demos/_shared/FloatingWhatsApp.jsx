import { useState } from 'react'
import './FloatingWhatsApp.css'

const PHONE = '5511976066281'

export default function FloatingWhatsApp({ ramo }) {
  const [open, setOpen] = useState(true)

  const msg = encodeURIComponent(
    `Olá Fillipy! Vi o seu site de ${ramo || 'um dos seus projetos'} ` +
      `e quero um assim para o meu negócio.`,
  )
  const href = `https://wa.me/${PHONE}?text=${msg}`

  return (
    <div className="fwa">
      {open && (
        <div className="fwa__badge">
          <span className="fwa__badge-dot" />
          <div className="fwa__badge-text">
            <strong>Quer um site assim?</strong>
            <span>Site desenvolvido por Fillipy · fale comigo</span>
          </div>
          <button
            className="fwa__badge-close"
            onClick={() => setOpen(false)}
            aria-label="Fechar aviso"
          >
            ×
          </button>
        </div>
      )}

      <a
        className="fwa__btn"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com Fillipy"
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.13 6.744 3.05 9.38L1.05 31.4l6.23-1.99A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.598c-.386 1.09-1.92 1.994-3.142 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.426 1.636-3.896.386-.386.838-.562 1.116-.562.27 0 .54.002.776.014.248.012.582-.094.91.694.336.81 1.144 2.806 1.244 3.01.102.204.17.444.034.71-.13.27-.196.434-.39.668-.196.234-.41.522-.586.7-.196.196-.4.41-.172.804.226.388 1.006 1.66 2.16 2.688 1.484 1.32 2.736 1.73 3.126 1.926.39.196.616.164.844-.1.226-.27.97-1.132 1.23-1.52.256-.388.516-.32.87-.192.356.13 2.252 1.062 2.64 1.256.39.196.648.292.744.454.096.166.096.95-.29 2.04z" />
        </svg>
      </a>
    </div>
  )
}
