"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronUp, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Blog", "Experience", "Projects", "Contact"];
  const pathname = usePathname();

  if (!pathname.includes("/studio")) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-600 bg-opacity-75 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {pathname === "/" ? (
              "Bill Yu"
            ) : (
              <Link href="/" className="hover:text-olive-300 transition-colors">
                Bill Yu
              </Link>
            )}
          </h1>
          <ul className="hidden sm:flex space-x-4">
            {links.map((page, index) => (
              <li key={index}>
                {pathname === "/" + page.toLowerCase() ? (
                  <p className="underline underline-offset-2">{page}</p>
                ) : (
                  <Link
                    href={`/${page.toLowerCase()}`}
                    className="hover:text-olive-300 transition-colors"
                  >
                    {page}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="sm:hidden">
            {open ? (
              <ChevronUp onClick={() => setOpen(false)} />
            ) : (
              <Menu onClick={() => setOpen(true)} className="sm:hidden" />
            )}
          </div>
          {open && (
            <div className="flex flex-col text-right w-full absolute top-full left-0 bg-gray-600 bg-opacity-50">
              {links.map((page, index) =>
                pathname === "/" + page.toLowerCase() ? (
                  <p
                    key={index}
                    className="bg-olive-700 underline underline-offset-2 p-4"
                  >
                    {page}
                  </p>
                ) : (
                  <Link
                    key={index}
                    onClick={() => setOpen(false)}
                    href={`/${page.toLowerCase()}`}
                    className="p-4"
                  >
                    {page}
                  </Link>
                ),
              )}
            </div>
          )}
        </div>
      </nav>
    );
  }
}
