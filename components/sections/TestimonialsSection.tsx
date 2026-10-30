"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, ExternalLink, Sparkles, Quote } from "lucide-react";
import { testimonialsData, testimonialsConfig } from "@/data/testimonialsData";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonialsData[activeIndex];

  return (
    <section
      id="testimonials"
      aria-label="Verified Patient Testimonials"
      className="py-14 sm:py-18 lg:py-20 bg-[#F7F8F5] border-b border-[#E8E9E5] scroll-mt-20"
    >
      <div className="content-container space-y-8 sm:space-y-10">
        {/* Section Header with Verified Google Reviews Pill */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#6a774b]">
              <Sparkles className="w-3.5 h-3.5 text-[#6a774b]" />
              <span>PATIENT EXPERIENCES</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#181A16] tracking-tight leading-[1.18]">
              Smiles That Speak for Themselves.
            </h2>
            <p className="text-sm text-[#858780] leading-relaxed">
              Honest reflections from patients who entrusted their clear aligners and family oral care to Dr. Preethi’s Dentistry in Saibaba Colony.
            </p>
          </div>

          {/* Compact Google Reviews Rating Card */}
          <div className="p-3.5 rounded-xl bg-white border border-[#E8E9E5] shadow-subtle hover:shadow-card transition-shadow flex items-center gap-3.5 shrink-0 self-start sm:self-auto">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1 text-[#6a774b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs font-bold text-[#181A16]">4.9 / 5 Rating</p>
              <span className="text-[10px] text-[#858780] block">Verified Google Reviews</span>
            </div>

            <a
              href={testimonialsConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#F7F8F5] hover:bg-[#8f9d6f]/20 text-[#6a774b] transition-colors"
              aria-label="Open Google Maps Reviews"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Redesigned Premium Testimonial Stage Card */}
        <div className="relative bg-white rounded-card border border-[#E8E9E5] p-6 sm:p-9 lg:p-11 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden group">
          {/* Subtle Ambient Quote Glyph Watermark */}
          <div className="absolute top-4 right-6 text-[#E8E9E5]/60 pointer-events-none select-none">
            <Quote className="w-24 h-24 stroke-[1] opacity-40 rotate-180" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative z-10 space-y-6"
            >
              {/* Card Header: Star Rating & Treatment Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E8E9E5]/70">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[#6a774b]">
                    {[...Array(currentTestimonial.ratingStars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#181A16] px-2 py-0.5 rounded-full bg-[#F7F8F5] border border-[#E8E9E5]">
                    5.0 Verified Experience
                  </span>
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#8f9d6f]/20 text-[#6a774b] border border-[#8f9d6f]/30">
                  {currentTestimonial.treatmentTag}
                </span>
              </div>

              {/* Patient Feedback Quote Typography */}
              <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-[#181A16] leading-relaxed italic max-w-4xl font-normal">
                &ldquo;{currentTestimonial.feedbackText}&rdquo;
              </blockquote>

              {/* Card Footer: Patient Profile & Verification */}
              <div className="pt-4 border-t border-[#E8E9E5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#6a774b] text-white flex items-center justify-center font-bold text-sm shadow-subtle ring-2 ring-[#8f9d6f]/25">
                    {currentTestimonial.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-[#181A16]">
                      {currentTestimonial.patientName}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#858780] pt-0.5">
                      <span className="inline-flex items-center gap-1 text-[#6a774b] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6a774b]" />
                        <span>{currentTestimonial.source}</span>
                      </span>
                      <span>·</span>
                      <span>{currentTestimonial.dateTag}</span>
                    </div>
                  </div>
                </div>

                {/* Carousel Controls & Pagination Pill */}
                <div className="flex items-center gap-3 self-end sm:self-center">
                  <div className="flex items-center gap-1 bg-[#F7F8F5] p-1 rounded-full border border-[#E8E9E5]">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous testimonial"
                      className="p-2 rounded-full text-[#181A16] hover:bg-white hover:text-[#6a774b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a774b]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono font-medium text-[#858780] px-2">
                      0{activeIndex + 1} / 0{testimonialsData.length}
                    </span>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next testimonial"
                      className="p-2 rounded-full text-[#181A16] hover:bg-white hover:text-[#6a774b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a774b]"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quick Review Switcher Indicators */}
        <div className="flex items-center justify-center gap-2 pt-1">
          {testimonialsData.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Jump to review ${idx + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeIndex === idx
                  ? "w-8 bg-[#6a774b]"
                  : "w-2 bg-[#E8E9E5] hover:bg-[#858780]"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
