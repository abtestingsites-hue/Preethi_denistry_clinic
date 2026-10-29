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
      className="py-14 sm:py-18 lg:py-20 bg-[#F7F8F5] border-b border-[#E8E9E5]"
    >
      <div className="content-container space-y-8 sm:space-y-10">
        {/* Section Header with Verified Google Reviews Pill */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#5C7651]">
              <Sparkles className="w-3.5 h-3.5 text-[#5C7651]" />
              <span>PATIENT EXPERIENCES</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252724] tracking-tight leading-[1.18]">
              Smiles That Speak for Themselves.
            </h2>
            <p className="text-sm text-[#858780] leading-relaxed">
              Honest reflections from patients who entrusted their clear aligners and family oral care to Dr. Preethi’s Dentistry in Saibaba Colony.
            </p>
          </div>

          {/* Compact Google Reviews Rating Card */}
          <div className="p-3.5 rounded-xl bg-white border border-[#E8E9E5] shadow-subtle flex items-center gap-3.5 shrink-0 self-start sm:self-auto">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1 text-[#5C7651]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-xs font-bold text-[#252724]">4.9 / 5 Rating</p>
              <span className="text-[10px] text-[#858780] block">Verified Google Reviews</span>
            </div>

            <a
              href={testimonialsConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#F7F8F5] hover:bg-[#C7DDB0]/30 text-[#5C7651] transition-colors"
              aria-label="Open Google Maps Reviews"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Featured Patient Testimonial Card */}
        <div className="bg-white rounded-card border border-[#E8E9E5] p-6 sm:p-8 lg:p-10 shadow-card space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#E8E9E5]/60">
            <div className="flex items-center gap-1 text-[#5C7651]">
              {[...Array(currentTestimonial.ratingStars)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full bg-[#C7DDB0]/30 text-[#5C7651] border border-[#A9C49A]/30">
              {currentTestimonial.treatmentTag}
            </span>
          </div>

          {/* Restrained Quote Typography (20–24px) */}
          <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-[#252724] leading-relaxed italic">
            &ldquo;{currentTestimonial.feedbackText}&rdquo;
          </blockquote>

          {/* Author Footer & Navigation Controls */}
          <div className="pt-4 border-t border-[#E8E9E5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#5C7651] text-white flex items-center justify-center font-bold text-xs shadow-subtle">
                {currentTestimonial.initials}
              </div>
              <div>
                <h3 className="font-semibold text-xs sm:text-sm text-[#252724]">
                  {currentTestimonial.patientName}
                </h3>
                <div className="flex items-center gap-2 text-[11px] text-[#858780]">
                  <span className="flex items-center gap-1 text-[#5C7651] font-medium">
                    <CheckCircle className="w-3 h-3 text-[#5C7651]" />
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
                className="p-2 rounded-full bg-[#F7F8F5] border border-[#E8E9E5] text-[#252724] hover:bg-[#C7DDB0]/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C7651]"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-mono text-[#858780] px-1.5">
                0{activeIndex + 1} / 0{testimonialsData.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-2 rounded-full bg-[#F7F8F5] border border-[#E8E9E5] text-[#252724] hover:bg-[#C7DDB0]/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C7651]"
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
