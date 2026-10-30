"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Aligner3DViewer } from "@/components/ui/Aligner3DViewer";

interface EditorialHeroProps {
  onBookAppointment: () => void;
  onExploreInvisalign: () => void;
  onExploreClinic?: () => void;
}

export function EditorialHero({
  onBookAppointment,
  onExploreInvisalign,
  onExploreClinic,
}: EditorialHeroProps) {
  return (
    <section
      id="hero"
      aria-label="Dr. Preethi's Dentistry Hero"
      className="relative bg-white text-[#252724] border-b border-[#E8E9E5] overflow-hidden py-10 sm:py-14 lg:py-16 scroll-mt-20"
    >
      {/* Background Soft Studio Gradients */}
      <div className="absolute top-0 right-1/4 w-[420px] h-[420px] bg-gradient-to-br from-[#C7DDB0]/15 via-[#5C7651]/08 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-[360px] h-[360px] bg-gradient-to-tr from-[#F7F8F5] via-[#C7DDB0]/10 to-transparent rounded-full blur-2xl pointer-events-none -z-0" />

      {/* Main 12-Column Centered Container (Max 1200px) */}
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Description, CTAs, Location (7 cols / ~55%) */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-6">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F5] border border-[#E8E9E5] text-[11px] font-semibold tracking-[0.2em] uppercase text-[#5C7651]">
                <Sparkles className="w-3 h-3 text-[#5C7651]" />
                <span>MODERN DENTISTRY · COIMBATORE</span>
              </span>
            </motion.div>

            {/* Headline with Highlighted 'Confident Smile' (Desktop 52–60px) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            >
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.12] text-[#252724] text-balance">
                A clearer path <br />
                to your{" "}
                <span className="relative inline-block text-[#252724]">
                  <span className="relative z-10">confident smile</span>
                  <span
                    className="absolute inset-x-0 bottom-1 sm:bottom-1.5 h-3 sm:h-3.5 bg-[#C7DDB0]/35 -z-0 rounded-sm"
                    aria-hidden="true"
                  />
                </span>
                .
              </h1>
            </motion.div>

            {/* Supporting Copy (14–16px) */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-sm sm:text-base text-[#858780] leading-relaxed max-w-xl font-normal"
            >
              Discover personalized dental care and clear-aligner consultations in a
              welcoming, contemporary clinical environment.
            </motion.p>

            {/* CTAs Cluster (Disciplined button sizing: 13–15px) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <Button
                variant="primary"
                size="md"
                onClick={onBookAppointment}
                className="font-medium px-6 py-3 text-sm shadow-subtle hover:shadow-card bg-[#5C7651] hover:bg-[#496041]"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Book an Appointment
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={onExploreInvisalign}
                className="bg-white border-[#E8E9E5] text-[#252724] hover:bg-[#F7F8F5] hover:border-[#5C7651] px-6 py-3 text-sm font-medium"
              >
                Explore Clear Aligners
              </Button>
            </motion.div>

            {/* Micro Location & Consultation Availability Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#858780]"
            >
              <div className="flex items-center gap-1.5 text-[#5C7651] font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#5C7651]" />
                <span>Saibaba Colony, Coimbatore · Tamil Nadu</span>
              </div>

              <span className="text-[#E8E9E5] hidden sm:inline">|</span>

              <div className="flex items-center gap-1.5 font-medium text-[#252724]">
                <Clock className="w-3.5 h-3.5 text-[#5C7651]" />
                <span>Consultations by Appointment</span>
              </div>
            </motion.div>

            {/* Clinical Value Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-3 border-t border-[#E8E9E5] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#858780]"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5C7651]" />
                <span>Invisalign® Suite</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5C7651]" />
                <span>Unhurried 1-on-1 Care</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5C7651]" />
                <span>Hospital-Grade Hygiene</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contained 3D Clear-Aligner Visual (5 cols / ~45–50%) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="w-full max-w-md lg:max-w-none"
            >
              <Aligner3DViewer
                initialMode="upper-arch"
                showControls={true}
                interactive={true}
                compact={false}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
