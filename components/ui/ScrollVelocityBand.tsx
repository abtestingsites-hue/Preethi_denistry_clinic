"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ScrollVelocityBandProps {
  className?: string;
  onBookClick?: () => void;
}

export function ScrollVelocityBand({
  className = "",
  onBookClick,
}: ScrollVelocityBandProps) {
  const offerItems = [
    {
      badge: "SPECIAL OFFER",
      text: "COMPLIMENTARY 3D INTRAORAL SCAN & DIGITAL SMILE PREVIEW",
      highlight: true,
      hasCta: true,
    },
    {
      badge: "INVISALIGN® FOCUS",
      text: "PRECISION CLEAR ALIGNER CONSULTATIONS · DR. PREETHI (BDS)",
      highlight: false,
      hasCta: false,
    },
    {
      badge: "SAIBABA COLONY",
      text: "UNHURRIED 1-ON-1 CLINICAL APPOINTMENTS & TREATMENT PLANNING",
      highlight: true,
      hasCta: true,
    },
    {
      badge: "DIGITAL PROTOCOL",
      text: "100% DIGITAL WORKFLOW · NO MESSY DENTAL TRAYS",
      highlight: false,
      hasCta: false,
    },
  ];

  return (
    <div
      aria-label="Special Offers and Clinic Highlights Ticker"
      className={`relative z-20 w-full bg-[#252724] border-b border-black/15 py-2.5 sm:py-3 overflow-hidden select-none group shadow-subtle ${className}`}
    >
      <div className="flex w-max space-x-8 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
        {[1, 2, 3, 4].map((set) => (
          <div
            key={set}
            className="flex items-center space-x-8 shrink-0 text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-white/90"
          >
            {offerItems.map((item, idx) => (
              <React.Fragment key={`${set}-${idx}`}>
                <div className="flex items-center gap-2.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-[#5C7651] text-[#C7DDB0] border border-[#A9C49A]/30">
                    {item.badge}
                  </span>
                  <span
                    className={
                      item.highlight
                        ? "text-[#C7DDB0] font-semibold"
                        : "text-white/90"
                    }
                  >
                    {item.text}
                  </span>
                  {item.hasCta && onBookClick && (
                    <button
                      type="button"
                      onClick={onBookClick}
                      className="ml-1 px-3 py-1 rounded-full bg-white/10 hover:bg-[#5C7651] text-white hover:text-white border border-white/20 hover:border-[#5C7651] text-[11px] font-semibold tracking-wide transition-all inline-flex items-center gap-1 active:scale-95"
                    >
                      <span>Book Online</span>
                      <ArrowRight className="w-3 h-3 text-[#C7DDB0]" />
                    </button>
                  )}
                </div>
                <span className="text-[#A9C49A] text-xs select-none">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
