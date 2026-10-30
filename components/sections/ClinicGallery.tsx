"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Sparkles, Eye, ArrowRight } from "lucide-react";
import { clinicGalleryImages, clinicGalleryCategories, GalleryCategory } from "@/data/clinicImages";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { cn } from "@/lib/utils";

export function ClinicGallery() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  const images = clinicGalleryImages;

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

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
      className="scroll-mt-20 py-14 sm:py-18 lg:py-20 bg-[#F7F8F5] border-b border-[#E8E9E5]"
    >
      <div className="content-container space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#5C7651]">
              <Sparkles className="w-3.5 h-3.5 text-[#5C7651]" />
              <span>AUTHENTIC CLINIC PHOTOGRAPHY</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252724] tracking-tight leading-[1.18]">
              Clinic Gallery.
            </h2>
            <p className="text-sm text-[#858780] leading-relaxed">
              Explore our reception lounge, consultation suites, and ergonomic treatment operatories in Saibaba Colony, Coimbatore.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleOpenLightbox(featuredIndex)}
              className="px-5 py-2.5 rounded-full bg-white border border-[#E8E9E5] text-xs font-semibold text-[#252724] hover:bg-[#C7DDB0]/25 hover:border-[#5C7651] shadow-subtle inline-flex items-center gap-2 transition-all shrink-0"
            >
              <Eye className="w-3.5 h-3.5 text-[#5C7651]" />
              <span>View Full Lightbox ({images.length} Photos)</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {clinicGalleryCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  const firstMatch = images.findIndex(
                    (img) => cat.id === "all" || img.category === cat.id
                  );
                  if (firstMatch !== -1) setFeaturedIndex(firstMatch);
                }}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap select-none",
                  isActive
                    ? "bg-[#5C7651] text-white shadow-subtle"
                    : "bg-white text-[#858780] border border-[#E8E9E5] hover:text-[#252724] hover:border-[#5C7651]"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Compact Asymmetric Grid: 1 Large Image (7 cols) + 2 Stacked Supporting Images (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Main Large Featured Image (7 cols) */}
          <div
            onClick={() => handleOpenLightbox(featuredIndex)}
            className="lg:col-span-7 relative rounded-card overflow-hidden bg-white border border-[#E8E9E5] shadow-card group cursor-pointer min-h-[300px] sm:min-h-[380px]"
          >
            <Image
              src={currentFeatured.fallbackUrl}
              alt={currentFeatured.title}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Corner Zoom Button */}
            <div className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-90 group-hover:opacity-100 group-hover:bg-[#5C7651] transition-all">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-subtle text-[#252724]">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[#5C7651]">
                <span>{currentFeatured.categoryLabel}</span>
                <span className="font-mono text-[#858780]">
                  0{featuredIndex + 1} / 0{images.length}
                </span>
              </div>
              <h3 className="font-serif text-base sm:text-lg font-semibold text-[#252724] pt-0.5 truncate">
                {currentFeatured.title}
              </h3>
              <p className="text-xs text-[#858780] line-clamp-1 pt-0.5">
                {currentFeatured.description}
              </p>
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
                  className="relative rounded-card overflow-hidden bg-white border border-[#E8E9E5] shadow-subtle group cursor-pointer min-h-[170px] sm:min-h-[180px]"
                >
                  <Image
                    src={img.fallbackUrl}
                    alt={img.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

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

        {/* Thumbnail Selector Strip: Shows all 7 authentic photos */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs text-[#858780]">
            <span className="font-medium text-[#252724]">All Clinic Spaces ({images.length} Verified Photos)</span>
            <span>Click any thumbnail to inspect</span>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5">
            {images.map((img, idx) => {
              const isSelected = featuredIndex === idx;
              return (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setFeaturedIndex(idx)}
                  className={cn(
                    "relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C7651]",
                    isSelected
                      ? "border-[#5C7651] shadow-card scale-[1.02] ring-2 ring-[#5C7651]/20"
                      : "border-[#E8E9E5] opacity-75 hover:opacity-100 hover:border-[#858780]"
                  )}
                  aria-label={`View ${img.title}`}
                >
                  <Image
                    src={img.fallbackUrl}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="140px"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-[#5C7651]/15 pointer-events-none" />
                  )}
                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-mono bg-black/60 text-white leading-none">
                    0{idx + 1}
                  </span>
                </button>
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
