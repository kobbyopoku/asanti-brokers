"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "asanti-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Small delay so the slide-up animation is visible
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-22 sm:pb-0 animate-slide-up">
      <div className="bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 text-center sm:text-left">
            We use cookies to improve your experience. By continuing, you agree
            to our use of cookies.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleConsent("declined")}
              className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              Decline
            </button>
            <button
              onClick={() => handleConsent("accepted")}
              className="px-4 py-2 text-sm font-medium text-white bg-asanti-green rounded-lg hover:bg-asanti-green-dark transition-colors duration-200 cursor-pointer"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
