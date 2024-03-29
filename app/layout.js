import { Play } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const play = Play({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Bill Yu',
  description: 'Welcome to my website!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className="bg-primary-700">
      <body className={play.className + ' bg-primary-200'}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
