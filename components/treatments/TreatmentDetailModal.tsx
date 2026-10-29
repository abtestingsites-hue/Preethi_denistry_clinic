"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2, ArrowRight, Sparkles, Clock, Calendar } from "lucide-react";
import { Treatment } from "@/data/treatmentsData";
import { Button } from "@/components/ui/Button";

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  isOpen: boolean;
  onClose: () => void;
  onBookTreatment: (treatmentTitle: string) => void;
}

export function TreatmentDetailModal({
  treatment,
  isOpen,
  onClose,
  onBookTreatment,
}: TreatmentDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
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
  }, [isOpen, onClose]);

  if (!isOpen || !treatment) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="treatment-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-clinic-2xl shadow-elevated z-10 my-8 overflow-hidden animate-in zoom-in-95 duration-200 border border-[#E8E9E5]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close treatment details"
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/90 backdrop-blur-md text-[#252724] hover:bg-[#F7F7F5] shadow-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C7651]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[85vh] overflow-y-auto">
          {/* Top Hero Image */}
          <div className="relative h-64 sm:h-72 w-full bg-[#111310]">
            <Image
              src={treatment.image}
              alt={treatment.imageAlt}
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
              {treatment.badge && (
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#C7DDB0] text-[#111310]">
                  {treatment.badge}
                </span>
              )}
              <h3 id="treatment-modal-title" className="font-serif text-2xl sm:text-3xl text-white">
                {treatment.title}
              </h3>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Full Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5C7651]">
                Overview & Clinical Philosophy
              </h4>
              <p className="text-sm sm:text-base text-[#252724] leading-relaxed">
                {treatment.fullDescription}
              </p>
            </div>

            {/* Benefits & What to Expect Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Clinical Benefits */}
              <div className="p-5 rounded-2xl bg-[#F7F7F5] border border-[#E8E9E5] space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#252724] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#5C7651]" />
                  <span>Key Patient Advantages</span>
                </h5>
                <ul className="space-y-2">
                  {treatment.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#858780]">
                      <CheckCircle2 className="w-4 h-4 text-[#5C7651] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Expect */}
              <div className="p-5 rounded-2xl bg-[#F7F7F5] border border-[#E8E9E5] space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#252724] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#5C7651]" />
                  <span>What To Expect</span>
                </h5>
                <ol className="space-y-2">
                  {treatment.whatToExpect.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#858780]">
                      <span className="w-5 h-5 rounded-full bg-[#C7DDB0]/40 text-[#5C7651] font-semibold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Ideal Candidate */}
            <div className="p-4 rounded-2xl bg-[#C7DDB0]/20 border border-[#A9C49A]/40 text-xs sm:text-sm space-y-1">
              <span className="font-semibold text-[#5C7651] uppercase tracking-wide text-[11px]">
                Ideal Candidate
              </span>
              <p className="text-[#252724] leading-relaxed">{treatment.idealFor}</p>
            </div>

            {/* Footer Action Bar */}
            <div className="pt-4 border-t border-[#E8E9E5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#858780]">
                Consultations conducted in Saibaba Colony, Coimbatore.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto"
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    onClose();
                    onBookTreatment(treatment.title);
                  }}
                  className="w-1/2 sm:w-auto"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
