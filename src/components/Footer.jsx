import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

import ibLogo from "../assets/images/logos/bit_lg.png";
import cisLogo from "../assets/images/logos/iit_lg.png";
import rsLogo from "../assets/images/logos/mp_lg.png";
import ecoLogo from "../assets/images/logos/vit_lg.png";

const Footer = () => {
  return (
    <footer className="bg-[#112a55] text-white pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold text-gold mb-4">Contact Us</h3>
          <p className="flex items-start gap-3 mb-3 text-gray-300">
            <MapPin className="w-5 h-5 text-gold mt-1" />
            PSG World School, S.F. No. 472, Civil Aerodrome Post,
            <br />
            Coimbatore, Tamil Nadu – 641014
          </p>
          <p className="flex items-center gap-3 mb-2 text-gray-300">
            <Mail className="w-5 h-5 text-gold" />
            admissions@psgworldschool.edu.in
          </p>
          <p className="flex items-center gap-3 text-gray-300">
            <Phone className="w-5 h-5 text-gold" />
            +91 XXXXX XXXXX
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-gold mb-4">
            Connect With Us
          </h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-gold hover:text-yellow-400 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-gold hover:text-yellow-400 transition"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-gold hover:text-yellow-400 transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-gold hover:text-yellow-400 transition"
            >
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>

        {/* Accreditation Logos */}
        {/* <div>
          <h3 className="text-xl font-semibold text-gold mb-4">
            Accreditations
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <img src={ibLogo} alt="IB" className="h-10 object-contain" />
            <img src={cisLogo} alt="CIS" className="h-10 object-contain" />
            <img src={rsLogo} alt="Round Square" className="h-10 object-contain" />
            <img src={ecoLogo} alt="Eco Schools" className="h-10 object-contain" />
          </div>
        </div> */}

        {/*Map location*/}
        <div className="w-full h-[250px] rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="school-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0537513396685!2d77.03128737498162!3d11.034594154378855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858526b5c0591%3A0x6c452206816788d4!2sPSG%20College%20of%20Arts%20and%20Science!5e0!3m2!1sen!2sin!4v1756792652876!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-gray-400 mt-6 text-sm">
        © {new Date().getFullYear()} PSG World School. All rights reserved.
        <br/>
        Powered By IT Services Team, PSG Institutions.
      </div>
    </footer>
  );
};

export default Footer;
