import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 bg-[#1A1A19] border-t border-[#2A2A29]">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Bill Yu. All rights reserved.</p>
        <nav>
          <ul className="flex justify-center space-x-4">
            {['Home', 'Blog', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-[#859F3D] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
