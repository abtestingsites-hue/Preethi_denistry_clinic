"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ClinicLogoProps {
  variant?: "dark" | "white";
  className?: string;
  priority?: boolean;
}

export function ClinicLogo({
  variant = "dark",
  className = "h-10 sm:h-11 w-auto",
  priority = true,
}: ClinicLogoProps) {
  const src =
    variant === "white"
      ? "/clinic-logo-white@2x.png"
      : "/clinic-logo@2x.png";

  return (
    <div className={cn("relative inline-flex items-center select-none", className)}>
     <Image
  src={src}
  alt="Dr. Preethi’s Dentistry — Invisalign® Provider"
  width={350}
  height={104}
  priority={priority}
  className="h-full w-auto max-h-[50px] object-contain"
/>
    </div>
  );
}

