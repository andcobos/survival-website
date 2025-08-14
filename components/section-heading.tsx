interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ title, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#E6ECEA] mb-4">{title}</h2>
      {description && <p className="text-lg text-[#9FB3A8] max-w-3xl mx-auto leading-relaxed">{description}</p>}
    </div>
  )
}
