import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";
import { clinicInfo, agencyCredit } from "@/data/clinicInfo";
import { treatmentsData } from "@/data/treatmentsData";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Clinic", href: "#about" },
    { label: "Treatments", href: "#treatments" },
    { label: "Invisalign® Suite", href: "#invisalign" },
    { label: "Clinic Spaces & Gallery", href: "#gallery" },
    { label: "Meet Dr. Preethi", href: "#dentist" },
    { label: "The Smile Journal", href: "#blogs" },
    { label: "Patient Reviews", href: "#testimonials" },
    { label: "Frequently Asked Questions", href: "#faq" },
    { label: "Contact & Location", href: "#contact" },
  ];

  return (
    <footer className="bg-[#111310] text-white border-t border-white/10">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Column 1: Brand & Identity (2 cols on large) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl tracking-tight text-white font-semibold">
                Dr. Preethi’s
              </span>
              <p className="text-xs tracking-[0.24em] uppercase text-[#C7DDB0] font-medium">
                Dentistry · Saibaba Colony, Coimbatore
              </p>
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm font-light">
              A contemporary dental practice dedicated to thoughtful, unhurried patient care,
              discreet Invisalign® clear aligners, and aesthetic smile enhancements in a calming,
              welcoming environment.
            </p>

            <div className="p-4 rounded-2xl bg-[#1A1D19] border border-white/10 max-w-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C7DDB0] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#C7DDB0]" />
                <span>Invisalign® Consultations</span>
              </div>
              <p className="text-xs text-white/60">
                Digital orthodontic assessments and customized aligner roadmaps tailored to your lifestyle.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7DDB0]">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              {quickLinks.slice(0, 5).map((item) => (
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

          {/* Column 3: Treatments & Journal */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7DDB0]">
              Treatments
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              {treatmentsData.slice(0, 5).map((treatment) => (
                <li key={treatment.id}>
                  <a
                    href="#treatments"
                    className="hover:text-white hover:underline transition-colors inline-block"
                  >
                    {treatment.title}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#blogs"
                  className="text-xs font-semibold text-[#C7DDB0] hover:underline inline-flex items-center gap-1"
                >
                  <span>The Smile Journal</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7DDB0]">
              Clinic Info
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C7DDB0] shrink-0 mt-1" />
                <span>
                  {clinicInfo.locality}, {clinicInfo.city}, {clinicInfo.state} {clinicInfo.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C7DDB0] shrink-0" />
                <a
                  href={`tel:${clinicInfo.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {clinicInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C7DDB0] shrink-0" />
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {clinicInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C7DDB0] shrink-0 mt-1" />
                <div className="text-xs space-y-1 text-white/60">
                  <p>Mon – Fri: 09:30 AM – 08:00 PM</p>
                  <p>Saturday: 09:30 AM – 06:30 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={clinicInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C7DDB0] hover:text-white transition-colors"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Attribution */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {currentYear} {clinicInfo.name}. All rights reserved. Saibaba Colony, Coimbatore.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/30">·</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span className="text-white/30">·</span>
            <span>
              Developed by{" "}
              <span className="text-white font-medium">
                {agencyCredit.name}
              </span>{" "}
              (CIN: {agencyCredit.cin})
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
