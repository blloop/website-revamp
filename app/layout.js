import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Bill Yu",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800 text-olive-50 font-serif">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
