import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // modern icon

const BacktoTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {   // ✅ use scrollY
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
        bg-gradient-to-r from-blue-600 to-yellow-400 text-white hover:scale-110`}
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BacktoTop;
