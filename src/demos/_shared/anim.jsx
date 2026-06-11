import { useEffect, useState } from 'react'
import { useInViewOnce, reduceMotion } from './anim-hooks'
import './anim.css'

// Wrapper de reveal ao rolar. `as` define a tag, `delay` em ms, `from` a direção.
export function Reveal({ as: Tag = 'div', delay = 0, from = 'up', className = '', children, ...rest }) {
  const [ref, inView] = useInViewOnce()
  return (
    <Tag
      ref={ref}
      className={`rv rv--${from}${inView ? ' rv--in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Contador animado. Anima quando entra na tela; se reduz movimento, mostra o valor final.
export function Counter({ to, duration = 1600, prefix = '', suffix = '' }) {
  const [ref, inView] = useInViewOnce()
  const [val, setVal] = useState(() => (reduceMotion() ? to : 0))
  useEffect(() => {
    if (!inView || reduceMotion()) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      setVal(Math.round(to * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])
  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString('pt-BR')}
      {suffix}
    </span>
  )
}
