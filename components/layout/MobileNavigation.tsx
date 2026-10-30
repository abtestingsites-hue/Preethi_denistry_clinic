"use client";

import React, { useEffect } from "react";
import { X, Calendar, MapPin, Phone, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clinicInfo } from "@/data/clinicInfo";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (id: string) => void;
  onBookAppointment: () => void;
}

export function MobileNavigation({
  isOpen,
  onClose,
  activeSection,
  onNavigate,
  onBookAppointment,
}: MobileNavigationProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About Clinic", id: "about" },
    { label: "Treatments", id: "treatments" },
    { label: "Invisalign® Suite", id: "invisalign" },
    { label: "Our Clinic Spaces", id: "gallery" },
    { label: "Meet Dr. Preethi", id: "dentist" },
    { label: "The Smile Journal", id: "blogs" },
    { label: "Patient Reviews", id: "testimonials" },
    { label: "Frequently Asked Questions", id: "faq" },
    { label: "Contact & Location", id: "contact" },
  ];

  const handleItemClick = (id: string) => {
    onClose();
    setTimeout(() => {
      onNavigate(id);
    }, 150);
  };

  const handleBookClick = () => {
    onClose();
    setTimeout(() => {
      onBookAppointment();
    }, 150);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex justify-end"
    >
      {/* Dimmed Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-sm bg-white h-full shadow-elevated flex flex-col justify-between overflow-y-auto p-6 z-10 animate-in slide-in-from-right duration-300">
        <div className="space-y-6">
          {/* Header Row */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E7E9E2]">
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold text-[#20231F]">
                Dr. Preethi’s
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#777D75]">
                Dentistry · Coimbatore
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-full bg-[#F2F4EF] text-[#20231F] hover:bg-[#E7E9E2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1.5" aria-label="Mobile Directory">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={cn(
                    "w-full text-left py-2.5 px-3.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between",
                    isActive
                      ? "bg-[#F2F4EF] text-[#607C55] font-semibold border-l-2 border-[#607C55]"
                      : "text-[#20231F] hover:bg-[#F2F4EF]"
                  )}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-[#777D75]">0{idx + 1}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Booking & Contact Actions */}
        <div className="pt-6 border-t border-[#E7E9E2] space-y-4">
          <Button
            variant="primary"
            size="lg"
            onClick={handleBookClick}
            className="w-full shadow-card font-medium bg-[#607C55] hover:bg-[#4E6645] text-white"
            leftIcon={<Calendar className="w-4 h-4" />}
          >
            Book Appointment
          </Button>

          <div className="space-y-2 text-xs text-[#777D75] pt-1">
            <div className="flex items-center gap-2 text-[#20231F]">
              <MapPin className="w-3.5 h-3.5 text-[#607C55] shrink-0" />
              <span>Saibaba Colony, Coimbatore · Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#5C7651] shrink-0" />
              <a
                href={`tel:${clinicInfo.phoneRaw}`}
                className="hover:text-[#252724] transition-colors"
              >
                {clinicInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
