import { useEffect, useRef, useState } from 'react'

export const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Hook: dispara `true` quando o elemento entra na viewport (uma vez).
// Se o usuário prefere menos movimento, já inicia visível.
export function useInViewOnce(margin = '0px 0px -10% 0px') {
  const ref = useRef(null)
  const [inView, setInView] = useState(() => reduceMotion())
  useEffect(() => {
    if (reduceMotion()) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: margin, threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [margin])
  return [ref, inView]
}
