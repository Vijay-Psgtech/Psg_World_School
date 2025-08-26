import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);  
  }, []);

  return (
    <header className={`fixed absolute top-0 left-0 w-full z-50 ${headerBg ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/Logo.png"
            alt="Logo"
            className="w-16 h-16 object-contain rounded-full shadow-lg"
          />
          <span className="text-2xl font-bold text-white tracking-wide">
            PSG World School
          </span>
        </a>
        {/* Navigation */}
        <ul className="hidden md:flex gap-8">
          <li><a href="/about" className="text-white hover:text-yellow-400 transition">About</a></li>
          <li><a href="/academics" className="text-white hover:text-yellow-400 transition">Academics</a></li>
          <li><a href="/facilities" className="text-white hover:text-yellow-400 transition">Facilities</a></li>
          <li><a href="/admissions" className="text-white hover:text-yellow-400 transition">Admissions</a></li>
          <li><a href="/gallery" className="text-white hover:text-yellow-400 transition">Gallery</a></li>
          <li><a href="/news" className="text-white hover:text-yellow-400 transition">News</a></li>
          <li><a href="/contact" className="text-white hover:text-yellow-400 transition">Contact</a></li>
        </ul>
        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/login" className="text-white hover:text-yellow-400 transition font-medium">Login</a>
          <a href="/register" className="bg-blue-700 text-white px-5 py-2 rounded-full shadow hover:bg-yellow-500 transition font-semibold">Register</a>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden z-30">
          {!menuOpen && (

            <FiMenu className="text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 text-white py-4 px-6 z-20 flex flex-col">
          <div className="flex justify-end mb-4">
            <FiX className="text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          </div>
          <ul className="flex flex-col gap-4">
            <li><a href="/about" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="/academics" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Academics</a></li>
            <li><a href="/facilities" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Facilities</a></li>
            <li><a href="/admissions" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Admissions</a></li>
            <li><a href="/gallery" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Gallery</a></li>
            <li><a href="/news" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>News</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li><a href="/login" className="hover:text-yellow-400 transition font-medium" onClick={() => setMenuOpen(false)}>Login</a></li>
            <li>
              <a href="/register" className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-full shadow hover:bg-yellow-500 transition font-semibold text-center block" onClick={() => setMenuOpen(false)}>
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;