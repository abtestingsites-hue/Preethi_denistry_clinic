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
      className="py-14 sm:py-18 lg:py-20 bg-white border-b border-[#E8E9E5] scroll-mt-20"
    >
      <div className="content-container">
        {/* Balanced Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authentic Clinic Photograph (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-card overflow-hidden border border-[#E8E9E5] bg-[#F7F8F5] shadow-card aspect-[4/3] sm:aspect-[4/3.2] w-full">
              <Image
                src="/Clinic.png"
                alt="Dr. Preethi's Dentistry Reception & Arrival Lounge in Saibaba Colony"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Inset Caption Pill */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-subtle flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-[#252724]">Saibaba Colony Practice</span>
                  <p className="text-[11px] text-[#858780]">Reception Lounge & Tranquil Setting</p>
                </div>
                <span className="p-1.5 rounded-lg bg-[#C7DDB0]/25 text-[#5C7651]">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Overlapping Secondary Operatory Preview */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-36 sm:w-44 aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white shadow-elevated bg-white">
              <Image
                src="/Clinic7.png"
                alt="Signature treatment suite with circular halo lighting at Dr. Preethi's Dentistry"
                fill
                className="object-cover"
                sizes="176px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-1.5 left-2 right-2 text-white">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-[#C7DDB0] block">
                  Operatory Suite
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Label, Heading, Description, Statements, CTA (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Small Section Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#5C7651]">
              <span className="w-5 h-[1.5px] bg-[#5C7651]" />
              <span>ABOUT OUR PRACTICE</span>
            </div>

            {/* Medium Heading (32–40px) */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252724] tracking-tight leading-[1.18] text-balance">
              A welcoming space for thoughtful dental care.
            </h2>

            {/* Short Clinic Introduction */}
            <p className="text-sm sm:text-base text-[#858780] leading-relaxed">
              At Dr. Preethi’s Dentistry, our practice was designed to replace the rushed, clinical atmosphere of traditional dental visits with an unhurried, comfortable experience in Saibaba Colony, Coimbatore.
            </p>

            {/* 3 Concise Feature Statements */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C7DDB0]/25 flex items-center justify-center text-[#5C7651] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#252724]">
                    Unhurried, One-on-One Consultations
                  </h4>
                  <p className="text-xs text-[#858780] leading-relaxed">
                    Dedicated appointment slots allow Dr. Preethi to carefully examine your teeth, listen to your concerns, and answer questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C7DDB0]/25 flex items-center justify-center text-[#5C7651] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#252724]">
                    Precision 3D Digital Smile Scanning
                  </h4>
                  <p className="text-xs text-[#858780] leading-relaxed">
                    Modern intraoral scanning captures microscopic dental contours for custom clear-aligner planning without gooey impression trays.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C7DDB0]/25 flex items-center justify-center text-[#5C7651] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#252724]">
                    Hospital-Grade Hygiene Protocols
                  </h4>
                  <p className="text-xs text-[#858780] leading-relaxed">
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
                className="text-xs sm:text-sm px-6 py-2.5 shadow-subtle bg-[#5C7651] hover:bg-[#496041]"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Explore Our Clinic
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={onBookAppointment}
                className="text-xs sm:text-sm px-6 py-2.5 hover:border-[#5C7651]"
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
