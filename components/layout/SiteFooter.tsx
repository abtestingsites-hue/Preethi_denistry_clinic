"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { clinicInfo } from "@/data/clinicInfo";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  // All 10 required footer links from Requirement 8
  const footerNavigation = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Treatments", href: "#treatments" },
    { label: "Invisalign", href: "#invisalign" },
    { label: "Clinic Gallery", href: "#gallery" },
    { label: "Patient Reviews", href: "#testimonials" },
    { label: "Blog", href: "#blogs" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-[#111310] text-white border-t border-white/10">
      <div className="content-container py-10 sm:py-12">
        {/* Main 4-Column Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-2xl text-white font-semibold tracking-tight">
                Dr. Preethi’s
              </span>
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#C7DDB0] font-medium">
                Dentistry · Saibaba Colony
              </p>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm font-light">
              Contemporary dental care, unhurried consultations, and custom Invisalign® clear aligners in Saibaba Colony, Coimbatore.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#C7DDB0]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Invisalign® Consultations by Appointment</span>
            </div>
          </div>

          {/* Col 2: Navigation Links Column 1 (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C7DDB0]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-white/75">
              {footerNavigation.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white hover:underline transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Links Column 2 (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C7DDB0]">
              Resources
            </h3>
            <ul className="space-y-2 text-xs text-white/75">
              {footerNavigation.slice(5).map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className="hover:text-white hover:underline transition-colors inline-block"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="hover:text-white hover:underline transition-colors inline-block"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C7DDB0]">
              Clinic Contact
            </h3>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C7DDB0] shrink-0 mt-0.5" />
                <span>{clinicInfo.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C7DDB0] shrink-0" />
                <a
                  href={`tel:${clinicInfo.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {clinicInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C7DDB0] shrink-0" />
                <span>Mon – Sat: 09:30 AM – 08:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Clean Legal Row */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {currentYear} {clinicInfo.name}. All rights reserved. Saibaba Colony, Coimbatore.
          </p>

          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
