'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();
  if (pathname != "/studio") {
    return (
      <nav className='border-b sticky top-0 bg-primary-400 text-primary-900 border-primary-800 z-10'>
        <div className='h-14 max-w-7xl p-8 mx-auto flex items-center justify-between'>
          <Link href='/' className='font-semibold text-lg p-4 md:hover:underline'>Bill Yu</Link>
          <ul className='hidden md:flex items-center justify-end space-x-4 text-lg font-medium'>
            <li className='md:hover:underline'>
              <Link href='/blog' className='p-4'>Blog</Link>
            </li>
            <li className='md:hover:underline'>
              <Link href='/projects' className='p-4'>Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
  