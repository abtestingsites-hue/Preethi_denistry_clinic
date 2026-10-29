"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Sparkles, Eye, ArrowRight } from "lucide-react";
import { clinicGalleryImages } from "@/data/clinicImages";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { cn } from "@/lib/utils";

export function ClinicGallery() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  const images = clinicGalleryImages;
  const currentFeatured = images[featuredIndex] || images[0];

  const handleOpenLightbox = (index: number) => {
    setCurrentLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNextLightbox = () => {
    setCurrentLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevLightbox = () => {
    setCurrentLightboxIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Two supporting images (next two in sequence)
  const supportingIndex1 = (featuredIndex + 1) % images.length;
  const supportingIndex2 = (featuredIndex + 2) % images.length;

  return (
    <section
      id="gallery"
      aria-label="Clinic Spaces and Gallery"
      className="py-14 sm:py-18 lg:py-20 bg-[#F7F8F5] border-b border-[#E8E9E5]"
    >
      <div className="content-container space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#5C7651]">
              <Sparkles className="w-3.5 h-3.5 text-[#5C7651]" />
              <span>AUTHENTIC CLINIC SPACES</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252724] tracking-tight leading-[1.18]">
              Clinic Gallery.
            </h2>
            <p className="text-sm text-[#858780] leading-relaxed">
              Explore our reception lounge, consultation desks, and ergonomic treatment operatories in Saibaba Colony, Coimbatore.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleOpenLightbox(featuredIndex)}
            className="px-4 py-2 rounded-full bg-white border border-[#E8E9E5] text-xs font-semibold text-[#252724] hover:bg-[#C7DDB0]/30 hover:border-[#5C7651] shadow-subtle inline-flex items-center gap-2 transition-all self-start sm:self-auto shrink-0"
          >
            <Eye className="w-3.5 h-3.5 text-[#5C7651]" />
            <span>View All Photos</span>
          </button>
        </div>

        {/* Compact Asymmetric Grid: 1 Large Image (7 cols) + 2 Stacked Supporting Images (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Main Large Featured Image (7 cols) */}
          <div
            onClick={() => handleOpenLightbox(featuredIndex)}
            className="lg:col-span-7 relative rounded-card overflow-hidden bg-white border border-[#E8E9E5] shadow-card group cursor-pointer min-h-[280px] sm:min-h-[360px]"
          >
            <Image
              src={currentFeatured.fallbackUrl}
              alt={currentFeatured.title}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

            {/* Corner Zoom Button */}
            <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-subtle text-[#252724]">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[#5C7651]">
                <span>{currentFeatured.categoryLabel}</span>
                <span className="font-mono text-[#858780]">
                  0{featuredIndex + 1} / 0{images.length}
                </span>
              </div>
              <h3 className="font-serif text-base sm:text-lg font-semibold text-[#252724] pt-0.5 truncate">
                {currentFeatured.title}
              </h3>
            </div>
          </div>

          {/* Right Column: 2 Stacked Supporting Images (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {[supportingIndex1, supportingIndex2].map((idx) => {
              const img = images[idx];
              return (
                <div
                  key={img.id}
                  onClick={() => setFeaturedIndex(idx)}
                  className="relative rounded-card overflow-hidden bg-white border border-[#E8E9E5] shadow-subtle group cursor-pointer min-h-[160px] sm:min-h-[170px]"
                >
                  <Image
                    src={img.fallbackUrl}
                    alt={img.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C7DDB0] block">
                      {img.categoryLabel}
                    </span>
                    <h4 className="font-serif text-sm font-semibold truncate text-white">
                      {img.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal Dialog */}
      <GalleryLightbox
        images={images}
        currentIndex={currentLightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
      />
    </section>
  );
}
