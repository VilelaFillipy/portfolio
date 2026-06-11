import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '/logo-horizontal-dark.svg'
import './Navbar.css'

const links = [
  { label: 'Início', target: '#hero' },
  { label: 'Sobre', target: '#about' },
  { label: 'Skills', target: '#skills' },
  { label: 'Projetos', target: '#projetos' },
  { label: 'Contato', target: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava o scroll do body quando o menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (target) => {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNavClick = (e, target) => {
    e.preventDefault()
    setMenuOpen(false)
    if (isHome) {
      scrollTo(target)
    } else {
      navigate('/')
      setTimeout(() => scrollTo(target), 80)
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  const mobileMenu = (
    <div
      className={`navbar__overlay${menuOpen ? ' navbar__overlay--open' : ''}`}
      onClick={() => setMenuOpen(false)}
    >
      <button
        className="navbar__overlay__close"
        onClick={() => setMenuOpen(false)}
        aria-label="Fechar menu"
      >
        ✕
      </button>
      <ul className="navbar__overlay__links" onClick={(e) => e.stopPropagation()}>
        {links.map((l) => (
          <li key={l.target}>
            <a
              href={l.target}
              className="navbar__link"
              onClick={(e) => handleNavClick(e, l.target)}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="navbar__cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Entrar em contato
          </a>
        </li>
      </ul>
    </div>
  )

  return (
    <>
      <motion.nav
        className={`navbar${scrolled || menuOpen ? ' navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo" onClick={handleLogoClick} aria-label="Fillipy Vilela — Início">
            <img src={logo} alt="Fillipy Vilela · Web Designer" />
          </Link>

          {/* Links desktop — ocultos no mobile */}
          <ul className="navbar__links">
            {links.map((l) => (
              <li key={l.target}>
                <a
                  href={l.target}
                  className="navbar__link"
                  onClick={(e) => handleNavClick(e, l.target)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="navbar__cta"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Entrar em contato
              </a>
            </li>
          </ul>

          <div className="navbar__right">
            <button
              className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu mobile renderizado no body via portal — fora do stacking context do nav */}
      {createPortal(mobileMenu, document.body)}
    </>
  )
}
