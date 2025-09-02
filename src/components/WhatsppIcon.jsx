import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsappIcon = () => {
  const phoneNumber = "919876543210"; // Replace with your WhatsApp number (with country code, no + or 0)
  const message = "Hello, I have a query."; // Pre-filled message

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 left-6 z-50 p-4 rounded-full shadow-lg transition-transform duration-300 bg-green-500 hover:scale-110 hover:bg-green-600 text-white"
    >
      <FaWhatsapp size={28} />
    </button>
  );
};

export default WhatsappIcon;
