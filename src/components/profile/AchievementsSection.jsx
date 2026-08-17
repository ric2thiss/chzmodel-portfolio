export default function AchievementsSection({ achievements }) {
  const { pageants, runway } = achievements

  return (
    <section id="achievements" className="w-full bg-neutral-50 py-16 sm:py-24 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className="flex items-center justify-between mb-12 border-b border-neutral-200 pb-4"
          data-aos="fade-down"
        >
          <h2 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
            02 / PAGEANT TITLES & RUNWAY SHOWS
          </h2>
          <span className="text-xs font-bold tracking-widest text-neutral-900 uppercase">
            HONORS & EXPERIENCE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Pageant Achievements */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
              PAGEANT TITLES & AWARDS
            </h3>
            
            <div className="space-y-4">
              {pageants.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white p-6 border border-neutral-200 shadow-sm hover:border-neutral-900 transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-1 bg-neutral-900 text-white text-[10px] font-mono font-bold uppercase tracking-widest">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 font-semibold uppercase">
                      {item.location}
                    </span>
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 uppercase group-hover:text-neutral-700 transition-colors">
                    {item.title}
                  </h4>
                  
                  <div className="mt-2 text-sm font-bold text-neutral-800 uppercase tracking-wide flex items-center gap-2">
                    <span className="text-amber-500 text-base">★</span> {item.award}
                  </div>
                  
                  <p className="text-xs text-neutral-500 mt-2 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Runway Fashion Shows */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
              RUNWAY FASHION SHOWS
            </h3>

            <div className="space-y-4">
              {runway.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white p-6 border border-neutral-200 shadow-sm hover:border-neutral-900 transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 bg-neutral-100 text-neutral-900 border border-neutral-300 text-[10px] font-mono font-bold uppercase tracking-widest">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 font-semibold uppercase">
                      {item.organizer}
                    </span>
                  </div>

                  <h4 className="text-lg font-black tracking-tight text-neutral-900 uppercase group-hover:text-neutral-700 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs font-semibold text-neutral-600 uppercase tracking-widest mt-1">
                    Organized by: {item.organizer}
                  </p>

                  <p className="text-xs text-neutral-500 mt-2 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
