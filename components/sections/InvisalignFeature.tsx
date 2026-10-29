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
      className="py-14 sm:py-18 lg:py-20 bg-white border-b border-[#E8E9E5]"
    >
      <div className="content-container space-y-10 lg:space-y-12">
        {/* Two-Column Layout (Left: 3D Visual, Right: Journey & Process) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#5C7651]">
                <Sparkles className="w-3.5 h-3.5 text-[#5C7651]" />
                <span>SIGNATURE ORTHODONTICS</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252724] tracking-tight leading-[1.18]">
                Precision in every step.
              </h2>
              <p className="text-sm sm:text-base text-[#858780] leading-relaxed pt-1">
                Clear aligners gradually guide your teeth into optimal alignment using custom-molded, biocompatible biopolymer trays—free from brackets, metal wires, or dietary restrictions.
              </p>
            </div>

            {/* Compact 4-Step Process Indicator */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="p-3.5 rounded-card-sm bg-[#F7F8F5] border border-[#E8E9E5] space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-[#5C7651] px-2 py-0.5 rounded-full bg-[#C7DDB0]/40">
                      {step.num}
                    </span>
                    <h3 className="font-semibold text-xs text-[#252724]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[12px] text-[#858780] leading-snug pl-7">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Clinical Advisory Statement */}
            <div className="p-3.5 rounded-card-sm bg-[#F7F8F5] border border-[#E8E9E5] flex items-start gap-2.5 text-xs text-[#858780]">
              <Info className="w-4 h-4 text-[#5C7651] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#252724]">Clinical Advisory:</strong> Treatment suitability and duration depend on individual bite complexity and Dr. Preethi’s clinical evaluation.
              </p>
            </div>

            {/* Consultation CTA */}
            <div className="pt-1">
              <Button
                variant="primary"
                size="md"
                onClick={onEnquireInvisalign}
                className="text-xs sm:text-sm px-6 py-2.5 shadow-subtle"
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
