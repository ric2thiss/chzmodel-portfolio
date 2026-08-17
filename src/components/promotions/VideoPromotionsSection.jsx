export default function VideoPromotionsSection({ promotions }) {
  return (
    <section id="promotions" className="w-full bg-white py-16 sm:py-24 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className="flex items-center justify-between mb-12 border-b border-neutral-100 pb-4"
          data-aos="fade-down"
        >
          <h2 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
            04 / VIDEO PROMOTIONS & CAMPAIGNS
          </h2>
          <span className="text-xs font-bold tracking-widest text-neutral-900 uppercase">
            COMMERCIAL ENDORSEMENTS
          </span>
        </div>

        {/* Video Promotions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {promotions.map((promo, index) => (
            <div
              key={promo.id}
              className="bg-neutral-50 p-6 border border-neutral-200 hover:border-neutral-900 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={index * 90}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 bg-neutral-900 text-white">
                    {promo.badge}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                    {promo.category}
                  </span>
                </div>

                <h3 className="text-xl font-black tracking-tight text-neutral-900 uppercase">
                  {promo.brand}
                </h3>

                <p className="text-xs font-medium text-neutral-600 uppercase tracking-wider mt-1">
                  {promo.campaign}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between">
                {promo.link ? (
                  <a
                    href={promo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-900 hover:text-neutral-600 transition-colors group"
                  >
                    <span>Watch Reel</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                ) : (
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-400 italic">
                    {promo.status}
                  </span>
                )}

                <span className="text-xs font-mono font-bold text-neutral-300">
                  (0{promo.id})
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
