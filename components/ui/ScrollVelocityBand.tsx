"use client";

import React from "react";

interface ScrollVelocityBandProps {
  className?: string;
}

export function ScrollVelocityBand({ className = "" }: ScrollVelocityBandProps) {
  const tickerItems = [
    { text: "CONFIDENT SMILES", highlight: true },
    { text: "PERSONALIZED DENTAL CARE", highlight: false },
    { text: "YOUR SMILE JOURNEY", highlight: true },
    { text: "INVISALIGN® CONSULTATIONS", highlight: false },
    { text: "SAIBABA COLONY, COIMBATORE", highlight: true },
    { text: "DIGITAL 3D SCANNING", highlight: false },
    { text: "UNHURRIED APPOINTMENTS", highlight: true },
  ];

  return (
    <div
      aria-label="Practice highlights ticker"
      className={`relative z-10 w-full bg-[#252724] border-y border-[#252724]/20 py-3.5 sm:py-4 overflow-hidden select-none group ${className}`}
    >
      <div className="flex w-max space-x-8 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
        {[1, 2, 3, 4].map((set) => (
          <div
            key={set}
            className="flex items-center space-x-8 shrink-0 text-xs sm:text-sm font-medium tracking-[0.22em] uppercase text-white/90"
          >
            {tickerItems.map((item, idx) => (
              <React.Fragment key={`${set}-${idx}`}>
                <span
                  className={
                    item.highlight
                      ? "text-[#C7DDB0] font-semibold"
                      : "text-white/85"
                  }
                >
                  {item.text}
                </span>
                <span className="text-[#A9C49A] text-xs select-none">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
