"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname != "/studio") {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2A2A29] bg-opacity-90 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bill Yu</h1>
          <ul className="flex space-x-4">
            {['Blog', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="hover:text-[#859F3D] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
