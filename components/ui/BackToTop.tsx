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
      className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-white text-[#252724] border border-[#E8E9E5] shadow-float hover:bg-[#F7F8F5] hover:border-[#5C7651] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C7651]"
    >
      <ArrowUp className="w-4 h-4 text-[#5C7651]" />
    </button>
  );
}
