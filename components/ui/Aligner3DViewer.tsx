"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Layers, Eye, RefreshCw, ZoomIn, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type Aligner3DViewMode = "upper-arch" | "side-profile" | "isolated-tray" | "presentation";

interface Aligner3DViewerProps {
  className?: string;
  initialMode?: Aligner3DViewMode;
  showControls?: boolean;
  interactive?: boolean;
  compact?: boolean;
}

export function Aligner3DViewer({
  className,
  initialMode = "upper-arch",
  showControls = true,
  interactive = true,
  compact = false,
}: Aligner3DViewerProps) {
  const [activeMode, setActiveMode] = useState<Aligner3DViewMode>(initialMode);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics for realistic 3D feel
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 180,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 180,
    damping: 24,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // Image source mapping for each 3D view mode
  const viewAssets: Record<Aligner3DViewMode, { src: string; alt: string; label: string; badge: string }> = {
    "upper-arch": {
      src: "/hero-aligner-3d.png",
      alt: "Photorealistic 3D Invisalign clear aligner fitted over dental arch",
      label: "Full Aligner",
      badge: "Invisalign® Fitted Trays",
    },
    "side-profile": {
      src: "/aligner-upper-arch.png",
      alt: "3D Upper dental arch with transparent clear aligner tray",
      label: "Upper Arch",
      badge: "Upper Arch Precision",
    },
    "isolated-tray": {
      src: "/aligner-isolated-tray.png",
      alt: "Isolated transparent clear aligner orthodontic tray floating in 3D perspective",
      label: "Isolated Tray",
      badge: "0.75mm Biopolymer",
    },
    presentation: {
      src: "/aligner-presentation.png",
      alt: "Luxury clear aligner orthodontic presentation with travel case",
      label: "Aligner Suite",
      badge: "Clinic Suite & Case",
    },
  };

  const currentAsset = viewAssets[activeMode];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-card bg-gradient-to-b from-[#FAFAF8] via-white to-[#F7F8F5] border border-[#E8E9E5] shadow-card hover:shadow-elevated transition-shadow duration-500 flex flex-col justify-between overflow-hidden select-none group",
        compact ? "p-4 sm:p-5" : "p-5 sm:p-7",
        className
      )}
      style={{ perspective: 1200 }}
    >
      {/* Top Header Bar: Perspective Mode Switcher Pills */}
      {showControls && (
        <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E8E9E5]/70">
          <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-[#E8E9E5] text-[11px] shadow-subtle">
            {(["upper-arch", "side-profile", "isolated-tray", "presentation"] as Aligner3DViewMode[]).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setActiveMode(mode)}
                className={cn(
                  "px-3 py-1 rounded-full font-medium transition-all duration-200",
                  activeMode === mode
                    ? "bg-[#6a774b] text-white shadow-subtle"
                    : "text-[#858780] hover:text-[#181A16]"
                )}
              >
                {viewAssets[mode].label}
              </button>
            ))}
          </div>

          {/* Active Feature Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8f9d6f]/20 border border-[#8f9d6f]/35 text-[11px] font-semibold text-[#6a774b]">
            <Sparkles className="w-3 h-3 text-[#6a774b]" />
            <span>{currentAsset.badge}</span>
          </span>
        </div>
      )}

      {/* Main 3D Stage with Tilt Response & Realistic Floating Shadow */}
      <motion.div
        style={{
          rotateX: interactive ? rotateX : 0,
          rotateY: interactive ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className="relative my-auto flex flex-col items-center justify-center py-4 sm:py-6 min-h-[280px] sm:min-h-[320px]"
      >
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute inset-0 bg-radial from-[#8f9d6f]/15 via-[#6a774b]/05 to-transparent blur-3xl rounded-full pointer-events-none" />

        {/* Floating 3D Aligner Object Container */}
        <motion.div
          animate={{
            y: isHovered ? [0, -12, 0] : [0, -8, 0],
            rotateZ: isHovered ? [0, 1.2, -1.2, 0] : 0,
          }}
          transition={{
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateZ: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/3] flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform duration-300 group-hover:scale-[1.03]"
        >
          <Image
            key={currentAsset.src}
            src={currentAsset.src}
            alt={currentAsset.alt}
            fill
            priority
            className="object-contain drop-shadow-[0_20px_35px_rgba(37,39,36,0.14)] select-none transition-all duration-300"
            sizes="(max-width: 768px) 100vw, 420px"
          />
        </motion.div>

        {/* Realistic Floating Shadow Beneath the Aligner that breathes in sync with floating */}
        <motion.div
          animate={{
            scale: isHovered ? [1, 0.85, 1] : [1, 0.9, 1],
            opacity: isHovered ? [0.45, 0.25, 0.45] : [0.35, 0.2, 0.35],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-56 sm:w-64 h-5 rounded-[100%] bg-gradient-to-r from-transparent via-[#252724]/70 to-transparent blur-md mt-1 pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle 3D Depth Indicator Pill */}
        <div className="absolute bottom-2 right-2 sm:right-4 z-20 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8E9E5] shadow-subtle flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full bg-[#6a774b] animate-pulse" />
          <span className="font-semibold text-[#181A16]">3D Product Inspection</span>
          <span className="text-[10px] text-[#858780] hidden sm:inline">· Move Cursor to Tilt</span>
        </div>
      </motion.div>

      {/* Bottom Footer Info Strip */}
      {showControls && (
        <div className="relative z-20 pt-3 border-t border-[#E8E9E5]/70 flex items-center justify-between text-xs text-[#858780]">
          <div className="flex items-center gap-1.5 text-[#181A16] font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#6a774b]" />
            <span>Digital 3D Smile Scanning</span>
          </div>
          <span className="text-[11px] font-mono text-[#858780]">
            Saibaba Colony Practice
          </span>
        </div>
      )}
    </div>
  );
}
