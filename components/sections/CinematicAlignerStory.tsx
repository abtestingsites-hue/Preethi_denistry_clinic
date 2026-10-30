"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Sparkles, Calendar, ArrowRight, Video, Layers, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CinematicAlignerStoryProps {
  onBookAppointment: () => void;
}

interface StageInfo {
  num: string;
  stageName: string;
  eyebrow: string;
  title: string;
  description: string;
  clinicalMetric: string;
}

const STAGES: StageInfo[] = [
  {
    num: "01",
    stageName: "Zero-Gravity Floating Trays",
    eyebrow: "STAGE 01 · PRECISION ARCHITECTURE",
    title: "Engineered in Open Space",
    description:
      "A dual-arch upper and lower aligner system crafted from medical-grade thermoformed biopolymers, micro-sculpted to micrometer tolerances.",
    clinicalMetric: "0.75 mm Biopolymer · Custom Scalloped",
  },
  {
    num: "02",
    stageName: "Calibrated Descent",
    eyebrow: "STAGE 02 · GUIDED TRAJECTORY",
    title: "Anatomical Vector Guidance",
    description:
      "Both aligner trays gently descend toward their corresponding dental arches, aligned along computer-calculated pathways of tooth movement.",
    clinicalMetric: "Digitally Calculated Velocity & Force",
  },
  {
    num: "03",
    stageName: "Arch Alignment",
    eyebrow: "STAGE 03 · TOOTH RELATIONSHIP",
    title: "Micron-Level Contour Matching",
    description:
      "Transparent trays approach the incisors, canines, and molars, precisely mirroring the natural anatomy of your dentition and gingiva.",
    clinicalMetric: "100% Optical 3D Impression Matching",
  },
  {
    num: "04",
    stageName: "Gradual Seating",
    eyebrow: "STAGE 04 · SEAMLESS SEATING",
    title: "Snug, Invisible Adaptation",
    description:
      "The aligners seat gradually over the upper and lower teeth, clicking gently over retention attachments without metal brackets or wires.",
    clinicalMetric: "Zero Impact on Daily Enamel Integrity",
  },
  {
    num: "05",
    stageName: "Complete Arch Coverage",
    eyebrow: "STAGE 05 · BIOMECHANICAL ENCLOSURE",
    title: "Full Dental Arch Enclosure",
    description:
      "Both dental arches are completely covered by their respective aligners, delivering constant, gentle, biologically controlled movement.",
    clinicalMetric: "Constant Calibrated 3D Directional Force",
  },
  {
    num: "06",
    stageName: "Completed Fitted Result",
    eyebrow: "STAGE 06 · PREDICTABLE AESTHETICS",
    title: "Your Confident, Radiant Smile",
    description:
      "The completed fitted result under studio lighting reveals crystal-clear aesthetics, uncompromised speech, and effortless everyday comfort.",
    clinicalMetric: "Clinician Guided · Dr. Preethi, Coimbatore",
  },
];

export function CinematicAlignerStory({
  onBookAppointment,
}: CinematicAlignerStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [videoDuration, setVideoDuration] = useState(20);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState("/videos/teeth-scan.mp4");
  const [userReducedMotion, setUserReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setUserReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setUserReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Video metadata loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const dur = videoRef.current.duration;
      if (dur && !isNaN(dur) && dur > 0) {
        setVideoDuration(dur);
      }
      setIsVideoReady(true);
    }
  };

  // Scroll listener mapping scroll distance to video currentTime
  useEffect(() => {
    if (userReducedMotion) return;

    let rafId: number;
    let targetTime = 0;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Distance from when top of section enters to when bottom exits
      const totalScrollableDistance = containerHeight - windowHeight;
      const currentScroll = -rect.top;

      const rawProgress = Math.max(
        0,
        Math.min(1, currentScroll / totalScrollableDistance)
      );

      setScrollProgress(rawProgress);

      const stageIndex = Math.min(
        STAGES.length - 1,
        Math.floor(rawProgress * STAGES.length)
      );
      setActiveStageIdx(stageIndex);

      if (videoRef.current && isVideoReady) {
        targetTime = rawProgress * (videoDuration || 20);
      }
    };

    const updateVideoFrame = () => {
      if (videoRef.current && isVideoReady) {
        const current = videoRef.current.currentTime;
        const diff = targetTime - current;

        // Smooth scrub easing
        if (Math.abs(diff) > 0.04) {
          videoRef.current.currentTime = current + diff * 0.25;
        }
      }
      rafId = requestAnimationFrame(updateVideoFrame);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    rafId = requestAnimationFrame(updateVideoFrame);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [isVideoReady, videoDuration, userReducedMotion]);

  const currentStage = STAGES[activeStageIdx] || STAGES[0];

  const handleJumpToStage = (idx: number) => {
    if (!containerRef.current) return;
    const containerTop =
      containerRef.current.getBoundingClientRect().top + window.pageYOffset;
    const containerHeight = containerRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const targetScroll =
      containerTop + (idx / STAGES.length) * (containerHeight - windowHeight);

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      id="aligner-experience"
      aria-label="Cinematic Clear Aligner Storytelling"
      className="relative bg-[#171B16] text-white"
      style={{ height: "350vh" }}
    >
      {/* Sticky Cinematic Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Background Subtle Gradient Lighting */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-[#607C55]/14 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-10 w-[480px] h-[480px] bg-[#DCE8CF]/08 rounded-full blur-[120px]" />
        </div>

        {/* Top Control Bar & Stage Selector HUD */}
        <header className="relative z-30 pt-6 px-6 sm:px-10 lg:px-14 flex items-center justify-between border-b border-white/10 pb-4 backdrop-blur-md bg-[#171B16]/80">
          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded-lg bg-[#607C55]/30 text-[#DCE8CF] border border-[#607C55]/50">
              <Sparkles className="w-4 h-4" />
            </span>
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#DCE8CF]">
                CINEMATIC DENTAL STORYTELLING
              </span>
              <span className="text-xs text-white/70 hidden sm:inline">
                Scroll to seat the transparent aligner system
              </span>
            </div>
          </div>

          {/* Video Clip Switcher (Clinical 3D Scan vs Aligner Motion vs Operatory Precision) */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs">
            <button
              onClick={() => setActiveVideoSrc("/videos/teeth-scan.mp4")}
              className={`px-2.5 sm:px-3 py-1.5 rounded-full font-medium transition-all ${
                activeVideoSrc === "/videos/teeth-scan.mp4"
                  ? "bg-[#607C55] text-white shadow-subtle"
                  : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              3D Arch Scan
            </button>
            <button
              onClick={() => setActiveVideoSrc("/videos/Teeth.mp4")}
              className={`px-2.5 sm:px-3 py-1.5 rounded-full font-medium transition-all ${
                activeVideoSrc === "/videos/Teeth.mp4"
                  ? "bg-[#607C55] text-white shadow-subtle"
                  : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              Aligner Motion
            </button>
            <button
              onClick={() => setActiveVideoSrc("/videos/teeth-hero.mp4")}
              className={`px-2.5 sm:px-3 py-1.5 rounded-full font-medium transition-all ${
                activeVideoSrc === "/videos/teeth-hero.mp4"
                  ? "bg-[#607C55] text-white shadow-subtle"
                  : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              Operatory View
            </button>
          </div>
        </header>

        {/* Center Main Stage: Video Layer + Editorial Story Overlays */}
        <div className="relative flex-1 w-full flex items-center justify-center p-4 sm:p-8 overflow-hidden">
          {/* Centered Proportionally Scaled Video Element */}
          <div className="relative w-full max-w-5xl aspect-video rounded-card-lg overflow-hidden border border-white/15 bg-black shadow-elevated">
            <video
              ref={videoRef}
              src={activeVideoSrc}
              poster="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1600&q=85"
              muted
              playsInline
              preload="auto"
              onLoadedMetadata={handleLoadedMetadata}
              className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.98]"
            />

            {/* Subtle Vignette & Scrim for Editorial Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60 pointer-events-none" />

            {/* Active Stage Floating Editorial Overlay (Bottom Left of Video) */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md z-20 space-y-2 pointer-events-none select-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#DCE8CF]">
                <span className="w-2 h-2 rounded-full bg-[#DCE8CF] animate-pulse" />
                <span>{currentStage.eyebrow}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                {currentStage.title}
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                {currentStage.description}
              </p>

              <div className="pt-1 flex items-center gap-2 text-[11px] text-[#DCE8CF] font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#607C55]" />
                <span>{currentStage.clinicalMetric}</span>
              </div>
            </div>

            {/* Top Right Stage Counter & Scrub Percentage */}
            <div className="absolute top-6 right-6 z-20 flex items-center gap-3 pointer-events-none">
              <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 font-mono text-xs text-[#DCE8CF]">
                <span>STAGE {currentStage.num} / 06</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 font-mono text-xs text-white/70">
                {Math.round(scrollProgress * 100)}% SEATED
              </div>
            </div>

            {/* Final Stage Quick Booking Trigger (Visible when aligner is fitted) */}
            {activeStageIdx >= 4 && (
              <div className="absolute top-6 left-6 z-20 animate-in fade-in duration-300">
                <Button
                  variant="pistachio"
                  size="sm"
                  onClick={onBookAppointment}
                  className="shadow-card text-xs font-semibold px-4 py-2"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Book Aligner Consultation
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Interactive Stage Timeline Scrubber */}
        <footer className="relative z-30 pb-6 px-6 sm:px-10 lg:px-14 border-t border-white/10 pt-4 backdrop-blur-md bg-[#171B16]/85">
          <div className="max-w-5xl mx-auto space-y-3">
            {/* Horizontal Timeline Bar */}
            <div className="relative h-1.5 w-full bg-white/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#607C55] via-[#DCE8CF] to-white rounded-full transition-all duration-150"
                style={{ width: `${Math.max(4, scrollProgress * 100)}%` }}
              />
            </div>

            {/* 6 Stage Navigation Buttons */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {STAGES.map((stg, idx) => {
                const isActive = activeStageIdx === idx;
                const isPassed = activeStageIdx > idx;
                return (
                  <button
                    key={stg.num}
                    onClick={() => handleJumpToStage(idx)}
                    className={`text-left p-2 rounded-xl transition-all border ${
                      isActive
                        ? "bg-white/15 border-[#DCE8CF] text-white shadow-subtle"
                        : isPassed
                        ? "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                        : "bg-transparent border-transparent text-white/40 hover:text-white/70"
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px]">
                      <span className={isActive ? "text-[#DCE8CF] font-bold" : ""}>
                        {stg.num}
                      </span>
                      {isPassed && <span className="text-[#607C55]">✓</span>}
                    </div>
                    <p className="text-[11px] font-medium truncate pt-0.5">
                      {stg.stageName}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Scroll Hint */}
            <div className="flex items-center justify-between text-xs text-white/50 pt-1">
              <div className="flex items-center gap-1.5">
                <ChevronDown className="w-3.5 h-3.5 text-[#DCE8CF] animate-bounce" />
                <span className="text-[11px] uppercase tracking-wider">
                  Scroll down to scrub clear aligner seating progression
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#DCE8CF]">
                Saibaba Colony Practice · Dr. Preethi
              </span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
