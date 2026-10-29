"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Layers, Eye, RefreshCw, ZoomIn, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type Aligner3DViewMode = "upper-arch" | "side-profile" | "tray-closeup" | "isolated-tray";

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
  const [trayVisible, setTrayVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics for realistic 3D feel
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 160,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 160,
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
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-card bg-gradient-to-b from-[#F7F8F5] via-white to-[#F7F8F5] border border-[#E8E9E5] shadow-card flex flex-col justify-between overflow-hidden select-none",
        compact ? "p-4 sm:p-5" : "p-5 sm:p-7",
        className
      )}
      style={{ perspective: 1000 }}
    >
      {/* Top Header Bar: Perspective Mode Switcher Pills */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E8E9E5]/70">
        <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-[#E8E9E5] text-[11px] shadow-subtle">
          <button
            type="button"
            onClick={() => setActiveMode("upper-arch")}
            className={cn(
              "px-3 py-1 rounded-full font-medium transition-colors",
              activeMode === "upper-arch"
                ? "bg-[#5C7651] text-white"
                : "text-[#858780] hover:text-[#252724]"
            )}
          >
            Upper Arch
          </button>
          <button
            type="button"
            onClick={() => setActiveMode("tray-closeup")}
            className={cn(
              "px-3 py-1 rounded-full font-medium transition-colors",
              activeMode === "tray-closeup"
                ? "bg-[#5C7651] text-white"
                : "text-[#858780] hover:text-[#252724]"
            )}
          >
            Transparency
          </button>
          <button
            type="button"
            onClick={() => setActiveMode("isolated-tray")}
            className={cn(
              "px-3 py-1 rounded-full font-medium transition-colors hidden sm:inline-block",
              activeMode === "isolated-tray"
                ? "bg-[#5C7651] text-white"
                : "text-[#858780] hover:text-[#252724]"
            )}
          >
            Isolated Tray
          </button>
        </div>

        {/* Tray Visibility Toggle */}
        <button
          type="button"
          onClick={() => setTrayVisible((prev) => !prev)}
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all",
            trayVisible
              ? "bg-[#C7DDB0]/40 text-[#5C7651] border-[#A9C49A]/50"
              : "bg-white text-[#858780] border-[#E8E9E5]"
          )}
          title="Toggle aligner tray visualization"
        >
          <Sparkles className="w-3 h-3 text-[#5C7651]" />
          <span>{trayVisible ? "Aligner: Fitted" : "Natural Arch"}</span>
        </button>
      </div>

      {/* Main 3D Stage with Tilt Response & Studio Lighting */}
      <motion.div
        style={{
          rotateX: interactive ? rotateX : 0,
          rotateY: interactive ? rotateY : 0,
        }}
        className="relative my-auto flex items-center justify-center py-6 sm:py-8 min-h-[260px] sm:min-h-[310px]"
      >
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute inset-0 bg-radial from-[#C7DDB0]/20 via-[#A9C49A]/10 to-transparent blur-2xl rounded-full pointer-events-none" />

        {/* 3D Dental Arch & Aligner SVG Visual */}
        <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/3] flex items-center justify-center">
          <svg
            viewBox="0 0 380 270"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_16px_28px_rgba(37,39,36,0.08)] transition-all duration-500"
          >
            <defs>
              {/* Studio Enamel Gradient (Upper Dental Arch) */}
              <linearGradient id="enamelGrad" x1="190" y1="40" x2="190" y2="210" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#FAFBF9" />
                <stop offset="100%" stopColor="#EFF1EC" />
              </linearGradient>

              {/* Gum Gingival Tissue Gradient */}
              <linearGradient id="gingivalGrad" x1="190" y1="30" x2="190" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F4DCD9" />
                <stop offset="50%" stopColor="#EBC6C1" />
                <stop offset="100%" stopColor="#DFADA7" />
              </linearGradient>

              {/* Clear Aligner Transparent Biopolymer Gradient */}
              <linearGradient id="trayRefractGrad" x1="40" y1="40" x2="340" y2="240" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.88" />
                <stop offset="30%" stopColor="#F7F8F5" stopOpacity="0.60" />
                <stop offset="55%" stopColor="#C7DDB0" stopOpacity="0.32" />
                <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.78" />
                <stop offset="100%" stopColor="#A9C49A" stopOpacity="0.42" />
              </linearGradient>

              {/* Aligner Edge Rim Specular Highlight */}
              <linearGradient id="trayRimSpec" x1="30" y1="30" x2="350" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C7DDB0" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#5C7651" stopOpacity="0.65" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.98" />
                <stop offset="70%" stopColor="#A9C49A" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#C7DDB0" stopOpacity="0.90" />
              </linearGradient>

              {/* Incisal Translucent Ridge Reflection */}
              <linearGradient id="incisalRidge" x1="190" y1="40" x2="190" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
              </linearGradient>

              {/* Contact Shadow Filter */}
              <radialGradient id="pedestalShadow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#252724" stopOpacity="0.12" />
                <stop offset="60%" stopColor="#252724" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#252724" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Subtle Pedestal Contact Shadow */}
            <ellipse cx="190" cy="242" rx="140" ry="14" fill="url(#pedestalShadow)" />

            {/* Gingival Tissue Base (Hidden in isolated-tray mode) */}
            {activeMode !== "isolated-tray" && (
              <path
                d="M 68 185 
                   C 74 125, 108 52, 190 42 
                   C 272 52, 306 125, 312 185
                   C 292 178, 260 164, 242 153
                   C 214 135, 166 135, 138 153
                   C 120 164, 88 178, 68 185 Z"
                fill="url(#gingivalGrad)"
                opacity="0.75"
              />
            )}

            {/* Individual Tooth Anatomy (Central, Lateral, Canine, Premolars, Molars) */}
            {activeMode !== "isolated-tray" && (
              <g stroke="#E8E9E5" strokeWidth="0.8">
                {/* Central Incisors (Right & Left) */}
                <path
                  d="M 166 45 C 166 42, 188 42, 190 42 C 192 42, 214 42, 214 45 C 215 68, 213 88, 203 102 C 195 106, 185 106, 177 102 C 167 88, 165 68, 166 45 Z"
                  fill="url(#enamelGrad)"
                />
                <line x1="190" y1="43" x2="190" y2="105" stroke="#E8E9E5" strokeWidth="1" strokeDasharray="1.5 1.5" />

                {/* Lateral Incisors */}
                <path
                  d="M 142 54 C 143 49, 164 45, 166 45 C 165 68, 167 88, 177 102 C 166 103, 153 98, 144 88 C 140 76, 141 64, 142 54 Z"
                  fill="url(#enamelGrad)"
                />
                <path
                  d="M 238 54 C 237 49, 216 45, 214 45 C 215 68, 213 88, 203 102 C 214 103, 227 98, 236 88 C 240 76, 239 64, 238 54 Z"
                  fill="url(#enamelGrad)"
                />

                {/* Canine Cusps */}
                <path
                  d="M 116 74 C 119 63, 138 55, 142 54 C 141 64, 140 76, 144 88 C 134 94, 122 98, 116 90 C 114 84, 115 78, 116 74 Z"
                  fill="url(#enamelGrad)"
                />
                <path
                  d="M 264 74 C 261 63, 242 55, 238 54 C 239 64, 240 76, 236 88 C 246 94, 258 98, 264 90 C 266 84, 265 78, 264 74 Z"
                  fill="url(#enamelGrad)"
                />

                {/* Premolars */}
                <path
                  d="M 92 108 C 96 92, 111 79, 116 74 C 115 78, 114 84, 116 90 C 108 102, 102 118, 98 126 C 94 122, 92 114, 92 108 Z"
                  fill="url(#enamelGrad)"
                />
                <path
                  d="M 288 108 C 284 92, 269 79, 264 74 C 265 78, 266 84, 264 90 C 272 102, 278 118, 282 126 C 286 122, 288 114, 288 108 Z"
                  fill="url(#enamelGrad)"
                />

                {/* First & Second Molars */}
                <path
                  d="M 72 154 C 76 134, 87 116, 92 108 C 92 114, 94 122, 98 126 C 90 144, 84 165, 80 178 C 75 172, 72 162, 72 154 Z"
                  fill="url(#enamelGrad)"
                />
                <path
                  d="M 308 154 C 304 134, 293 116, 288 108 C 288 114, 286 122, 282 126 C 290 144, 296 165, 300 178 C 305 172, 308 162, 308 154 Z"
                  fill="url(#enamelGrad)"
                />
              </g>
            )}

            {/* TRANSPARENT CLEAR-ALIGNER TRAY OVERLAY */}
            {trayVisible && (
              <g className="transition-opacity duration-300">
                {/* Outer Calibrated Arch Form of Aligner */}
                <path
                  d="M 52 202 
                     C 58 136, 96 48, 190 36 
                     C 284 48, 322 136, 328 202
                     C 306 195, 272 180, 252 168
                     C 218 144, 162 144, 128 168
                     C 108 180, 74 195, 52 202 Z"
                  fill="url(#trayRefractGrad)"
                  stroke="url(#trayRimSpec)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Laser-Etched Scalloped Gingival Margin */}
                <path
                  d="M 66 192
                     Q 74 164, 86 160
                     Q 100 155, 114 145
                     Q 130 133, 148 126
                     Q 169 118, 190 118
                     Q 211 118, 232 126
                     Q 250 133, 266 145
                     Q 280 155, 294 160
                     Q 306 164, 314 192"
                  stroke="url(#trayRimSpec)"
                  strokeWidth="1.2"
                  strokeDasharray="4 2"
                  opacity="0.88"
                />

                {/* Specular Incisal Highlight Arc */}
                <path
                  d="M 90 152 C 130 76, 250 76, 290 152"
                  stroke="url(#incisalRidge)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  opacity="0.75"
                />

                {/* Subtle Refraction Secondary Ray */}
                <path
                  d="M 120 162 C 150 112, 230 112, 260 162"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.45"
                />

                {/* Micro Digital Calibration Points */}
                <circle cx="190" cy="54" r="1.8" fill="#5C7651" opacity="0.85" />
                <circle cx="156" cy="65" r="1.4" fill="#5C7651" opacity="0.75" />
                <circle cx="224" cy="65" r="1.4" fill="#5C7651" opacity="0.75" />
                <circle cx="128" cy="84" r="1.3" fill="#5C7651" opacity="0.65" />
                <circle cx="252" cy="84" r="1.3" fill="#5C7651" opacity="0.65" />
              </g>
            )}
          </svg>
        </div>

        {/* Small Floating Visual Credential Badge */}
        <div className="absolute bottom-2 right-2 sm:right-4 z-20 px-3 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8E9E5] shadow-subtle flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full bg-[#5C7651]" />
          <span className="font-semibold text-[#252724]">0.75 mm Biopolymer</span>
          <span className="text-[10px] text-[#858780] hidden sm:inline">· Custom Calibrated</span>
        </div>
      </motion.div>

      {/* Bottom Footer Info Strip */}
      {showControls && (
        <div className="relative z-20 pt-3 border-t border-[#E8E9E5]/70 flex items-center justify-between text-xs text-[#858780]">
          <div className="flex items-center gap-1.5 text-[#252724] font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#5C7651]" />
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

