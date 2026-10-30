"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-[#FAFAF7] text-[#20231F] border border-[#E7E9E2] shadow-float hover:bg-[#F2F4EF] hover:border-[#607C55] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55]"
    >
      <ArrowUp className="w-4 h-4 text-[#607C55]" />
    </button>
  );
}
