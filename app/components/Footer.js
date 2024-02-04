'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {  
  const pathname = usePathname();
  if (pathname != "/studio") {
    return (
      <footer className='border-t text-center p-4 text-sm font-semibold bg-primary-400 text-primary-900 border-primary-900'>
        <p>Me &copy; {new Date().getFullYear()}</p>
      </footer>
    );
  }
}