"use client";

import React, { useEffect, useRef } from "react";
import { X, Sparkles } from "lucide-react";
import { AppointmentForm } from "./AppointmentForm";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatmentId?: string;
}

export function AppointmentModal({
  isOpen,
  onClose,
  initialTreatmentId,
}: AppointmentModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      // Focus close button or first input after opening
      setTimeout(() => {
        const firstInput = modalRef.current?.querySelector<HTMLInputElement>("input, select, textarea, button");
        if (firstInput) {
          firstInput.focus();
        }
      }, 50);
    } else {
      document.body.style.overflow = "unset";
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book an Appointment Consultation with Dr. Preethi"
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto"
    >
      {/* Dimmed Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Content: Mobile bottom sheet / Desktop centered 480–560px panel */}
      <div
        ref={modalRef}
        className="relative w-full max-w-[520px] bg-[#FAFAF7] rounded-t-3xl sm:rounded-card shadow-card z-10 mt-auto sm:my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-[#E7E9E2] max-h-[95vh] sm:max-h-[90vh] flex flex-col"
      >
        {/* Top Floating Close Button */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20">
          <button
            onClick={onClose}
            aria-label="Close booking dialog"
            className="p-2.5 rounded-full bg-[#F2F4EF] text-[#20231F] hover:bg-[#E7E9E2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607C55]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto p-1 sm:p-2 flex-1">
          <AppointmentForm
            initialTreatmentId={initialTreatmentId}
            onSuccess={() => {
              // Stays open to display the confirmation card
            }}
            className="border-none shadow-none p-5 sm:p-8"
          />
        </div>
      </div>
    </div>
  );
}
