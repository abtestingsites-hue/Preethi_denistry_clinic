"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles, Shield, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ClinicAboutProps {
  onDiscoverClinic: () => void;
  onBookAppointment: () => void;
  onExploreInvisalign?: () => void;
}

export function ClinicAbout({
  onDiscoverClinic,
  onBookAppointment,
  onExploreInvisalign,
}: ClinicAboutProps) {
  return (
    <section
      id="about"
      aria-label="About Dr. Preethi's Dentistry"
      className="py-18 sm:py-24 lg:py-28 bg-[#FAFAF7] border-b border-[#E7E9E2]"
    >
      <div className="content-container">
        {/* Balanced Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Authentic Clinic Photograph (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-card overflow-hidden border border-[#E7E9E2] bg-[#F2F4EF] shadow-card aspect-[4/3.2] w-full">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                alt="Dr. Preethi's Dentistry Reception & Arrival Lounge in Saibaba Colony"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Inset Caption Pill */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-subtle flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-[#20231F]">Saibaba Colony Practice</span>
                  <p className="text-[11px] text-[#777D75]">Ivory walls & tranquil lighting</p>
                </div>
                <span className="p-1.5 rounded-lg bg-[#DCE8CF]/50 text-[#607C55]">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Label, Heading, Description, Statements, CTA (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small Section Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#607C55]">
              <span className="w-5 h-[1.5px] bg-[#607C55]" />
              <span>ABOUT OUR PRACTICE</span>
            </div>

            {/* Medium Heading (34–44px) */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#20231F] tracking-tight leading-[1.15] text-balance font-normal">
              A welcoming space for thoughtful dental care.
            </h2>

            {/* Short Clinic Introduction */}
            <p className="text-sm sm:text-base text-[#777D75] leading-relaxed">
              At Dr. Preethi’s Dentistry, our practice was designed to replace the rushed, clinical atmosphere of traditional dental visits with an unhurried, comfortable experience in Saibaba Colony, Coimbatore.
            </p>

            {/* 3 Concise Feature Statements */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#DCE8CF]/50 flex items-center justify-center text-[#607C55] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#20231F]">
                    Unhurried, One-on-One Consultations
                  </h4>
                  <p className="text-xs text-[#777D75] leading-relaxed">
                    Dedicated appointment slots allow Dr. Preethi to carefully examine your teeth, listen to your concerns, and answer questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#DCE8CF]/50 flex items-center justify-center text-[#607C55] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#20231F]">
                    Precision 3D Digital Smile Scanning
                  </h4>
                  <p className="text-xs text-[#777D75] leading-relaxed">
                    Modern intraoral scanning captures microscopic dental contours for custom clear-aligner planning without gooey impression trays.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#DCE8CF]/50 flex items-center justify-center text-[#607C55] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#20231F]">
                    Hospital-Grade Hygiene Protocols
                  </h4>
                  <p className="text-xs text-[#777D75] leading-relaxed">
                    Multistage ultrasonic sterilization and spotless operatory environments for safe, trusted patient care.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions: "Explore Our Clinic" CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button
                variant="primary"
                size="md"
                onClick={onDiscoverClinic}
                className="text-xs sm:text-sm px-6 h-11 shadow-subtle bg-[#607C55] hover:bg-[#4E6645] text-white"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Explore Our Clinic
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={onBookAppointment}
                className="text-xs sm:text-sm px-6 h-11 border-[#E7E9E2] text-[#20231F] hover:bg-[#F2F4EF]"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
