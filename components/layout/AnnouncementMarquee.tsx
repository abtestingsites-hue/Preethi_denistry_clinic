"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, X } from "lucide-react";
import { clinicAnnouncements } from "@/data/announcementsData";

interface AnnouncementMarqueeProps {
  onBookClick?: () => void;
  allowDismiss?: boolean;
}

export function AnnouncementMarquee({
  onBookClick,
  allowDismiss = true,
}: AnnouncementMarqueeProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <aside
      aria-label="Clinic announcements and consultation advisory"
      className="relative z-50 bg-[#F7F7F5] border-b border-[#E8E9E5] py-2 px-3 sm:px-4 overflow-hidden select-none group transition-all duration-300"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto gap-3">
        {/* Infinite Looping Announcement Container */}
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_30px,black_calc(100%-30px),transparent)]">
          <div className="flex w-max space-x-10 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
            {/* Set 1 */}
            <div className="flex items-center space-x-10 shrink-0">
              {clinicAnnouncements.map((item) => (
                <div
                  key={`set1-${item.id}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-[#181A16]"
                >
                  <span className="inline-flex items-center justify-center p-1 rounded-full bg-[#8f9d6f]/25 text-[#6a774b]">
                    <Sparkles className="w-3 h-3 text-[#6a774b]" aria-hidden="true" />
                  </span>
                  {item.badge && (
                    <span className="font-semibold text-[#6a774b] tracking-wide uppercase text-[10px] px-2 py-0.5 rounded-full bg-[#8f9d6f]/20 border border-[#8f9d6f]/30">
                      {item.badge}
                    </span>
                  )}
                  <span className="font-medium text-[#181A16]">{item.text}</span>
                  {item.highlight && (
                    <span className="font-semibold text-[#6a774b] hidden md:inline">
                      · {item.highlight}
                    </span>
                  )}
                  {item.ctaText && onBookClick && (
                    <button
                      onClick={onBookClick}
                      className="inline-flex items-center gap-1 font-semibold text-[#6a774b] hover:text-[#181A16] underline underline-offset-4 ml-1 transition-colors"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                  <span className="text-[#8f9d6f] text-sm select-none" aria-hidden="true">
                    ✦
                  </span>
                </div>
              ))}
            </div>

            {/* Set 2 (Duplicate for seamless continuous loop) */}
            <div className="flex items-center space-x-10 shrink-0" aria-hidden="true">
              {clinicAnnouncements.map((item) => (
                <div
                  key={`set2-${item.id}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-[#181A16]"
                >
                  <span className="inline-flex items-center justify-center p-1 rounded-full bg-[#8f9d6f]/25 text-[#6a774b]">
                    <Sparkles className="w-3 h-3 text-[#6a774b]" />
                  </span>
                  {item.badge && (
                    <span className="font-semibold text-[#6a774b] tracking-wide uppercase text-[10px] px-2 py-0.5 rounded-full bg-[#8f9d6f]/20 border border-[#8f9d6f]/30">
                      {item.badge}
                    </span>
                  )}
                  <span className="font-medium text-[#181A16]">{item.text}</span>
                  {item.highlight && (
                    <span className="font-semibold text-[#6a774b] hidden md:inline">
                      · {item.highlight}
                    </span>
                  )}
                  {item.ctaText && onBookClick && (
                    <button
                      onClick={onBookClick}
                      className="inline-flex items-center gap-1 font-semibold text-[#6a774b] hover:text-[#181A16] underline underline-offset-4 ml-1 transition-colors"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                  <span className="text-[#8f9d6f] text-sm select-none">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dismiss Control */}
        {allowDismiss && (
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss announcement strip"
            className="text-[#858780] hover:text-[#252724] p-1 rounded-full hover:bg-[#E8E9E5]/60 transition-colors shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </aside>
  );
}
