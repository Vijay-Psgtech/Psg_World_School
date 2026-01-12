import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiHome } from "react-icons/fi";
import { IoHome } from "react-icons/io5";

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
    { label: "Careers", href: "https://careers.psginstitutions.in/" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        headerBg && !menuOpen
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-gradient-to-r from-[#f0f8ff]/80 via-[#f0f8ff]/90 to-[#e6f0ff]/80"
      }`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-12 py-2 md:py-3">
        {/* Logo */}
        <a href="/" className="relative flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="PSG World School Logo"
            className={`object-contain transition-all duration-300
              w-14 h-14
              md:w-18 md:h-18
              lg:w-32 lg:h-24
              ${headerBg ? "md:w-16 md:h-16 lg:w-20 lg:h-20" : ""}
            `}
          />
          <span
            className={`text-xl sm:text-xl md:text-2xl font-extrabold tracking-wide text-blue-900 leading-tight hover:text-[#B18141] mr-4`}
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            PSG World School
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
          <li>
            <a
              href="/"
              className="flex items-center gap-2 text-blue-900 hover:text-[#B18141]"
            >
              <IoHome className="text-xl" />
              {/* <span className="text-xl">🏠</span> */}
            </a>
          </li>
          {navLinks.map((item) => (
            <li key={item.label} className="relative group">
              <a
                href={item.href}
                target={item.label === "Careers" ? "_blank" : "_self"}
                className="font-semibold text-blue-900 text-md px-2 py-1 transition-colors duration-300 group-hover:text-[#B18141]"
              >
                {item.label}
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#B18141] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex flex-col items-center text-center">
          <img
            src="/100yearsLogo.png"
            alt="100 years of PSG"
            className={`transition-all duration-300 object-contain
              w-32 h-12 lg:w-32 lg:h-14
              ${headerBg ? "lg:w-28 lg:h-12" : ""}
            `}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
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
            <li>
              <a
                href="/"
                className="flex items-center gap-3 hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                <IoHome className="text-2xl" />
                Home
              </a>
            </li>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.label === "Careers" ? "_blank" : "_self"}
                  className="hover:text-yellow-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center text-sm text-blue-700">
            <img
              src="/100yearsLogo.png"
              alt="100 years of PSG"
              className="w-28 h-14 mx-auto mb-3"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
