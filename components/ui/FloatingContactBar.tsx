"use client";

import React from "react";
import { Phone, Calendar, MessageCircle } from "lucide-react";
import { clinicInfo } from "@/data/clinicInfo";

interface FloatingContactBarProps {
  onOpenBookingModal: () => void;
}

export function FloatingContactBar({
  onOpenBookingModal,
}: FloatingContactBarProps) {
  return (
    <aside
      aria-label="Quick contact and consultation actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAFAF7]/95 backdrop-blur-md border-t border-[#E7E9E2] p-2.5 shadow-float lg:hidden"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        <a
          href={`tel:${clinicInfo.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 text-xs font-medium text-[#20231F] hover:text-[#607C55] hover:bg-[#F2F4EF] rounded-xl transition-colors border border-transparent hover:border-[#E7E9E2]"
        >
          <Phone className="w-4 h-4 mb-1 text-[#607C55]" />
          <span>Call Reception</span>
        </a>

        {clinicInfo.socialLinks.whatsapp && (
          <a
            href={clinicInfo.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 text-xs font-medium text-[#20231F] hover:text-[#607C55] hover:bg-[#F2F4EF] rounded-xl transition-colors border border-transparent hover:border-[#E7E9E2]"
          >
            <MessageCircle className="w-4 h-4 mb-1 text-[#607C55]" />
            <span>WhatsApp</span>
          </a>
        )}

        <button
          onClick={onOpenBookingModal}
          className="flex flex-col items-center justify-center py-2 px-1 text-xs font-semibold text-white bg-[#607C55] hover:bg-[#4E6645] rounded-xl shadow-subtle transition-colors"
        >
          <Calendar className="w-4 h-4 mb-1" />
          <span>Book Appointment</span>
        </button>
      </div>
    </aside>
  );
}
