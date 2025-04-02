import { Layout, PenTool, Globe, Briefcase, Camera, Smartphone } from "lucide-react"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "layout":
        return <Layout className="text-cyan-400" size={24} />
      case "pen-tool":
        return <PenTool className="text-cyan-400" size={24} />
      case "globe":
        return <Globe className="text-cyan-400" size={24} />
      case "briefcase":
        return <Briefcase className="text-cyan-400" size={24} />
      case "camera":
        return <Camera className="text-cyan-400" size={24} />
      case "smartphone":
        return <Smartphone className="text-cyan-400" size={24} />
      default:
        return <Layout className="text-cyan-400" size={24} />
    }
  }

  return (
    <div className="bg-blue-900/30 p-4 sm:p-6 rounded-lg transition-all duration-500 hover:bg-blue-800/50 hover:translate-y-[-10px] hover:shadow-xl h-full">
      <div className="mb-3 sm:mb-4 transform transition-transform duration-300 hover:scale-110">{getIcon()}</div>
      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
    </div>
  )
}

