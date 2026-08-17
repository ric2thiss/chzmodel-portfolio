import ModelStats from './ModelStats'

export default function AboutBio({ profile }) {
  const { name, title, location, bio, stats, representation } = profile

  return (
    <section id="about" className="w-full bg-white py-16 sm:py-24 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          className="flex items-center justify-between mb-10 border-b border-neutral-100 pb-4"
          data-aos="fade-down"
        >
          <h2 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
            01 / MODEL PROFILE & BIOGRAPHY
          </h2>
          <span className="text-xs font-bold tracking-widest text-neutral-900 uppercase">
            {location}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Bio & Statement */}
          <div className="lg:col-span-7 space-y-6">
            <h3
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 uppercase leading-none"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              {name}
            </h3>
            <p
              className="text-sm sm:text-base font-bold tracking-widest text-neutral-500 uppercase"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {title}
            </p>
            <p
              className="text-base sm:text-lg text-neutral-700 leading-relaxed font-light"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {bio}
            </p>
            <div className="pt-4" data-aos="fade-up" data-aos-delay="400">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase block mb-1">
                REPRESENTATION & BOOKING
              </span>
              <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
                {representation}
              </p>
            </div>
          </div>

          {/* Right Column: Specifications Card */}
          <div className="lg:col-span-5 w-full" data-aos="fade-left" data-aos-delay="200">
            <ModelStats stats={stats} />
          </div>

        </div>

      </div>
    </section>
  )
}
