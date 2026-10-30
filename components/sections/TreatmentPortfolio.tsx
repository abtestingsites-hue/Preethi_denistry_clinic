"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Shield, Smile, Crown, Layers, ArrowRight } from "lucide-react";
import { treatmentsData, Treatment } from "@/data/treatmentsData";
import { TreatmentDetailModal } from "@/components/treatments/TreatmentDetailModal";
import { cn } from "@/lib/utils";

interface TreatmentPortfolioProps {
  onBookTreatment: (treatmentTitle: string) => void;
}

export function TreatmentPortfolio({
  onBookTreatment,
}: TreatmentPortfolioProps) {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(
    null
  );
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleOpenDetail = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    setIsDetailOpen(true);
  };

  const invisalignItem = treatmentsData.find((t) => t.id === "invisalign") || treatmentsData[0];
  const cosmeticItem = treatmentsData.find((t) => t.id === "cosmetic-dentistry") || treatmentsData[2];
  const generalItem = treatmentsData.find((t) => t.id === "general-dentistry") || treatmentsData[1];
  const preventiveItem = treatmentsData.find((t) => t.id === "preventive-care") || treatmentsData[3];
  const restorativeItem = treatmentsData.find((t) => t.id === "restorative-dentistry") || treatmentsData[4];

  return (
    <section
      id="treatments"
      aria-label="Dental Services Portfolio"
      className="py-14 sm:py-18 lg:py-20 bg-[#F7F8F5] border-b border-[#E8E9E5] scroll-mt-20"
    >
      <div className="content-container space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#5C7651]">
            <span className="w-5 h-[1.5px] bg-[#5C7651]" />
            <span>CLINICAL DISCIPLINES & CARE</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252724] tracking-tight leading-[1.18]">
            Treatment Portfolio.
          </h2>
          <p className="text-sm sm:text-base text-[#858780] leading-relaxed">
            From discreet clear-aligner orthodontics to conservative aesthetic restorations and preventive therapy, each treatment balances biological health with natural aesthetics.
          </p>
        </div>

        {/* Refined 12-Column Treatment Grid */}
        <div className="space-y-6">
          {/* Row 1: Featured Invisalign Panel (7 cols) + Cosmetic Dentistry (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Panel 1: Featured Clear Aligners (7 cols) */}
            <div className="lg:col-span-7 rounded-card overflow-hidden border border-[#E8E9E5] bg-white shadow-card hover:shadow-elevated hover:border-[#C7DDB0] flex flex-col justify-between group transition-all duration-300">
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gradient-to-br from-[#FAFAF8] via-white to-[#F7F8F5]">
                <Image
                  src={invisalignItem.image}
                  alt={invisalignItem.imageAlt}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-[#252724] shadow-subtle border border-white/60">
                    {invisalignItem.badge || "Signature Treatment"}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/95 flex items-center justify-center text-[#5C7651] shadow-subtle">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold">
                    {invisalignItem.title}
                  </h3>
                  <p className="text-xs text-white/90 line-clamp-2 pt-0.5 font-light">
                    {invisalignItem.shortDescription}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#E8E9E5]">
                <button
                  type="button"
                  onClick={() => handleOpenDetail(invisalignItem)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5C7651] hover:text-[#252724] transition-colors"
                >
                  <span>Explore Treatment Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onBookTreatment(invisalignItem.title)}
                  className="px-4 py-2 rounded-full bg-[#5C7651] text-white text-xs font-semibold hover:bg-[#496041] transition-colors shadow-subtle inline-flex items-center gap-1.5"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Panel 2: Cosmetic Dentistry (5 cols) */}
            <div className="lg:col-span-5 rounded-card overflow-hidden border border-[#E8E9E5] bg-white shadow-card hover:shadow-elevated hover:border-[#C7DDB0] flex flex-col justify-between group transition-all duration-300">
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#111310]">
                <Image
                  src={cosmeticItem.image}
                  alt={cosmeticItem.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-[#252724] shadow-subtle">
                    Aesthetic Dentistry
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/95 flex items-center justify-center text-[#5C7651] shadow-subtle">
                    <Smile className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold">
                    {cosmeticItem.title}
                  </h3>
                  <p className="text-xs text-white/90 line-clamp-2 pt-0.5 font-light">
                    {cosmeticItem.shortDescription}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex items-center justify-between gap-3 border-t border-[#E8E9E5]">
                <button
                  type="button"
                  onClick={() => handleOpenDetail(cosmeticItem)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5C7651] hover:text-[#252724] transition-colors"
                >
                  <span>Explore Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onBookTreatment(cosmeticItem.title)}
                  className="text-xs font-semibold text-[#252724] hover:text-[#5C7651] underline underline-offset-4"
                >
                  Book Consult
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Supporting Panels (3 balanced 4-col panels) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {/* General Dentistry (4 cols) */}
            <div className="rounded-card overflow-hidden border border-[#E8E9E5] bg-white p-5 sm:p-6 shadow-subtle hover:shadow-elevated hover:border-[#C7DDB0] transition-all duration-300 flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#F7F8F5] border border-[#E8E9E5] flex items-center justify-center text-[#5C7651]">
                    <Layers className="w-4 h-4 text-[#5C7651]" />
                  </div>
                  <span className="font-mono text-xs text-[#858780]">02</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#252724] group-hover:text-[#5C7651] transition-colors">
                    {generalItem.title}
                  </h3>
                  <p className="text-xs text-[#858780] leading-relaxed line-clamp-3">
                    {generalItem.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8E9E5] flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => handleOpenDetail(generalItem)}
                  className="inline-flex items-center gap-1 font-semibold text-[#5C7651] hover:underline"
                >
                  <span>Overview</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>

                <button
                  type="button"
                  onClick={() => onBookTreatment(generalItem.title)}
                  className="text-[11px] font-medium text-[#858780] hover:text-[#252724] underline"
                >
                  Book
                </button>
              </div>
            </div>

            {/* Preventive Dental Care (4 cols) */}
            <div className="rounded-card overflow-hidden border border-[#E8E9E5] bg-white p-5 sm:p-6 shadow-subtle hover:shadow-elevated hover:border-[#C7DDB0] transition-all duration-300 flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#F7F8F5] border border-[#E8E9E5] flex items-center justify-center text-[#5C7651]">
                    <Shield className="w-4 h-4 text-[#5C7651]" />
                  </div>
                  <span className="font-mono text-xs text-[#858780]">03</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#252724] group-hover:text-[#5C7651] transition-colors">
                    {preventiveItem.title}
                  </h3>
                  <p className="text-xs text-[#858780] leading-relaxed line-clamp-3">
                    {preventiveItem.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8E9E5] flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => handleOpenDetail(preventiveItem)}
                  className="inline-flex items-center gap-1 font-semibold text-[#5C7651] hover:underline"
                >
                  <span>Overview</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>

                <button
                  type="button"
                  onClick={() => onBookTreatment(preventiveItem.title)}
                  className="text-[11px] font-medium text-[#858780] hover:text-[#252724] underline"
                >
                  Book
                </button>
              </div>
            </div>

            {/* Restorative Dentistry (4 cols) */}
            <div className="rounded-card overflow-hidden border border-[#E8E9E5] bg-white p-5 sm:p-6 shadow-subtle hover:shadow-elevated hover:border-[#C7DDB0] transition-all duration-300 flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#F7F8F5] border border-[#E8E9E5] flex items-center justify-center text-[#5C7651]">
                    <Crown className="w-4 h-4 text-[#5C7651]" />
                  </div>
                  <span className="font-mono text-xs text-[#858780]">04</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#252724] group-hover:text-[#5C7651] transition-colors">
                    {restorativeItem.title}
                  </h3>
                  <p className="text-xs text-[#858780] leading-relaxed line-clamp-3">
                    {restorativeItem.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8E9E5] flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => handleOpenDetail(restorativeItem)}
                  className="inline-flex items-center gap-1 font-semibold text-[#5C7651] hover:underline"
                >
                  <span>Overview</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>

                <button
                  type="button"
                  onClick={() => onBookTreatment(restorativeItem.title)}
                  className="text-[11px] font-medium text-[#858780] hover:text-[#252724] underline"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal Dialog */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onBookTreatment={onBookTreatment}
      />
    </section>
  );
}
