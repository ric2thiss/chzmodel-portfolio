import { useState, useEffect, useRef } from 'react'

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('enter')
  const startTime = useRef(Date.now())

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setTimeout(() => { if (onFinish) onFinish() }, 500)
      return
    }

    const MIN_DURATION = 2500 // Minimum 2.5 seconds visible

    document.body.style.overflow = 'hidden'

    const interval = setInterval(() => {
      setProgress((prev) => {
        const elapsed = Date.now() - startTime.current
        // Slow down near end to guarantee minimum duration
        const maxProgress = Math.min(100, (elapsed / MIN_DURATION) * 100)
        const next = prev + Math.floor(Math.random() * 8) + 3

        if (next >= 100 && elapsed >= MIN_DURATION) {
          clearInterval(interval)
          setTimeout(() => setPhase('exit'), 400)
          setTimeout(() => { 
            document.body.style.overflow = ''
            if (onFinish) onFinish() 
          }, 1600)
          return 100
        }

        return Math.min(next, maxProgress, 99)
      })
    }, 60)

    return () => {
      clearInterval(interval)
      document.body.style.overflow = ''
    }
  }, [onFinish])

  return (
    <div className={`loading-screen ${phase}`} aria-label="Loading portfolio" role="status">

      {/* Animated geometric background shapes */}
      <div className="loading-screen__shapes" aria-hidden="true">
        <div className="loading-screen__shape loading-screen__shape--1" />
        <div className="loading-screen__shape loading-screen__shape--2" />
        <div className="loading-screen__shape loading-screen__shape--3" />
        <div className="loading-screen__shape loading-screen__shape--4" />
        <div className="loading-screen__shape loading-screen__shape--5" />
        <div className="loading-screen__shape loading-screen__shape--6" />
      </div>

      {/* Animated scan lines */}
      <div className="loading-screen__scanline loading-screen__scanline--1" aria-hidden="true" />
      <div className="loading-screen__scanline loading-screen__scanline--2" aria-hidden="true" />

      {/* Top left label */}
      <div className="loading-screen__top">
        <span className="loading-screen__label loading-screen__stagger-1">
          CHZMODEL — 2026
        </span>
      </div>

      {/* Center brand reveal */}
      <div className="loading-screen__center">
        {/* Animated ring */}
        <div className="loading-screen__ring loading-screen__stagger-1" aria-hidden="true" />

        <h1 className="loading-screen__brand loading-screen__stagger-2">
          CHZMODEL
        </h1>
        <div className="loading-screen__divider loading-screen__stagger-3" />
        <p className="loading-screen__name loading-screen__stagger-3">
          CHAZSEY BLESS
        </p>
        <p className="loading-screen__tagline loading-screen__stagger-4">
          A journey of elegance, beauty, and cultural pride.
        </p>

        {/* Progress bar */}
        <div className="loading-screen__track loading-screen__stagger-4">
          <div
            className="loading-screen__bar"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <span className="loading-screen__percent loading-screen__stagger-4">
          {Math.min(progress, 100)}%
        </span>
      </div>

      {/* Bottom right label */}
      <div className="loading-screen__bottom">
        <span className="loading-screen__label loading-screen__stagger-1">
          Dubai, UAE
        </span>
      </div>
    </div>
  )
}
