"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Sparkles,
  Calendar,
  AlertCircle,
  Navigation,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clinicInfo } from "@/data/clinicInfo";

interface ContactMapProps {
  onBookAppointment: () => void;
}

export function ContactMap({ onBookAppointment }: ContactMapProps) {
  const [mapError, setMapError] = useState(false);

  return (
    <section
      id="contact"
      aria-label="Contact Information and Clinic Location"
      className="scroll-mt-20 py-14 sm:py-18 lg:py-20 bg-white border-b border-[#E8E9E5]"
    >
      <div className="content-container space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#5C7651]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LOCATION & CLINICAL RECEPTION</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252724] tracking-tight leading-[1.18]">
            Visit Us in Coimbatore.
          </h2>
          <p className="text-sm sm:text-base text-[#858780] leading-relaxed">
            Conveniently situated in Saibaba Colony with accessible parking and peaceful clinical surroundings. Reach our reception by phone, WhatsApp, or request an appointment online.
          </p>
        </div>

        {/* Split-Layout Grid (5 cols info & booking CTA, 7 cols responsive map) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Panel: Contact Information & Direct Action (5 cols) */}
          <div className="lg:col-span-5 bg-[#F7F8F5] rounded-card border border-[#E8E9E5] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-subtle">
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5C7651]">
                  Saibaba Colony Practice
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#252724]">
                  {clinicInfo.name}
                </h3>
                <p className="text-xs text-[#858780]">
                  Lead Clinician: {clinicInfo.leadDentist} (BDS)
                </p>
              </div>

              {/* Verified Details */}
              <div className="space-y-4 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E8E9E5] text-[#5C7651] flex items-center justify-center shrink-0 mt-0.5 shadow-subtle">
                    <MapPin className="w-4 h-4 text-[#5C7651]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#252724]">Clinic Address</h4>
                    <p className="text-[#858780] leading-relaxed">{clinicInfo.fullAddress}</p>
                    <a
                      href={clinicInfo.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#5C7651] hover:underline mt-1"
                    >
                      <span>Get Driving Directions</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E8E9E5] text-[#5C7651] flex items-center justify-center shrink-0 mt-0.5 shadow-subtle">
                    <Phone className="w-4 h-4 text-[#5C7651]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#252724]">Reception Desk</h4>
                    <a
                      href={`tel:${clinicInfo.phoneRaw}`}
                      className="text-[#858780] hover:text-[#252724] font-medium block"
                    >
                      {clinicInfo.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-[#858780]">
                      Mon – Sat: 09:30 AM to 08:00 PM
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E8E9E5] text-[#5C7651] flex items-center justify-center shrink-0 mt-0.5 shadow-subtle">
                    <Clock className="w-4 h-4 text-[#5C7651]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#252724]">Consultation Timings</h4>
                    <div className="space-y-1 text-xs text-[#858780] mt-1">
                      {clinicInfo.openingHours.map((h, i) => (
                        <p key={i}>
                          <span className="font-medium text-[#252724]">{h.day}:</span>{" "}
                          {h.hours}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel CTAs */}
            <div className="pt-6 border-t border-[#E8E9E5] space-y-3">
              <Button
                variant="primary"
                size="md"
                onClick={onBookAppointment}
                className="w-full shadow-subtle"
                leftIcon={<Calendar className="w-4 h-4" />}
              >
                Book Appointment Online
              </Button>

              {clinicInfo.socialLinks?.whatsapp && (
                <a
                  href={clinicInfo.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full border border-[#E8E9E5] bg-white text-[#252724] text-xs font-semibold hover:bg-[#F7F8F5] hover:border-[#5C7651] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#5C7651]" />
                  <span>Connect on WhatsApp</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Panel: Embedded Google Map & Small Clinic Photo Overlay (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-card overflow-hidden border border-[#E8E9E5] bg-white shadow-card min-h-[420px] sm:min-h-[480px] relative">
            {/* Map Frame Container */}
            <div className="relative flex-1 w-full h-full min-h-[380px]">
              {!mapError ? (
                <iframe
                  title="Dr. Preethi's Dentistry Google Maps Location in Saibaba Colony, Coimbatore"
                  src={clinicInfo.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full absolute inset-0"
                  onError={() => setMapError(true)}
                />
              ) : (
                /* Fallback Location Card */
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#F7F8F5] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#C7DDB0]/40 flex items-center justify-center text-[#5C7651]">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-[#252724]">
                    Interactive Map Offline
                  </h4>
                  <p className="text-xs sm:text-sm text-[#858780] max-w-sm">
                    {clinicInfo.name} is located at {clinicInfo.fullAddress}. Click below to navigate directly on Google Maps.
                  </p>
                  <a
                    href={clinicInfo.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5C7651] text-white text-xs font-semibold hover:bg-[#496041] transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              )}

              {/* Floating Small Clinic Image Overlay in Map Corner */}
              <div className="absolute top-4 left-4 z-10 hidden sm:flex items-center gap-3 p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E9E5] shadow-card max-w-[260px]">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src="/Clinic7.png"
                    alt="Dr. Preethi's Dentistry treatment suite in Saibaba Colony"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-[#252724]">Saibaba Colony</p>
                  <p className="text-[10px] text-[#858780]">Coimbatore, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Bottom Location Bar */}
            <div className="p-4 bg-white border-t border-[#E8E9E5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#858780]">
                Saibaba Colony, Coimbatore · On-street and nearby parking available
              </span>

              <a
                href={clinicInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#5C7651] hover:underline shrink-0"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
