import { useState } from 'react'
import GalleryFilter from './GalleryFilter'

// Random AOS animation directions for visual interest
const AOS_ANIMATIONS = [
  'fade-up',
  'fade-down',
  'fade-left',
  'fade-right',
  'fade-up-left',
  'fade-up-right',
  'zoom-in',
  'zoom-in-up',
  'flip-left',
  'flip-right'
]

function getAosAnimation(index) {
  return AOS_ANIMATIONS[index % AOS_ANIMATIONS.length]
}

export default function PortfolioGallery({ items = [], categories = [], onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All"
    ? items
    : items.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <section id="portfolio" className="w-full bg-white py-16 sm:py-24 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          className="flex items-center justify-between mb-6 border-b border-neutral-100 pb-4"
          data-aos="fade-down"
        >
          <h2 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
            02 / SELECTED WORK & GALLERY
          </h2>
          <span className="text-xs font-bold tracking-widest text-neutral-900 uppercase">
            ({filteredItems.length} WORKS)
          </span>
        </div>

        {/* Category Filters */}
        <div data-aos="fade-up" data-aos-delay="100">
          <GalleryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* 4-Column Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox && onOpenLightbox(filteredItems, index)}
              className="group relative cursor-pointer overflow-hidden bg-neutral-100 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500"
              data-aos={getAosAnimation(index)}
              data-aos-delay={index * 80}
            >
              {/* Aspect Ratio Container — Uniform 3:4 ratio filling 100% of card */}
              <div className="w-full aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay Title Card */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-300 uppercase">
                  {item.category} — {item.year}
                </span>
                <h3 className="text-base font-black tracking-tight uppercase text-white mt-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
