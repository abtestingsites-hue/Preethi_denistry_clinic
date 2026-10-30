"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileNavigation } from "./MobileNavigation";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  onBookAppointmentClick?: () => void;
}

export function SiteHeader({ onBookAppointmentClick }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "about",
        "treatments",
        "invisalign",
        "gallery",
        "testimonials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 76;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Modified nav items: Removed "Meet Dr. Preethi", "Blog", and converted "Contact" into prominent button
  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Treatments", id: "treatments" },
    { label: "Invisalign", id: "invisalign" },
    { label: "Clinic Gallery", id: "gallery" },
    { label: "Patient Reviews", id: "testimonials" },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-subtle border-b border-[#E8E9E5]"
            : "bg-white border-b border-[#E8E9E5]/70"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Wordmark / Brand Identity */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C7651] rounded-lg p-1"
            >
              {/* Brand Aligner Arc Mark */}
              <div className="w-10 h-10 rounded-full bg-[#C7DDB0]/40 border border-[#A9C49A]/50 flex items-center justify-center text-[#5C7651] group-hover:bg-[#C7DDB0]/60 transition-colors">
                <svg
                  className="w-5 h-5 text-[#5C7651]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 14c2-5 7-9 12-7 4 1 5 4 4 7-1 2-3 3-5 3s-4-2-6-3-4 0-5 0" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#252724] tracking-tight font-semibold leading-tight group-hover:text-[#5C7651] transition-colors">
                  Dr. Preethi’s
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#858780] font-medium">
                  Dentistry · Saibaba Colony
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-7"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C7651] rounded",
                      isActive
                        ? "text-[#5C7651] font-semibold"
                        : "text-[#858780] hover:text-[#252724]"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5C7651] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: Prominent "Contact" Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#5C7651] hover:bg-[#496041] shadow-subtle hover:shadow-card transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C7651]"
              >
                Contact
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="lg:hidden p-2 rounded-xl text-[#252724] hover:bg-[#F7F8F5] border border-[#E8E9E5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C7651]"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Drawer Navigation */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onContact={() => scrollToSection("contact")}
      />
    </>
  );
}
