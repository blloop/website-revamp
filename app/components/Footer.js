import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 bg-[#1A1A19] text-center border-t border-[#2A2A29]">
      <div className="flex justify-center space-x-6">
        <a href="#" className="text-[#859F3D] hover:text-opacity-80 transition-colors">
          <Github size={24} />
        </a>
        <a href="#" className="text-[#859F3D] hover:text-opacity-80 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="#" className="text-[#859F3D] hover:text-opacity-80 transition-colors">
          <Mail size={24} />
        </a>
      </div>
      <p className="mt-4">&copy; {new Date().getFullYear()} Bill Yu. All rights reserved.</p>
    </footer>
  )
}
