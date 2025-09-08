import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderBg(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Facilities", href: "/facilities" },
    { label: "Admissions", href: "/admissions" },
    { label: "Students", href: "/students-life" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        headerBg
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-gradient-to-b from-black/50 to-transparent py-4"
      }`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-12">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="Logo"
            className={`transition-all duration-300 ${
              headerBg ? "w-12 h-12" : "w-16 h-16"
            } object-contain`}
          />
          <span
            className={`text-2xl md:text-3xl font-bold tracking-wide transition-colors duration-300 ${
              headerBg ? "text-blue-900 hover:text-yellow-500" : "text-[#F5EAD8] hover:text-yellow-500"
            }`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            PSG World School
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 lg:gap-12">
          {navLinks.map((item) => (
            <li key={item.label} className="relative group">
              <a
                href={item.href}
                className={`text-lg lg:text-xl font-semibold px-2 py-1 transition-colors duration-300 group-hover:text-yellow-500 ${
                  headerBg ? "text-blue-900" : "text-[#F5EAD8]"
                }`}
                style={{ fontFamily: "revert-layer" }}
              >
                {item.label}
              </a>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
        </ul>

        {/* Right Action (100 years logo) */}
        <div className="hidden md:flex items-center">
          <img
            src="/100yearsLogo.png"
            alt="100 years"
            className={`transition-all duration-300 ${
              headerBg ? "w-28 h-12" : "w-32 h-14"
            } object-contain`}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {!menuOpen && (
            <FiMenu
              className={`text-3xl cursor-pointer transition-colors duration-300 ${
                headerBg ? "text-blue-900" : "text-white"
              }`}
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-lg text-blue-900 py-6 px-8 z-50 flex flex-col animate-slideDown">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <FiX
              className="text-blue-900 text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-8 text-xl font-semibold tracking-wide">
            {navLinks.map((item) => (
              <li key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="transition-colors duration-300 hover:text-yellow-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Footer */}
          <div className="mt-auto pt-8 text-center text-sm text-gray-600">
            Excellence in Education since 1926 ✨
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
