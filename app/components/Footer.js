"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (!pathname.includes("/studio")) {
    return (
      <footer className="py-8 text-center border-t-2 border-gray-700">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/blloop"
            className="text-olive-300 hover:text-opacity-80 transition-colors"
            target="_blank"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/billyu32"
            className="text-olive-300 hover:text-opacity-80 transition-colors"
            target="_blank"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:blloop@uw.edu"
            className="text-olive-300 hover:text-opacity-80 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} Bill Yu. All rights reserved.
        </p>
      </footer>
    );
  }
}
