import { useState } from 'react'

export default function EditorialTile({
  src,
  alt,
  title = "Model Portrait",
  aspectRatio = "aspect-square",
  badge = null,
  indexCounter = null,
  eagerLoad = true,
  className = "",
  onClick = null
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-neutral-100 group ${onClick ? 'cursor-pointer' : ''} ${aspectRatio} ${className}`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={alt || title}
    >
      
      {/* Blur/Skeleton placeholder until loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse z-0" />
      )}

      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        loading={eagerLoad ? "eager" : "lazy"}
        fetchPriority={eagerLoad ? "high" : "auto"}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
        }`}
      />

      {/* Click To Enlarge Hover Overlay */}
      {onClick && (
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-white z-10">
          <span className="text-xs font-mono font-bold tracking-widest uppercase bg-neutral-900/80 px-3 py-1.5 rounded-full border border-white/20">
            🔍 Enlarge Photo
          </span>
        </div>
      )}

      {/* Overlay Badge: "PORTFOLIO" */}
      {badge && (
        <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
          <span className="text-xs sm:text-sm font-black tracking-widest text-white drop-shadow-md uppercase">
            {badge}
          </span>
        </div>
      )}

      {/* Overlay Counter: "(03)" */}
      {indexCounter && (
        <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-neutral-900 drop-shadow-sm uppercase">
            {indexCounter}
          </span>
        </div>
      )}
    </div>
  )
}
