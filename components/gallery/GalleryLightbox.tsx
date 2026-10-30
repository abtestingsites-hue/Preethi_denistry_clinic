"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { ClinicImageItem } from "@/data/clinicImages";

interface GalleryLightboxProps {
  images: ClinicImageItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function GalleryLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Clinic Gallery Image Lightbox: ${currentImage.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md select-none animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-white z-20">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-[#111310]/80 border border-white/20 text-[#C7DDB0]">
            {currentImage.categoryLabel}
          </span>
          <span className="text-xs text-white/70 font-mono">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close image lightbox"
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7DDB0]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        aria-label="Previous clinic image"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/15 backdrop-blur-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7DDB0]"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        aria-label="Next clinic image"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/15 backdrop-blur-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7DDB0]"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Stage */}
      <div className="relative w-full h-full max-w-5xl max-h-[75vh] mx-auto p-4 flex flex-col items-center justify-center">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-elevated">
          <Image
            src={currentImage.assetPath || currentImage.fallbackUrl}
            alt={currentImage.title}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Caption Panel */}
        <div className="mt-4 text-center text-white max-w-2xl px-4 space-y-1">
          <h3 className="font-serif text-xl sm:text-2xl text-white">
            {currentImage.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
            {currentImage.description}
          </p>
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#C7DDB0] pt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>Dr. Preethi’s Dentistry · Saibaba Colony, Coimbatore</span>
          </div>
        </div>
      </div>
    </div>
  );
}
