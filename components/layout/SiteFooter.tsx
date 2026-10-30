import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  Star,
  ShieldCheck,
} from "lucide-react";
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
    <footer className="bg-[#171B16] text-[#FAFAF7] border-t border-white/10">
      {/* Main Footer Grid */}
      <div className="content-container py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl tracking-tight text-[#FAFAF7] font-semibold">
                Dr. Preethi’s
              </span>
              <p className="text-xs tracking-[0.24em] uppercase text-[#DCE8CF] font-medium">
                Dentistry · Saibaba Colony, Coimbatore
              </p>
            </div>

            <p className="text-sm text-[#FAFAF7]/70 leading-relaxed font-light">
              A contemporary dental practice dedicated to thoughtful, unhurried patient care,
              discreet Invisalign® clear aligners, and aesthetic smile enhancements in a calming,
              welcoming clinical environment.
            </p>

            <div className="p-4 rounded-card bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#DCE8CF] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#DCE8CF]" />
                <span>Invisalign® Certified Clinic</span>
              </div>
              <p className="text-xs text-[#FAFAF7]/60">
                Digital orthodontic assessments and customized aligner roadmaps tailored to your lifestyle.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation & Treatments */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DCE8CF]">
              Treatments & Care
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FAFAF7]/75">
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
                  href="#invisalign"
                  className="text-xs font-semibold text-[#DCE8CF] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Invisalign® Suite</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  className="text-xs font-semibold text-[#DCE8CF] hover:underline inline-flex items-center gap-1"
                >
                  <span>The Smile Journal</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Emergency Care */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DCE8CF]">
              Clinic Hours & Visit
            </h3>
            <ul className="space-y-3.5 text-sm text-[#FAFAF7]/75">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#DCE8CF] shrink-0 mt-1" />
                <div className="text-xs space-y-1 text-[#FAFAF7]/70">
                  <p className="text-[#FAFAF7] font-medium">Monday – Friday</p>
                  <p className="text-white/60">09:30 AM – 08:00 PM</p>
                  <p className="text-[#FAFAF7] font-medium pt-1">Saturday</p>
                  <p className="text-white/60">09:30 AM – 06:30 PM</p>
                  <p className="text-[#FAFAF7] font-medium pt-1">Sunday</p>
                  <p className="text-white/60">By Prior Appointment Only</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#DCE8CF] shrink-0 mt-0.5" />
                <p className="text-xs text-[#FAFAF7]/60">
                  Emergency dental care triage available for registered patients.
                </p>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Direct Booking */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DCE8CF]">
              Direct Reception
            </h3>
            <ul className="space-y-3 text-sm text-[#FAFAF7]/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DCE8CF] shrink-0 mt-1" />
                <span className="text-xs text-[#FAFAF7]/80 leading-relaxed">
                  {clinicInfo.locality}, {clinicInfo.city}, {clinicInfo.state} {clinicInfo.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DCE8CF] shrink-0" />
                <a
                  href={`tel:${clinicInfo.phoneRaw}`}
                  className="hover:text-white transition-colors text-xs font-medium"
                >
                  {clinicInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DCE8CF] shrink-0" />
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="hover:text-white transition-colors text-xs"
                >
                  {clinicInfo.email}
                </a>
              </li>
            </ul>

            {/* Google Reviews rating card & WhatsApp action */}
            <div className="pt-2 space-y-2.5">
              <a
                href={clinicInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-card bg-white/5 border border-white/10 hover:border-[#DCE8CF]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-white">4.9 / 5.0</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#DCE8CF]" />
                </div>
                <p className="text-[11px] text-[#FAFAF7]/60 mt-1">
                  180+ verified Google patient reviews in Coimbatore
                </p>
              </a>

              {clinicInfo.socialLinks.whatsapp && (
                <a
                  href={clinicInfo.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#607C55] hover:bg-[#4E6645] text-white text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Attribution */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAFAF7]/60">
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
