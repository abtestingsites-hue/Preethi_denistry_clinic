"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, Award, Calendar, HeartHandshake } from "lucide-react";
import { leadDentist } from "@/data/dentistData";
import { Button } from "@/components/ui/Button";

interface MeetTheDentistProps {
  onBookAppointment: () => void;
}

export function MeetTheDentist({ onBookAppointment }: MeetTheDentistProps) {
  return (
    <section
      id="dentist"
      aria-label="Meet Dr. Preethi — Chief Dental Surgeon"
      className="py-18 sm:py-24 lg:py-28 bg-[#FAFAF7] border-b border-[#E7E9E2]"
    >
      <div className="content-container space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="max-w-xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#607C55]">
            <Sparkles className="w-3.5 h-3.5 text-[#607C55]" />
            <span>CLINICAL LEADERSHIP</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#20231F] tracking-tight leading-[1.15] font-normal">
            Meet Dr. Preethi.
          </h2>
          <p className="text-sm text-[#777D75] leading-relaxed">
            Dedicated clinical leadership, gentle dental artistry, and precision clear-aligner consultations founded on unhurried listening.
          </p>
        </div>

        {/* Compact Asymmetrical Profile Card (Portrait ~35–40% of width) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F2F4EF] rounded-card border border-[#E7E9E2] p-6 sm:p-9 shadow-card">
          {/* Portrait Column (4–5 cols / ~38%) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-card-sm overflow-hidden border border-[#E7E9E2] bg-white shadow-subtle aspect-[4/4.8] w-full max-w-sm mx-auto lg:max-w-none">
              <Image
                src={leadDentist.portraitUrl}
                alt={leadDentist.portraitAlt}
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Inset Credential Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-subtle text-xs text-[#20231F]">
                <div className="flex items-center justify-between font-semibold">
                  <span>{leadDentist.name}</span>
                  <span className="text-[10px] font-mono text-[#607C55] uppercase">
                    {leadDentist.qualifications.split("·")[0].trim()}
                  </span>
                </div>
                <p className="text-[11px] text-[#777D75] pt-0.5">{leadDentist.designation}</p>
              </div>
            </div>
          </div>

          {/* Clinician Profile & Philosophy Narrative (7–8 cols / ~62%) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#607C55] px-2.5 py-0.5 rounded-full bg-[#DCE8CF]/50">
                  {leadDentist.clinicRole}
                </span>
                <span className="text-xs text-[#777D75]">·</span>
                <span className="text-xs text-[#777D75]">{leadDentist.experienceYears}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#20231F] font-normal">
                {leadDentist.name}
              </h3>
              <p className="text-xs text-[#607C55] font-semibold">
                {leadDentist.qualifications}
              </p>
            </div>

            <p className="text-sm text-[#777D75] leading-relaxed">
              {leadDentist.bio}
            </p>

            {/* Treatment Focus Badges */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#20231F]">
                Treatment Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {leadDentist.treatmentFocus.map((focus) => (
                  <span
                    key={focus}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E7E9E2] text-xs font-medium text-[#20231F] shadow-subtle"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#607C55]" />
                    <span>{focus}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Compact Doctor's Philosophy Quote */}
            <div className="p-3.5 rounded-xl bg-white border border-[#E7E9E2] text-xs text-[#777D75] leading-relaxed">
              <p className="italic text-[#20231F]">
                &ldquo;{leadDentist.clinicalPhilosophy}&rdquo;
              </p>
            </div>

            {/* Direct Booking Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={onBookAppointment}
                className="text-xs sm:text-sm px-6 h-11 shadow-subtle bg-[#607C55] hover:bg-[#4E6645] text-white"
                leftIcon={<Calendar className="w-3.5 h-3.5" />}
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Book a Consultation with Dr. Preethi
              </Button>

              <span className="text-xs text-[#777D75]">
                {leadDentist.consultationDays}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
