import Image from "next/image"

interface PortfolioItemProps {
  image: string
  title: string
  category: string
  overlay?: boolean
}

export default function PortfolioItem({ image, title, category, overlay = false }: PortfolioItemProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.02]">
      <Image
        src={image || "/placeholder.svg"}
        alt={title || "Portfolio item"}
        width={400}
        height={300}
        className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {overlay && (
        <div className="absolute inset-0 bg-cyan-600/80 flex flex-col justify-center items-center p-4 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
          <p className="text-white/80 text-sm">{category}</p>
        </div>
      )}

      {!overlay && (
        <div className="absolute inset-0 bg-blue-900/80 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
          <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
          <p className="text-white/80 text-sm">{category}</p>
        </div>
      )}
    </div>
  )
}

