'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();
  if (pathname != "/studio") {
    return (
      <nav className='border-b sticky top-0 bg-primary-400 text-primary-900 border-primary-800 z-10'>
        <div className='max-w-7xl px-8 py-2 sm:py-0 mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2'>
          <Link href='/' className='font-semibold text-2xl sm:px-4 md:hover:underline'>Bill Yu</Link>
          <ul className='flex items-center justify-end gap-4 sm:gap-0 text-lg font-medium'>
              <Link className='sm:p-4 md:hover:underline md:hover:bg-primary-500' href='/blog'>Blog</Link>
              <Link className='sm:p-4 md:hover:underline md:hover:bg-primary-500' href='/projects'>Projects</Link>
          </ul>
        </div>
      </nav>
    );
  }
}
  