export default function CategoryHeader({ title, align = "left" }) {
  const alignmentClass = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"

  return (
    <div className={`mb-3 ${alignmentClass}`}>
      <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-neutral-900 uppercase">
        {title}
      </h3>
    </div>
  )
}
