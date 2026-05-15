import { useEffect, useRef } from 'react'
import './ParticleBackground.css'

export default function ParticleBackground({ theme }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let mouse = { x: -9999, y: -9999 }
    const dotColor = theme === 'light' ? '37, 99, 235' : '16, 185, 129'

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove)

    const COLS = Math.floor(window.innerWidth / 48)
    const ROWS = Math.floor(window.innerHeight / 48)
    const dots = []

    for (let col = 0; col < COLS; col++) {
      for (let row = 0; row < ROWS; row++) {
        dots.push({
          x: col * 48 + 24,
          y: row * 48 + 24,
          baseAlpha: Math.random() * 0.18 + 0.04,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.005 + 0.003,
        })
      }
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach((d) => {
        const dx = d.x - mouse.x
        const dy = d.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const proximity = Math.max(0, 1 - dist / 160)
        const pulse = Math.sin(t * d.speed + d.phase) * 0.5 + 0.5
        const alpha = d.baseAlpha + pulse * 0.08 + proximity * 0.5

        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.2 + proximity * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${dotColor}, ${Math.min(alpha, 0.85)})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="particle-canvas" />
}
