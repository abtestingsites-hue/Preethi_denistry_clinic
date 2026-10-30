"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle, ExternalLink, Sparkles } from "lucide-react";
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
      className="py-18 sm:py-24 lg:py-28 bg-[#F2F4EF] border-b border-[#E7E9E2]"
    >
      <div className="content-container space-y-8 sm:space-y-10">
        {/* Section Header with Verified Google Reviews Pill */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#607C55]">
              <Sparkles className="w-3.5 h-3.5 text-[#607C55]" />
              <span>PATIENT EXPERIENCES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#20231F] tracking-tight leading-[1.15] font-normal">
              Smiles That Speak for Themselves.
            </h2>
            <p className="text-sm text-[#777D75] leading-relaxed">
              Honest reflections from patients who entrusted their clear aligners and family oral care to Dr. Preethi’s Dentistry in Saibaba Colony.
            </p>
          </div>

          {/* Compact Google Reviews Rating Card */}
          <div className="p-3.5 rounded-xl bg-white border border-[#E7E9E2] shadow-subtle flex items-center gap-3.5 shrink-0 self-start sm:self-auto">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1 text-[#607C55]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-xs font-bold text-[#20231F]">4.9 / 5 Rating</p>
              <span className="text-[10px] text-[#777D75] block">Verified Google Reviews</span>
            </div>

            <a
              href={testimonialsConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#F2F4EF] hover:bg-[#DCE8CF]/50 text-[#607C55] transition-colors"
              aria-label="Open Google Maps Reviews"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Featured Patient Testimonial Card */}
        <div className="bg-white rounded-card border border-[#E7E9E2] p-6 sm:p-8 lg:p-10 shadow-card space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#E7E9E2]">
            <div className="flex items-center gap-1 text-[#607C55]">
              {[...Array(currentTestimonial.ratingStars)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full bg-[#DCE8CF]/40 text-[#607C55] border border-[#607C55]/20">
              {currentTestimonial.treatmentTag}
            </span>
          </div>

          {/* Restrained Quote Typography */}
          <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-[#20231F] leading-relaxed italic font-normal">
            &ldquo;{currentTestimonial.feedbackText}&rdquo;
          </blockquote>

          {/* Author Footer & Navigation Controls */}
          <div className="pt-4 border-t border-[#E7E9E2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#607C55] text-white flex items-center justify-center font-bold text-xs shadow-subtle">
                {currentTestimonial.initials}
              </div>
              <div>
                <h3 className="font-semibold text-xs sm:text-sm text-[#20231F]">
                  {currentTestimonial.patientName}
                </h3>
                <div className="flex items-center gap-2 text-[11px] text-[#777D75]">
                  <span className="flex items-center gap-1 text-[#607C55] font-medium">
                    <CheckCircle className="w-3 h-3 text-[#607C55]" />
                    {currentTestimonial.source}
                  </span>
                  <span>·</span>
                  <span>{currentTestimonial.dateTag}</span>
                </div>
              </div>
            </div>

            {/* Small Next / Prev Controls */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-2 rounded-full bg-[#F2F4EF] border border-[#E7E9E2] text-[#20231F] hover:bg-[#DCE8CF]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55]"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-mono text-[#777D75] px-1.5">
                0{activeIndex + 1} / 0{testimonialsData.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-2 rounded-full bg-[#F2F4EF] border border-[#E7E9E2] text-[#20231F] hover:bg-[#DCE8CF]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55]"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
