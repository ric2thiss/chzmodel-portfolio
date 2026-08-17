export default function GalleryFilter({ categories = [], activeCategory = "All", onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 my-8">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onSelectCategory(cat)}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none border ${
            activeCategory === cat
              ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
              : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-900 hover:text-neutral-900'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
