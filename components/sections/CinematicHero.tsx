"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Play,
  Pause,
  Shield,
  Video,
  Scan,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CinematicHeroProps {
  onBookAppointment: () => void;
  onExploreInvisalign: () => void;
  onExploreClinic: () => void;
}

export function CinematicHero({
  onBookAppointment,
  onExploreInvisalign,
  onExploreClinic,
}: CinematicHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Available local high-definition dental video clips
  const videoSources = [
    {
      id: "clinical-care",
      label: "Clinical Care",
      src: "/videos/teeth-hero.mp4",
      description: "Modern dental operatory & clinical precision",
    },
    {
      id: "3d-teeth-scan",
      label: "3D Teeth Scan",
      src: "/videos/teeth-scan.mp4",
      description: "Digital 3D tooth alignment & orthodontic scanning",
    },
  ];

  const currentVideo = videoSources[activeVideoIndex];

  // High-resolution poster fallback
  const heroPosterUrl = "/Clinic.png";
  const alignerFeatureUrl = "/aligner-presentation.png";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
      });
    }
  }, [activeVideoIndex]);

  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(() => {});
    }
  }, []);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  return (
    <section
      id="hero"
      aria-label="Dr. Preethi's Dentistry Hero Experience"
      className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#F7FAF7] to-white text-[#111311] border-b border-[#E5EAE4]"
    >
      {/* Ambient Background Video Layer (Subtle, Translucent Teeth Animation) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.045] mix-blend-multiply">
        <video
          ref={bgVideoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center scale-110 filter blur-[1px]"
        >
          <source src="/videos/teeth-scan.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Soft Ambient Refractive Lighting (Pastel Green Glows) */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#EAF3E9]/80 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#B8D8B5]/25 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: High-Contrast Editorial Typography & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-7 max-w-2xl">
            {/* Eyebrow Pill */}
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3E9] border border-[#B8D8B5]/70 text-xs font-semibold tracking-[0.2em] uppercase text-[#466A45] shadow-subtle">
                <Sparkles className="w-3.5 h-3.5 text-[#668C63]" />
                <span>PREMIUM DENTAL CARE · SAIBABA COLONY, COIMBATORE</span>
              </span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.04] text-[#111311] font-normal text-balance">
                Your Smile. <br />
                <span className="italic font-light text-[#668C63]">Reimagined.</span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#666B66] leading-relaxed font-light max-w-xl">
              Discover a thoughtful approach to modern dentistry, personalized consultations,
              and smile-enhancing treatments in a contemporary, welcoming clinical environment.
            </p>

            {/* CTAs Cluster */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onBookAppointment}
                className="bg-[#668C63] hover:bg-[#466A45] text-white shadow-elevated font-medium px-8 py-4 text-base"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Book Your Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onExploreInvisalign}
                className="bg-white border-[#E5EAE4] text-[#111311] hover:bg-[#EAF3E9] hover:border-[#668C63] px-8 py-4 text-base font-medium"
              >
                Explore Invisalign
              </Button>
            </div>

            {/* Tertiary Link & Compact Location Marker */}
            <div className="pt-1 flex flex-wrap items-center gap-5 text-xs text-[#666B66]">
              <button
                onClick={onExploreClinic}
                className="inline-flex items-center gap-1.5 font-semibold text-[#111311] hover:text-[#466A45] underline underline-offset-4 transition-colors"
              >
                <span>Discover Our Clinic Spaces</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[#E5EAE4]">|</span>

              <div className="inline-flex items-center gap-1.5 text-[#466A45] font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#668C63]" />
                <span>Saibaba Colony, Coimbatore · Tamil Nadu</span>
              </div>
            </div>

            {/* Key Clinical Commitments Micro-Pills */}
            <div className="pt-4 border-t border-[#E5EAE4]/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#666B66]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#668C63]" />
                <span>Invisalign® Suite</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#668C63]" />
                <span>Unhurried 1-on-1 Care</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#668C63]" />
                <span>Hospital-Grade Sterilization</span>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Layered Cinematic Visual Stage (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Cinematic Video Showcase Frame */}
              <div className="relative aspect-[4/5] sm:aspect-[4/4.8] rounded-3xl overflow-hidden shadow-elevated border-2 border-white bg-[#111411] ring-1 ring-[#E5EAE4]">
                {/* High-Definition Teeth & Dentistry Background Video */}
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={heroPosterUrl}
                  key={currentVideo.src}
                  className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
                >
                  <source src={currentVideo.src} type="video/mp4" />
                </video>

                {/* Subtle Refined Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                {/* Top Video Mode Switcher Pills */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md p-1 rounded-full border border-white/20">
                  {videoSources.map((v, idx) => (
                    <button
                      key={v.id}
                      onClick={() => setActiveVideoIndex(idx)}
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                        activeVideoIndex === idx
                          ? "bg-white text-[#111311] shadow-sm"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {idx === 0 ? (
                        <Video className="w-3 h-3 text-[#668C63]" />
                      ) : (
                        <Scan className="w-3 h-3 text-[#668C63]" />
                      )}
                      <span>{v.label}</span>
                    </button>
                  ))}
                </div>

                {/* Video Play/Pause Micro-Controller */}
                <button
                  onClick={toggleVideoPlayback}
                  aria-label={isPlaying ? "Pause background clinic video" : "Play background clinic video"}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 backdrop-blur-md text-[#111311] hover:bg-white shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#668C63]"
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 text-[#668C63]" />
                  ) : (
                    <Play className="w-3.5 h-3.5 text-[#668C63] fill-current" />
                  )}
                </button>

                {/* Bottom Frame Caption */}
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white text-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B8D8B5] animate-ping" />
                    <span className="font-semibold text-[#B8D8B5] uppercase tracking-wider text-[10px]">
                      Live Clinical Perspective · {currentVideo.label}
                    </span>
                  </div>
                  <p className="text-white/90 font-light">
                    {currentVideo.description}
                  </p>
                </div>
              </div>

              {/* Floating Glassmorphic Feature Card: Invisalign Suite (Top Right) */}
              <div className="absolute -top-5 -right-3 sm:-right-6 z-20 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5EAE4] shadow-float max-w-[240px] sm:max-w-[260px] space-y-2 animate-in fade-in duration-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[#EAF3E9] text-[#668C63]">
                      <Sparkles className="w-4 h-4 text-[#668C63]" />
                    </span>
                    <span className="text-xs font-bold text-[#111311]">
                      Invisalign® Suite
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#668C63] animate-pulse" />
                </div>

                <div className="relative h-20 w-full rounded-xl overflow-hidden bg-[#F7FAF7] border border-[#E5EAE4]/60">
                  <Image
                    src={alignerFeatureUrl}
                    alt="Invisalign clear aligner tray demonstration"
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-1.5 left-2 text-[10px] text-white font-medium">
                    Digital 3D Smile Scanning
                  </span>
                </div>

                <p className="text-[11px] text-[#666B66] leading-tight">
                  Discreet, custom clear aligners tailored to your smile.
                </p>
              </div>

              {/* Floating Glassmorphic Badge: Clinical Consultation Badge (Bottom Left) */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 z-20 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5EAE4] shadow-float flex items-center gap-3 animate-in fade-in duration-500">
                <div className="w-10 h-10 rounded-xl bg-[#EAF3E9] border border-[#B8D8B5]/60 flex items-center justify-center text-[#668C63] font-bold text-sm shrink-0">
                  <Shield className="w-5 h-5 text-[#668C63]" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-[#111311]">Dr. Preethi’s Dentistry</p>
                  <p className="text-[11px] text-[#668C63] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#668C63]" />
                    Saibaba Colony, Coimbatore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 text-xs text-[#666B66] hover:text-[#111311] transition-colors cursor-pointer">
        <button
          onClick={onExploreClinic}
          aria-label="Scroll down to trust indicators"
          className="flex flex-col items-center gap-1 group"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono text-[#666B66] group-hover:text-[#668C63] transition-colors">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#668C63]" />
        </button>
      </div>
    </section>
  );
}
