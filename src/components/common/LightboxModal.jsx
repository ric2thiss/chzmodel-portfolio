import { useEffect } from 'react'

export default function LightboxModal({ item, isOpen, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose, onPrev, onNext])

  if (!isOpen || !item) return null

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 transition-opacity duration-300 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Top Modal Controls Header */}
      <div className="flex items-center justify-between text-white z-10">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
            {item.category} — {item.year}
          </span>
          <h4 className="text-lg font-bold uppercase tracking-tight text-white mt-0.5">
            {item.title}
          </h4>
        </div>
        
        <button
          type="button"
          onClick={onClose}
          className="p-3 text-neutral-400 hover:text-white transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close Lightbox Modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Image Display */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        
        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-2 sm:left-6 z-20 p-3 bg-black/40 hover:bg-black/80 text-white rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <img
          src={item.image}
          alt={item.title}
          className="max-h-[80vh] max-w-full object-contain shadow-2xl transition-transform duration-300"
          decoding="async"
        />

        <button
          type="button"
          onClick={onNext}
          className="absolute right-2 sm:right-6 z-20 p-3 bg-black/40 hover:bg-black/80 text-white rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>

      {/* Bottom Description */}
      <div className="text-center max-w-2xl mx-auto z-10">
        <p className="text-xs sm:text-sm text-neutral-300 font-light">
          {item.description}
        </p>
      </div>
    </div>
  )
}
