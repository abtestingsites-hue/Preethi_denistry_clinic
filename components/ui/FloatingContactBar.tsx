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
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8E9E5] p-2.5 shadow-float lg:hidden"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        <a
          href={`tel:${clinicInfo.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 text-xs font-medium text-[#252724] hover:text-[#5C7651] hover:bg-[#F7F8F5] rounded-xl transition-colors border border-transparent hover:border-[#E8E9E5]"
        >
          <Phone className="w-4 h-4 mb-1 text-[#5C7651]" />
          <span>Call Reception</span>
        </a>

        {clinicInfo.socialLinks.whatsapp && (
          <a
            href={clinicInfo.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 text-xs font-medium text-[#252724] hover:text-[#5C7651] hover:bg-[#F7F8F5] rounded-xl transition-colors border border-transparent hover:border-[#E8E9E5]"
          >
            <MessageCircle className="w-4 h-4 mb-1 text-[#5C7651]" />
            <span>WhatsApp</span>
          </a>
        )}

        <button
          onClick={onOpenBookingModal}
          className="flex flex-col items-center justify-center py-2 px-1 text-xs font-semibold text-white bg-[#5C7651] hover:bg-[#496041] rounded-xl shadow-subtle transition-colors"
        >
          <Calendar className="w-4 h-4 mb-1" />
          <span>Book Appointment</span>
        </button>
      </div>
    </aside>
  );
}
