import React from "react";
import { cn } from "@/lib/utils";

interface AlignerGraphicProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  animated?: boolean;
}

export function AlignerGraphic({
  className,
  size = "md",
  animated = true,
}: AlignerGraphicProps) {
  const sizeMap = {
    sm: "w-32 h-24",
    md: "w-52 h-36",
    lg: "w-80 h-56",
    xl: "w-[440px] h-[300px]",
    hero: "w-[480px] h-[340px] sm:w-[560px] sm:h-[400px] lg:w-[640px] lg:h-[460px]",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center select-none pointer-events-none",
        sizeMap[size],
        animated && "animate-float",
        className
      )}
      aria-hidden="true"
    >
      {/* Background Soft Pistachio & Sage Refraction Aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#C7DDB0]/35 via-[#C7DDB0]/20 to-[#FFFFFF]/60 blur-3xl rounded-full transform scale-90" />

      {/* Clear Aligner Tray SVG with Precision Dental Geometry */}
      <svg
        viewBox="0 0 340 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_16px_36px_rgba(92,118,81,0.18)]"
      >
        <defs>
          {/* Glass Translucent Multi-Stop Gradient */}
          <linearGradient id="v4AlignerGlassGrad" x1="20" y1="20" x2="320" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#F7F7F5" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#C7DDB0" stopOpacity="0.35" />
            <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C7DDB0" stopOpacity="0.45" />
          </linearGradient>

          {/* Tray Edge Reflection Gradient */}
          <linearGradient id="v4TrayRimGrad" x1="10" y1="10" x2="330" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C7DDB0" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#5C7651" stopOpacity="0.75" />
            <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.98" />
            <stop offset="80%" stopColor="#C7DDB0" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#C7DDB0" stopOpacity="0.9" />
          </linearGradient>

          {/* Incisal Ridge Highlighting */}
          <linearGradient id="v4RidgeHighlight" x1="170" y1="25" x2="170" y2="195" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
          </linearGradient>

          {/* Laser-Etched Coordinate Marker Gradient */}
          <linearGradient id="v4LaserGrad" x1="0" y1="0" x2="0" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5C7651" />
            <stop offset="100%" stopColor="#C7DDB0" />
          </linearGradient>
        </defs>

        {/* Outer Parabolic Dental Arch (Precision Thermoformed Biopolymer) */}
        <path
          d="M 45 195 
             C 50 135, 85 55, 170 42 
             C 255 55, 290 135, 295 195
             C 275 188, 245 174, 228 163
             C 196 142, 144 142, 112 163
             C 95 174, 65 188, 45 195 Z"
          fill="url(#v4AlignerGlassGrad)"
          stroke="url(#v4TrayRimGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Gingival Margin Scallop Contour Line (Anterior to Molars) */}
        <path
          d="M 58 185
             Q 64 160, 75 156
             Q 88 151, 101 142
             Q 115 131, 132 124
             Q 151 116, 170 116
             Q 189 116, 208 124
             Q 225 131, 239 142
             Q 252 151, 265 156
             Q 276 160, 282 185"
          stroke="url(#v4TrayRimGrad)"
          strokeWidth="1.3"
          strokeDasharray="5 2.5"
          opacity="0.88"
        />

        {/* Individual Crown Compartments & Micro-Anatomical Grooves */}
        <g opacity="0.8" stroke="#FFFFFF" strokeWidth="1.3">
          {/* Central Incisors Edge */}
          <path d="M 158 45 Q 170 41, 182 45" />
          <path d="M 170 43 L 170 75" strokeOpacity="0.45" strokeDasharray="2.5 2.5" />

          {/* Lateral Incisors */}
          <path d="M 132 54 Q 147 48, 158 45" />
          <path d="M 182 45 Q 193 48, 208 54" />

          {/* Canine Cusps */}
          <path d="M 106 72 Q 119 61, 132 54" />
          <path d="M 208 54 Q 221 61, 234 72" />

          {/* Premolars Ridge */}
          <path d="M 83 103 Q 94 87, 106 72" />
          <path d="M 234 72 Q 246 87, 257 103" />

          {/* Molars */}
          <path d="M 62 145 Q 73 124, 83 103" />
          <path d="M 257 103 Q 267 124, 278 145" />
        </g>

        {/* Translucent Surface Light Refraction Arc */}
        <path
          d="M 80 150 C 115 80, 225 80, 260 150"
          stroke="url(#v4RidgeHighlight)"
          strokeWidth="2.8"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* Secondary Delicate Refraction Ray */}
        <path
          d="M 110 160 C 135 110, 205 110, 230 160"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Precision Laser-Etched Calibration Markers */}
        <circle cx="170" cy="56" r="1.8" fill="url(#v4LaserGrad)" />
        <circle cx="138" cy="67" r="1.4" fill="url(#v4LaserGrad)" opacity="0.8" />
        <circle cx="202" cy="67" r="1.4" fill="url(#v4LaserGrad)" opacity="0.8" />
        <circle cx="112" cy="86" r="1.3" fill="url(#v4LaserGrad)" opacity="0.7" />
        <circle cx="228" cy="86" r="1.3" fill="url(#v4LaserGrad)" opacity="0.7" />
      </svg>
    </div>
  );
}
