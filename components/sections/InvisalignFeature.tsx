"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Aligner3DViewer } from "@/components/ui/Aligner3DViewer";

interface InvisalignFeatureProps {
  onEnquireInvisalign: () => void;
}

export function InvisalignFeature({
  onEnquireInvisalign,
}: InvisalignFeatureProps) {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      description: "One-on-one examination and discussion of your orthodontic goals.",
    },
    {
      num: "02",
      title: "Professional Assessment",
      description: "Precision 3D optical bite scanning without traditional impression putty.",
    },
    {
      num: "03",
      title: "Personalized Planning",
      description: "Computerized step simulation previewing expected tooth movement.",
    },
    {
      num: "04",
      title: "Follow-Up Care",
      description: "Regular check-ins at our Saibaba Colony practice to monitor tracking.",
    },
  ];

  return (
    <section
      id="invisalign"
      aria-label="Signature Clear Aligner Experience"
      className="py-18 sm:py-24 lg:py-28 bg-[#FAFAF7] border-b border-[#E7E9E2]"
    >
      <div className="content-container space-y-10 lg:space-y-14">
        {/* Two-Column Layout (Left: 3D Visual, Right: Journey & Process) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Contained 3D Dental Arch & Aligner (5 cols) */}
          <div className="lg:col-span-5 relative">
            <Aligner3DViewer
              initialMode="tray-closeup"
              showControls={true}
              interactive={true}
              compact={true}
            />
          </div>

          {/* Right Column: Heading, Description, Process, CTA (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#607C55]">
                <Sparkles className="w-3.5 h-3.5 text-[#607C55]" />
                <span>SIGNATURE ORTHODONTICS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#20231F] tracking-tight leading-[1.15] font-normal">
                Precision in every step.
              </h2>
              <p className="text-sm sm:text-base text-[#777D75] leading-relaxed pt-1">
                Clear aligners gradually guide your teeth into optimal alignment using custom-molded, biocompatible biopolymer trays—free from brackets, metal wires, or dietary restrictions.
              </p>
            </div>

            {/* Compact 4-Step Process Indicator */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="p-4 rounded-card-sm bg-[#F2F4EF] border border-[#E7E9E2] space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-[#607C55] px-2 py-0.5 rounded-full bg-[#DCE8CF]/50">
                      {step.num}
                    </span>
                    <h3 className="font-semibold text-xs text-[#20231F]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[12px] text-[#777D75] leading-snug pl-7">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Clinical Advisory Statement */}
            <div className="p-4 rounded-card-sm bg-[#F2F4EF] border border-[#E7E9E2] flex items-start gap-2.5 text-xs text-[#777D75]">
              <Info className="w-4 h-4 text-[#607C55] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#20231F]">Clinical Advisory:</strong> Treatment suitability and duration depend on individual bite complexity and Dr. Preethi’s clinical evaluation.
              </p>
            </div>

            {/* Consultation CTA */}
            <div className="pt-1">
              <Button
                variant="primary"
                size="md"
                onClick={onEnquireInvisalign}
                className="text-xs sm:text-sm px-6 h-11 shadow-subtle bg-[#607C55] hover:bg-[#4E6645] text-white"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Enquire About Clear Aligners
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
