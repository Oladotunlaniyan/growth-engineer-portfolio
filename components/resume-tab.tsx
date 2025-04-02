interface ResumeTabProps {
  id: string
  label: string
  number: string
  active: boolean
}

export default function ResumeTab({ id, label, number, active }: ResumeTabProps) {
  return (
    <button
      className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 ${
        active ? "bg-blue-800 text-white" : "text-gray-300 hover:text-white"
      }`}
    >
      <span className="font-bold">{label}</span>
      <span className="text-xs ml-2">{number}</span>
    </button>
  )
}

