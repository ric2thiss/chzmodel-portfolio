import EditorialTile from './EditorialTile'

export default function ContentFocusGrid({ data, onImageClick }) {
  const { title, subtitle, categories } = data
  const { styling, inspiration, lifestyle } = categories

  return (
    <section id="content-focus" className="w-full bg-white pt-6 pb-16 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Headline */}
        <div className="text-center my-6 sm:my-10 lg:my-12 space-y-2" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-neutral-900 tracking-tight uppercase leading-none select-none">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-neutral-400 uppercase">
              {subtitle}
            </p>
          )}
        </div>

        {/* 3-Column Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">

          {/* Column 1: Left Image (hiyas-crowned.jpg) */}
          <div className="flex flex-col w-full" data-aos="fade-right" data-aos-delay="100">
            <EditorialTile
              src={styling.image.url}
              alt={styling.image.alt}
              title={styling.image.title}
              aspectRatio="aspect-[3/4]"
              badge={styling.badge}
              eagerLoad={true}
              onClick={() => onImageClick && onImageClick({
                image: styling.image.url,
                title: styling.image.title,
                category: "Hiyas 2026",
                year: "2026",
                description: styling.image.alt
              })}
              className="w-full shadow-sm hover:shadow-md transition-shadow"
            />
          </div>

          {/* Column 2: Center Mosaic Grid (Random Hiyas ng Gitnang Silangan photos) */}
          <div className="flex flex-col w-full md:col-span-2 lg:col-span-1" data-aos="fade-up" data-aos-delay="200">
            <div className="grid grid-cols-3 gap-1 w-full bg-white">

              {/* Row 1: Empty, Tile 1, Empty */}
              <div className="bg-white aspect-square" />
              <div data-aos="zoom-in" data-aos-delay="300">
                <EditorialTile
                  src={inspiration.tiles[0].url}
                  alt={inspiration.tiles[0].alt}
                  title={inspiration.tiles[0].title}
                  aspectRatio="aspect-square"
                  eagerLoad={true}
                  onClick={() => onImageClick && onImageClick({
                    image: inspiration.tiles[0].url,
                    title: inspiration.tiles[0].title,
                    category: "Hiyas 2026",
                    year: "2026",
                    description: inspiration.tiles[0].alt
                  })}
                />
              </div>
              <div className="bg-white aspect-square" />

              {/* Row 2: Empty, Tile 2, Empty */}
              <div className="bg-white aspect-square" />
              <div data-aos="zoom-in" data-aos-delay="400">
                <EditorialTile
                  src={inspiration.tiles[1].url}
                  alt={inspiration.tiles[1].alt}
                  title={inspiration.tiles[1].title}
                  aspectRatio="aspect-square"
                  eagerLoad={true}
                  onClick={() => onImageClick && onImageClick({
                    image: inspiration.tiles[1].url,
                    title: inspiration.tiles[1].title,
                    category: "Hiyas 2026",
                    year: "2026",
                    description: inspiration.tiles[1].alt
                  })}
                />
              </div>
              <div className="bg-white aspect-square" />

              {/* Row 3: Tile 3, Empty, Empty */}
              <div data-aos="fade-right" data-aos-delay="500">
                <EditorialTile
                  src={inspiration.tiles[2].url}
                  alt={inspiration.tiles[2].alt}
                  title={inspiration.tiles[2].title}
                  aspectRatio="aspect-square"
                  eagerLoad={true}
                  onClick={() => onImageClick && onImageClick({
                    image: inspiration.tiles[2].url,
                    title: inspiration.tiles[2].title,
                    category: "Hiyas 2026",
                    year: "2026",
                    description: inspiration.tiles[2].alt
                  })}
                />
              </div>
              <div className="bg-white aspect-square" />
              <div className="bg-white aspect-square" />

              {/* Row 4: Tile 4, Tile 5, Empty */}
              <div data-aos="fade-up-right" data-aos-delay="600">
                <EditorialTile
                  src={inspiration.tiles[3].url}
                  alt={inspiration.tiles[3].alt}
                  title={inspiration.tiles[3].title}
                  aspectRatio="aspect-square"
                  eagerLoad={true}
                  onClick={() => onImageClick && onImageClick({
                    image: inspiration.tiles[3].url,
                    title: inspiration.tiles[3].title,
                    category: "Hiyas 2026",
                    year: "2026",
                    description: inspiration.tiles[3].alt
                  })}
                />
              </div>
              <div data-aos="fade-up-left" data-aos-delay="700">
                <EditorialTile
                  src={inspiration.tiles[4].url}
                  alt={inspiration.tiles[4].alt}
                  title={inspiration.tiles[4].title}
                  aspectRatio="aspect-square"
                  eagerLoad={true}
                  onClick={() => onImageClick && onImageClick({
                    image: inspiration.tiles[4].url,
                    title: inspiration.tiles[4].title,
                    category: "Hiyas 2026",
                    year: "2026",
                    description: inspiration.tiles[4].alt
                  })}
                />
              </div>
              <div className="bg-white aspect-square" />

            </div>
          </div>

          {/* Column 3: Right Image (hero-image.jpg) */}
          <div className="flex flex-col w-full md:col-span-1" data-aos="fade-left" data-aos-delay="300">
            <EditorialTile
              src={lifestyle.image.url}
              alt={lifestyle.image.alt}
              title={lifestyle.image.title}
              aspectRatio="aspect-[3/4]"
              indexCounter={lifestyle.indexCounter}
              eagerLoad={true}
              onClick={() => onImageClick && onImageClick({
                image: lifestyle.image.url,
                title: lifestyle.image.title,
                category: "Hiyas 2026",
                year: "2026",
                description: lifestyle.image.alt
              })}
              className="w-full shadow-sm hover:shadow-md transition-shadow"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
