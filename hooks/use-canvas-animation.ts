import { useEffect, useRef, RefObject } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

interface UseCanvasAnimationOptions {
  particleCount?: number
  connectionDistance?: number
  isVisible?: boolean
}

export function useCanvasAnimation(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  containerRef: RefObject<HTMLElement | null>,
  options: UseCanvasAnimationOptions = {}
) {
  const {
    particleCount = 40, // 80から40に減らす
    connectionDistance = 150,
    isVisible = true,
  } = options

  const animationFrameRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d', { alpha: false }) // alpha: falseでパフォーマンス向上
    if (!ctx) return

    const updateCanvasSize = () => {
      if (container) {
        canvas.width = container.offsetWidth
        canvas.height = container.offsetHeight
      }
    }
    updateCanvasSize()

    const neonColors = [
      'rgba(255, 51, 153, 0.4)', // 透明度を下げて軽量化
      'rgba(0, 255, 255, 0.4)',
      'rgba(0, 255, 128, 0.4)',
      'rgba(138, 43, 226, 0.4)',
    ]

    // パーティクルを初期化
    particlesRef.current = []
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6, // 速度を少し下げる
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: neonColors[Math.floor(Math.random() * neonColors.length)],
      })
    }

    let lastTime = 0
    const targetFPS = 30 // 60fpsから30fpsに下げる
    const frameInterval = 1000 / targetFPS

    function animate(currentTime: number) {
      if (!isVisible) {
        // 画面外の時はアニメーションを停止
        return
      }

      if (!ctx || !canvas) return

      const deltaTime = currentTime - lastTime

      // フレームレート制限
      if (deltaTime < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      lastTime = currentTime - (deltaTime % frameInterval)

      // クリア（透明度を上げて軽量化）
      ctx.fillStyle = 'rgba(8, 8, 20, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current

      // パーティクルの更新と描画
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // shadowBlurを減らして軽量化
        ctx.shadowBlur = 5
        ctx.shadowColor = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // 接続線の描画（最適化）
      ctx.shadowBlur = 3
      ctx.shadowColor = 'rgba(0, 255, 255, 0.3)'
      ctx.lineWidth = 0.5
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = 0.2 * (1 - distance / connectionDistance)
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }
      
      ctx.shadowBlur = 0

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    if (isVisible) {
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      updateCanvasSize()
      // リサイズ時にパーティクルを再配置
      particlesRef.current.forEach((particle) => {
        particle.x = Math.min(particle.x, canvas.width)
        particle.y = Math.min(particle.y, canvas.height)
      })
    }

    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [canvasRef, containerRef, particleCount, connectionDistance, isVisible])
}

