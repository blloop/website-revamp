import { Inter } from 'next/font/google';
import { Play } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })
const play = Play({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Bill Yu',
  description: 'Welcome to my website!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={play.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
