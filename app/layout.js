import { GeistSans } from "geist/font/sans";
// import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Bill Yu",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-primary-700">
      <body className={`${GeistSans.className} bg-primary-200`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
