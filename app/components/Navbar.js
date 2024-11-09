"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname != "/studio") {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2A2A29] bg-opacity-75 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {pathname === "/" ? (
              "Bill Yu"
            ) : (
              <Link href="/" className="hover:text-[#859F3D] transition-colors">
                Bill Yu
              </Link>
            )}
          </h1>
          <ul className="flex space-x-4">
            {["Blog", "Experience", "Projects", "Contact"].map((page) => (
              <li key={page}>
                {pathname.includes(page.toLowerCase()) ? (
                  <p className="underline underline-offset-2">{page}</p>
                ) : (
                  <Link
                    href={`/${page.toLowerCase()}`}
                    className="hover:text-[#859F3D] transition-colors"
                  >
                    {page}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
