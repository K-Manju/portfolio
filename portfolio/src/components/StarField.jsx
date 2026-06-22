import { useEffect, useRef } from 'react'

function StarField() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let mouse = { x: -9999, y: -9999 }
    let animationId

    function resize() {
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = ['#38bdf8', '#a855f7', '#f472b6', '#ffffff']
    const particles = Array.from({ length: 140 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    function handleMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    function handleLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    window.addEventListener('mousemove', handleMove)
    canvas.parentElement.addEventListener('mouseleave', handleLeave)

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 140 && dist > 0.01) {
          const force = (140 - dist) / 140
          p.x += (dx / dist) * force * 2.5
          p.y += (dy / dist) * force * 2.5
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = 0.85
        ctx.fill()
      })

      particles.forEach((p) => {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(56, 189, 248, ${1 - dist / 150})`
          ctx.lineWidth = 0.7
          ctx.stroke()
        }
      })

      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMove)
      canvas.parentElement?.removeEventListener('mouseleave', handleLeave)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', top: 0, left: 0,
        width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none',
      }}
    />
  )
}

export default StarField