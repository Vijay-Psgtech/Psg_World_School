import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-200 pt-10 pb-4 text-gray-700">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-start">
        {/* Logo & Registered Office */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:w-2/5">
          <img
            src="/Logo.png"
            alt="PSG World Logo"
            className="w-40 h-auto mb-4 md:mb-0"
          />
          <div>
            <h4 className="font-bold mb-2">Registered Office</h4>
            <p className="mb-2">
              Avinashi Road
              <br />
              Peelamedu Coimbatore,
              <br />
              Tamilnadu, India-641004
            </p>
            <div className="flex items-center gap-2 mb-1">
              <FiPhone className="text-blue-500" />
              <a
                href="tel:04224344522"
                className="text-blue-600 hover:underline"
              >
                0422 4344522
              </a>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <FiPhone className="text-blue-500" />
              <a
                href="tel:04224344220"
                className="text-blue-600 hover:underline"
              >
                0422 4344220
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-blue-500" />
              <a
                href="mailto:info@bvmglobal.org"
                className="text-blue-600 hover:underline"
              >
                info@bvmglobal.org
              </a>
            </div>
          </div>
        </div>
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-3/5">
          <div>
            <h4 className="font-bold mb-2">Who We Are</h4>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/academics" className="hover:underline">
                  Academics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">What We Do</h4>
            <ul className="space-y-1">
              <li>
                <a href="/programmes" className="hover:underline">
                  Our Programmes
                </a>
              </li>
              <li>
                <a href="/facilities" className="hover:underline">
                  Facilities
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Get Involved</h4>
            <ul className="space-y-1">
              <li>
                <a href="/gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/news" className="hover:underline">
                  Careers & News
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li>
                <a href="/mandatory-disclosure" className="hover:underline">
                  Mandatory Disclosure
                </a>
              </li>
              <li>
                <a href="/organisational-policy" className="hover:underline">
                  Organisational Policy
                </a>
              </li>
              <li className="mt-2 font-bold">Contact</li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/admissions" className="hover:underline">
                  Admissions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Divider */}
      <hr className="my-8" />
      {/* Bottom Bar */}
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-2 md:mb-0">
          PSG World School © 2025 • All Rights Reserved
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <span>
            <a href="/terms" className="hover:underline">
              Terms & Conditions
            </a>{" "}
            |{" "}
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms-of-use" className="hover:underline">
              Terms of Use
            </a>
          </span>
          <span className="flex gap-4 mt-2 md:mt-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-blue-500 text-2xl hover:text-blue-700" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-blue-500 text-2xl hover:text-blue-700" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
