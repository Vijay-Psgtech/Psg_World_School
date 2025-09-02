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
    // { label: "Gallery", href: "/gallery" },
    // { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        headerBg && !menuOpen
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-gradient-to-b from-black/30 to-transparent"
      }`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <nav className="container mx-auto flex justify-between items-center py-3 px-4 md:px-12">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <span 
            className={`text-xl md:text-2xl font-bold tracking-wide transition ${headerBg ? "text-blue-900 hover:text-yellow-500" : "text-white hover:text-blue-700 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]"}`}
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            PSG World School
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 lg:gap-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`relative font-medium px-2 py-1 transition
                  ${
                    headerBg
                      ? "text-blue-900 hover:text-yellow-500"
                      : "text-white hover:text-yellow-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]"
                  }
                `}
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300
                    ${headerBg ? "bg-yellow-500" : "bg-yellow-400"}
                    hover:w-full`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Action (100 years logo) */}
        <div className="hidden md:flex items-center">
          <img
            src="/100yearsLogo.png"
            alt="100 years"
            className="w-28 h-12 object-contain"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {!menuOpen && (
            <FiMenu
              className="text-blue-900 text-3xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-white/95 to-blue-50/90 text-blue-900 py-6 px-8 z-50 flex flex-col animate-slideDown">
          <div className="flex justify-end mb-6">
            <FiX
              className="text-blue-900 text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <ul className="flex flex-col gap-6 text-lg font-medium">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-yellow-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
