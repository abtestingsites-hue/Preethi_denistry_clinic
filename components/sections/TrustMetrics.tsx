"use client";

import React, { useEffect, useState, useRef } from "react";
import { Sparkles } from "lucide-react";

interface KPIItem {
  id: string;
  targetNumber: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  description: string;
  sourceAttribution: string;
}

export function TrustMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const kpis: KPIItem[] = [
    {
      id: "planning",
      targetNumber: 100,
      suffix: "%",
      label: "Digital Treatment Planning",
      description: "3D intraoral scans & digital bite roadmaps",
      sourceAttribution: "Clinical Protocol",
    },
    {
      id: "consultations",
      targetNumber: 1200,
      suffix: "+",
      label: "Smiles & Consultations",
      description: "Orthodontic & aesthetic care delivered in Coimbatore",
      sourceAttribution: "Practice Records",
    },
    {
      id: "experience",
      targetNumber: 10,
      suffix: "+ Yrs",
      label: "Clinical Experience",
      description: "Led by Dr. Preethi, Chief Dental Surgeon",
      sourceAttribution: "BDS Professional Credential",
    },
    {
      id: "satisfaction",
      targetNumber: 4.9,
      suffix: " / 5",
      decimals: 1,
      label: "Patient Satisfaction",
      description: "Reflected in verified reviews & patient feedback",
      sourceAttribution: "Verified Public Reviews",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Clinic Trust Metrics and Verified Indicators"
      className="bg-white border-b border-[#E8E9E5] py-8 sm:py-10"
    >
      <div className="content-container">
        {/* Compact Horizontal Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E9E5]">
          {kpis.map((kpi, index) => (
            <div
              key={kpi.id}
              className={`py-5 sm:py-2 sm:px-6 space-y-1.5 ${
                index === 0 ? "sm:pl-0" : ""
              } ${index === kpis.length - 1 ? "sm:pr-0" : ""}`}
            >
              {/* Restrained Large Numeral (32–40px) */}
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-3xl sm:text-4xl text-[#181A16] tracking-tight font-medium">
                  {kpi.prefix}
                  <CountUp
                    target={kpi.targetNumber}
                    decimals={kpi.decimals || 0}
                    trigger={isVisible}
                  />
                  <span className="text-[#6a774b] font-light text-2xl sm:text-3xl">
                    {kpi.suffix}
                  </span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8f9d6f] mb-1 ml-1" />
              </div>

              {/* Explanatory Labels */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#181A16]">
                  {kpi.label}
                </h3>
                <p className="text-[12px] text-[#858780] leading-snug pt-0.5">
                  {kpi.description}
                </p>
              </div>

              {/* Small Source Attribution */}
              <div className="pt-1 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#6a774b] font-medium">
                <span>{kpi.sourceAttribution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({
  target,
  decimals = 0,
  trigger,
}: {
  target: number;
  decimals?: number;
  trigger: boolean;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const duration = 1400; // ms
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setVal(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setVal(target);
      }
    };

    requestAnimationFrame(update);
  }, [trigger, target]);

  return (
    <span>
      {decimals > 0
        ? val.toFixed(decimals)
        : Math.floor(val).toLocaleString("en-IN")}
    </span>
  );
}
