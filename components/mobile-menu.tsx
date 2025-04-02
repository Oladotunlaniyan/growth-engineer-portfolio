"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white focus:outline-none">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-blue-900 z-50 shadow-lg animate-fadeSlideDown">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#" className="hover:text-cyan-400 py-2 border-b border-blue-800">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-400 py-2 border-b border-blue-800">
              About
            </a>
            <a href="#resume" className="hover:text-cyan-400 py-2 border-b border-blue-800">
              Resume
            </a>
            <a href="#portfolio" className="hover:text-cyan-400 py-2 border-b border-blue-800">
              Portfolio
            </a>
            <a href="#" className="hover:text-cyan-400 py-2">
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
