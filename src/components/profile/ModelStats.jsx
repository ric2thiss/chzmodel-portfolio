export default function ModelStats({ stats = [] }) {
  return (
    <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-none border border-neutral-800 shadow-lg">
      <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-6 border-b border-neutral-800 pb-3">
        PHYSICAL SPECIFICATIONS
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-neutral-400 uppercase">
              {stat.label}
            </span>
            <span className="text-sm sm:text-base font-bold tracking-tight text-white mt-0.5">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
