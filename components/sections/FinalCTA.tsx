"use client";

import React from "react";
import { ArrowRight, Sparkles, MapPin, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AlignerGraphic } from "@/components/ui/AlignerGraphic";
import { clinicInfo } from "@/data/clinicInfo";

interface FinalCTAProps {
  onBookAppointment: () => void;
  onContactClinic: () => void;
}

export function FinalCTA({
  onBookAppointment,
  onContactClinic,
}: FinalCTAProps) {
  return (
    <section
      aria-label="Final Appointment Call to Action"
      className="relative bg-[#111310] text-white overflow-hidden"
    >
      {/* Top Continuous Scrolling Text Banner */}
      <div className="bg-[#252724] border-y border-white/10 py-3.5 overflow-hidden select-none">
        <div className="flex w-max space-x-8 animate-marquee motion-reduce:[animation-play-state:paused]">
          {[1, 2, 3].map((set) => (
            <div key={set} className="flex items-center space-x-8 shrink-0 text-xs sm:text-sm font-medium tracking-[0.22em] uppercase text-white/90">
              <span className="text-[#8f9d6f]">CONFIDENT SMILES</span>
              <span className="text-[#6a774b]">✦</span>
              <span>PERSONALIZED DENTAL CARE</span>
              <span className="text-[#6a774b]">✦</span>
              <span className="text-[#8f9d6f]">YOUR SMILE JOURNEY</span>
              <span className="text-[#6a774b]">✦</span>
              <span>INVISALIGN® CONSULTATIONS</span>
              <span className="text-[#6a774b]">✦</span>
              <span className="text-[#8f9d6f]">SAIBABA COLONY, COIMBATORE</span>
              <span className="text-[#6a774b]">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Conversion Stage */}
      <div className="relative py-14 sm:py-18 lg:py-20">
        {/* Background Decorative Aligner Graphic & Refraction Aura */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6a774b]/12 rounded-full blur-3xl" />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#8f9d6f]/10 rounded-full blur-2xl" />

          {/* Floating Aligner Tray Graphic Outline */}
          <div className="absolute -bottom-10 right-10 opacity-20 hidden md:block">
            <AlignerGraphic size="xl" animated={true} />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-[0.2em] uppercase text-[#8f9d6f]">
            <Sparkles className="w-3.5 h-3.5 text-[#8f9d6f]" />
            <span>START YOUR SMILE CONSULTATION</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-white tracking-tight leading-[1.15] text-balance">
            Your Smile Journey <br />
            <span className="italic font-light text-[#8f9d6f]">Starts with a Conversation.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto font-light">
            Take the first step toward understanding your clear aligner or dental care options with an unhurried, one-on-one consultation with Dr. Preethi in Saibaba Colony.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="pistachio"
              size="lg"
              onClick={onBookAppointment}
              className="w-full sm:w-auto px-8 py-4 font-semibold shadow-elevated"
              leftIcon={<Calendar className="w-4 h-4 text-[#111310]" />}
              rightIcon={<ArrowRight className="w-4 h-4 text-[#111310]" />}
            >
              Book an Appointment
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={onContactClinic}
              className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-[#8f9d6f] px-8 py-4"
            >
              Contact the Clinic
            </Button>
          </div>

          {/* Location Marker */}
          <div className="pt-6 flex items-center justify-center gap-2 text-xs text-white/60">
            <MapPin className="w-3.5 h-3.5 text-[#8f9d6f]" />
            <span>Saibaba Colony, Coimbatore · Unhurried 1-on-1 Appointments</span>
          </div>
        </div>
      </div>
    </section>
  );
}
