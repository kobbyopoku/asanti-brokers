"use client";

import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us
      </span>

      <a
        href="https://wa.me/233201961648?text=Hi%20Asanti%20Brokers%2C%20I%20need%20help%20with%20insurance."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ${
          animate ? "animate-whatsapp-pulse" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.81-8.066-7.124-.23-.314-1.928-2.568-1.928-4.896s1.22-3.476 1.654-3.95c.39-.428 1.028-.64 1.64-.64.198 0 .376.01.536.018.47.02.706.048 1.016.788.39.926 1.338 3.254 1.454 3.492.118.238.236.56.078.876-.15.322-.282.466-.52.736-.238.27-.464.476-.702.766-.218.254-.464.526-.196.996.27.468 1.196 1.972 2.568 3.194 1.764 1.57 3.25 2.058 3.71 2.284.352.174.772.138 1.052-.158.354-.376.792-.998 1.238-1.612.318-.436.718-.49 1.106-.33.392.154 2.484 1.172 2.91 1.386.426.214.71.322.814.496.104.176.104 1.012-.286 2.112z" />
        </svg>
      </a>
    </div>
  );
}
