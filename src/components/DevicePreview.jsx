import { useEffect, useRef, useState } from 'react'
import './DevicePreview.css'

// Preview do site dentro de uma moldura de aparelho, JÁ AO VIVO.
// Desktop -> moldura de notebook. Mobile -> moldura de celular.
// O iframe carrega assim que o card entra na tela (sem precisar de hover/toque).
// Para não pesar tudo de uma vez, cada preview só monta quando fica visível.

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 560px)').matches : false,
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 560px)')
    const onChange = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return isMobile
}

export default function DevicePreview({ slug, title, cor, cor2 }) {
  const isMobile = useIsMobile()
  const [visible, setVisible] = useState(false) // card entrou na viewport
  const [loaded, setLoaded] = useState(false) // iframe terminou de carregar
  const screenRef = useRef(null)
  const [scale, setScale] = useState(0)

  // viewport virtual de cada aparelho
  const vw = isMobile ? 390 : 1440
  const vh = isMobile ? 760 : 900

  // escala o iframe para preencher a "tela" do aparelho
  useEffect(() => {
    const el = screenRef.current
    if (!el) return
    const update = () => setScale(el.clientWidth / vw)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [vw])

  // monta o iframe quando o card fica visível (carrega de imediato se já estiver na tela)
  useEffect(() => {
    const el = screenRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Frame = isMobile ? PhoneFrame : LaptopFrame

  return (
    <div
      className={`devp${loaded ? ' devp--loaded' : ''}`}
      style={{ '--d1': cor, '--d2': cor2 }}
    >
      <Frame>
        <div className="devp__screen" ref={screenRef}>
          {/* placeholder leve enquanto o iframe carrega */}
          <div className="devp__poster">
            <Skeleton />
          </div>

          {/* preview ao vivo */}
          {visible && scale > 0 && (
            <iframe
              className="devp__frame"
              src={`/demo/${slug}`}
              title={`Pré-visualização do site: ${title}`}
              loading="lazy"
              scrolling="no"
              tabIndex={-1}
              aria-hidden="true"
              onLoad={() => setLoaded(true)}
              style={{
                width: vw,
                height: vh,
                '--s': scale,
              }}
            />
          )}
        </div>
      </Frame>
    </div>
  )
}

/* ---- molduras ---- */
function LaptopFrame({ children }) {
  return (
    <div className="devp-laptop">
      <div className="devp-laptop__lid">
        <div className="devp-laptop__cam" />
        <div className="devp-laptop__viewport">{children}</div>
      </div>
      <div className="devp-laptop__base">
        <div className="devp-laptop__notch" />
      </div>
    </div>
  )
}

function PhoneFrame({ children }) {
  return (
    <div className="devp-phone">
      <div className="devp-phone__notch" />
      <div className="devp-phone__viewport">{children}</div>
    </div>
  )
}

/* esqueleto leve do site (sem imagens) mostrado enquanto carrega */
function Skeleton() {
  return (
    <div className="devp-skel">
      <div className="devp-skel__nav">
        <span className="devp-skel__logo" />
        <span className="devp-skel__links">
          <i /><i /><i />
        </span>
      </div>
      <div className="devp-skel__hero">
        <span className="devp-skel__h1" />
        <span className="devp-skel__h2" />
        <span className="devp-skel__btn" />
      </div>
      <div className="devp-skel__cards">
        <span /><span /><span />
      </div>
    </div>
  )
}
