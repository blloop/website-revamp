'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();
  if (pathname != "/studio") {
    return (
      <nav className='border-b sticky top-0 bg-primary-400 text-primary-900 border-primary-800 z-10'>
        <div className='max-w-7xl px-8 mx-auto flex items-center justify-between'>
          <Link href='/' className='font-semibold text-lg p-4 md:hover:underline'>Bill Yu</Link>
          <ul className='hidden md:flex items-center justify-end text-lg font-medium'>
              <Link className='p-4 md:hover:underline md:hover:bg-primary-500' href='/blog'>Blog</Link>
              <Link className='p-4 md:hover:underline md:hover:bg-primary-500' href='/projects'>Projects</Link>
          </ul>
        </div>
      </nav>
    );
  }
}
  