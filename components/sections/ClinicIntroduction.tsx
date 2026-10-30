"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clinicInfo } from "@/data/clinicInfo";

interface ClinicIntroductionProps {
  onDiscoverClinic: () => void;
  onBookAppointment: () => void;
}

export function ClinicIntroduction({
  onDiscoverClinic,
  onBookAppointment,
}: ClinicIntroductionProps) {
  return (
    <section
      id="about"
      aria-label="Introduction to Dr. Preethi's Dentistry"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Clinic Image with Architectural Crop (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-[#E5EAE4] aspect-[4/5] sm:aspect-[4/4.5] max-w-lg mx-auto lg:max-w-none">
              <Image
                src="/Clinic.png"
                alt="Dr. Preethi's Dentistry Reception and Patient Lounge in Saibaba Colony"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5EAE4] shadow-card flex items-center justify-between text-xs">
                <div className="space-y-0.5">
                  <span className="font-semibold text-[#111311]">Saibaba Colony Practice</span>
                  <p className="text-[#666B66]">Ivory walls & calming architectural light</p>
                </div>
                <span className="p-2 rounded-xl bg-[#EAF3E9] text-[#466A45]">
                  <Sparkles className="w-4 h-4 text-[#668C63]" />
                </span>
              </div>
            </div>

            {/* Small Floating Image / Detail Accent Card */}
            <div className="hidden sm:flex absolute -top-6 -right-6 p-4 rounded-2xl bg-[#EAF3E9] border border-[#B8D8B5]/50 shadow-card items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#668C63] shadow-sm">
                <Shield className="w-5 h-5 text-[#668C63]" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-[#111311]">Hospital-Grade Hygiene</p>
                <p className="text-[#666B66]">Strict ultrasonic sterilization</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Values (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#668C63]">
              <span className="w-6 h-[1.5px] bg-[#668C63]" />
              <span>THE CLINIC EXPERIENCE</span>
            </div>

            {/* Section Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#111311] leading-[1.15] text-balance">
              Modern Dentistry. <br />
              <span className="text-[#668C63] font-normal italic">A More Personal Experience.</span>
            </h2>

            {/* Introduction Copy */}
            <p className="text-base sm:text-lg text-[#666B66] leading-relaxed">
              At Dr. Preethi’s Dentistry, we believe exceptional dental care begins with listening.
              Located in the heart of Saibaba Colony, Coimbatore, our practice is designed from the
              ground up to replace the stress of traditional dental clinics with a calming,
              welcoming clinical journey.
            </p>

            <p className="text-sm sm:text-base text-[#666B66] leading-relaxed">
              Every consultation is unhurried. Whether you are exploring Invisalign® clear aligners,
              conservative smile enhancements, or routine preventive oral care, Dr. Preethi and our team
              provide transparent evaluations and personalized treatment plans tailored to your needs.
            </p>

            {/* Key Value Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#668C63] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#111311]">
                    Discreet Orthodontic Solutions
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666B66]">
                    Dedicated consultation suite for digital clear aligners and smile roadmapping.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#668C63] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#111311]">
                    Unhurried, One-on-One Attention
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666B66]">
                    Dedicated consultation slots giving you adequate time to ask questions and review findings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#668C63] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#111311]">
                    Contemporary & Calming Atmosphere
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666B66]">
                    Ergonomic treatment chairs, filtered natural light, and seamless infection control.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={onDiscoverClinic}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Discover Our Clinic
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={onBookAppointment}
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

