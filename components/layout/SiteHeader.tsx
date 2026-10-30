"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileNavigation } from "./MobileNavigation";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  onBookAppointmentClick: () => void;
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
        "dentist",
        "testimonials",
        "blogs",
        "faq",
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
      const headerOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Treatments", id: "treatments" },
    { label: "Invisalign", id: "invisalign" },
    { label: "Clinic Gallery", id: "gallery" },
    { label: "Meet Dr. Preethi", id: "dentist" },
    { label: "Patient Reviews", id: "testimonials" },
    { label: "Blog", id: "blogs" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-[#FAFAF7]/95 backdrop-blur-md shadow-subtle border-b border-[#E7E9E2]"
            : "bg-[#FAFAF7] border-b border-[#E7E9E2]/70"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[74px]">
            {/* Wordmark / Brand Identity */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55] rounded-lg p-1"
            >
              {/* Brand Aligner Arc Mark */}
              <div className="w-10 h-10 rounded-full bg-[#DCE8CF]/40 border border-[#607C55]/30 flex items-center justify-center text-[#607C55] group-hover:bg-[#DCE8CF]/70 transition-colors">
                <svg
                  className="w-5 h-5 text-[#607C55]"
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
                <span className="font-serif text-xl sm:text-2xl text-[#20231F] tracking-tight font-normal leading-tight group-hover:text-[#607C55] transition-colors">
                  Dr. Preethi’s
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#777D75] font-medium">
                  Dentistry · Saibaba Colony
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden xl:flex items-center gap-6"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55] rounded",
                      isActive
                        ? "text-[#607C55] font-semibold"
                        : "text-[#777D75] hover:text-[#20231F]"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#607C55] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Compact Nav for Large Screens (1024-1279px) */}
            <nav
              aria-label="Compact Main Navigation"
              className="hidden lg:flex xl:hidden items-center gap-4"
            >
              {[
                { label: "About", id: "about" },
                { label: "Treatments", id: "treatments" },
                { label: "Invisalign", id: "invisalign" },
                { label: "Story", id: "aligner-experience" },
                { label: "Clinic", id: "gallery" },
                { label: "Doctor", id: "dentist" },
                { label: "Reviews", id: "testimonials" },
                { label: "Contact", id: "contact" },
              ].map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-xs font-medium transition-colors relative py-1",
                      isActive
                        ? "text-[#607C55] font-semibold"
                        : "text-[#777D75] hover:text-[#20231F]"
                    )}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={onBookAppointmentClick}
                className="hidden sm:inline-flex h-11 bg-[#607C55] hover:bg-[#4E6645] text-white shadow-subtle px-5"
                leftIcon={<Calendar className="w-3.5 h-3.5" />}
              >
                Book Appointment
              </Button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="lg:hidden p-2 rounded-xl text-[#20231F] hover:bg-[#F2F4EF] border border-[#E7E9E2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55]"
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
        onBookAppointment={onBookAppointmentClick}
      />
    </>
  );
}
