"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { AppointmentForm } from "@/components/booking/AppointmentForm";
import { clinicInfo } from "@/data/clinicInfo";

interface AppointmentBookingProps {
  initialTreatmentId?: string;
}

export function AppointmentBooking({
  initialTreatmentId,
}: AppointmentBookingProps) {
  return (
    <section
      id="booking-section"
      aria-label="Appointment Booking and Consultation Request"
      className="py-20 lg:py-32 bg-[#F7FAF7] border-b border-[#E5EAE4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#668C63]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>APPOINTMENT ENQUIRY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111311] tracking-tight leading-[1.15]">
            Let’s Plan Your Next Visit.
          </h2>
          <p className="text-base sm:text-lg text-[#666B66] leading-relaxed pt-1">
            Tell us what you need, and our clinic team can follow up to discuss appointment availability
            and welcome you to our Saibaba Colony practice.
          </p>
        </div>

        {/* Two-Column Structured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Authentic Clinic Image, Reassurance, and Verified Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Authentic Clinic Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-[#E5EAE4] shadow-card aspect-[4/3] bg-[#111411]">
              <Image
                src="/Clinic7.png"
                alt="Dr. Preethi's Dentistry Clinical Operatory and Signature Treatment Suite"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <span className="font-semibold text-[#B8D8B5] uppercase tracking-wider text-[10px]">
                  Clinical Hygiene & Ergonomics
                </span>
                <p className="text-white/90">Hospital-grade sterilization and comfortable daylight operatory</p>
              </div>
            </div>

            {/* Reassurance Features */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5EAE4] shadow-subtle space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111311]">
                What to Expect Upon Requesting
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-[#666B66]">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#EAF3E9] text-[#466A45] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#668C63]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111311]">
                      Transparent Clinical Consultation
                    </h4>
                    <p className="text-xs text-[#666B66]">
                      Comprehensive assessment without pressured procedures or hidden expectations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#EAF3E9] text-[#466A45] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#668C63]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111311]">
                      Prompt Reception Follow-Up
                    </h4>
                    <p className="text-xs text-[#666B66]">
                      Our team will reach out via call or WhatsApp within clinic hours to confirm your schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact & Hours Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5EAE4] shadow-subtle space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111311]">
                Direct Reception Contact
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#111311]">
                <a
                  href={`tel:${clinicInfo.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#F7FAF7] hover:bg-[#EAF3E9] transition-colors font-medium border border-[#E5EAE4]"
                >
                  <Phone className="w-4 h-4 text-[#668C63] shrink-0" />
                  <span>Call Reception: {clinicInfo.phoneDisplay}</span>
                </a>

                {clinicInfo.socialLinks.whatsapp && (
                  <a
                    href={clinicInfo.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#F7FAF7] hover:bg-[#EAF3E9] transition-colors font-medium border border-[#E5EAE4]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#668C63] shrink-0" />
                    <span>WhatsApp Reception Desk</span>
                  </a>
                )}

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F7FAF7] text-xs text-[#666B66] border border-[#E5EAE4]">
                  <MapPin className="w-4 h-4 text-[#668C63] shrink-0 mt-0.5" />
                  <span>{clinicInfo.fullAddress}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form Component (7 cols) */}
          <div className="lg:col-span-7">
            <AppointmentForm initialTreatmentId={initialTreatmentId} />
          </div>
        </div>
      </div>
    </section>
  );
}

