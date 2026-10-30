import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Sparkles } from "lucide-react";
import { clinicInfo } from "@/data/clinicInfo";

export const metadata = {
  title: "Privacy Policy | Dr. Preethi’s Dentistry",
  description: "Privacy Policy and patient data handling practices for Dr. Preethi’s Dentistry in Saibaba Colony, Coimbatore.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-[#252724] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6a774b] hover:text-[#252724] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>

        {/* Header */}
        <div className="space-y-3 border-b border-[#E8E9E5] pb-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#6a774b]">
            <Shield className="w-4 h-4 text-[#6a774b]" />
            <span>PATIENT PRIVACY & CONFIDENTIALITY</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#252724] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#858780]">
            Last Updated: October 2026 · {clinicInfo.name}, Saibaba Colony, Coimbatore
          </p>
        </div>

        {/* Legal Text Content */}
        <div className="space-y-8 text-sm sm:text-base text-[#252724] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#252724]">
              1. Our Clinical Privacy Commitment
            </h2>
            <p className="text-[#858780]">
              {clinicInfo.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the Clinic&rdquo;) respects your personal and healthcare privacy. This Privacy Policy details how we collect, handle, and safeguard the personal contact details and preliminary clinical preferences submitted through our website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#252724]">
              2. Information We Collect
            </h2>
            <p className="text-[#858780]">
              When you submit an appointment consultation enquiry through this website, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#858780]">
              <li>Your full name.</li>
              <li>Your Indian mobile contact number for telephone or WhatsApp communication.</li>
              <li>Your email address (if optionally provided).</li>
              <li>Your preferred treatment or orthodontic interest (e.g., Invisalign® Clear Aligners).</li>
              <li>Preferred appointment dates and time windows.</li>
              <li>Any optional preliminary clinical notes or questions you choose to share.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#252724]">
              3. Purpose of Processing
            </h2>
            <p className="text-[#858780]">
              Information provided is used strictly to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#858780]">
              <li>Contact you to schedule, confirm, or modify your in-person clinic consultation.</li>
              <li>Answer preliminary questions regarding clinic location, facilities, or treatments.</li>
              <li>Provide pre-consultation guidelines relevant to your appointment.</li>
            </ul>
            <p className="text-[#858780] font-medium pt-1">
              We never sell, rent, or trade your personal or health contact details to third-party marketing entities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#252724]">
              4. Data Retention & Security
            </h2>
            <p className="text-[#858780]">
              We employ strict industry-standard administrative and electronic safeguards to protect contact details against unauthorized access, loss, or disclosure. Inquiries that do not proceed to a clinic consultation are periodically archived and purged.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#252724]">
              5. Contact Regarding Your Data
            </h2>
            <p className="text-[#858780]">
              If you have any questions about this Privacy Policy or wish to have your submitted contact records updated or deleted, please contact our reception team at:
            </p>
            <div className="p-4 rounded-2xl bg-[#F7F7F5] border border-[#E8E9E5] space-y-1 text-xs sm:text-sm">
              <p className="font-semibold text-[#252724]">{clinicInfo.name}</p>
              <p className="text-[#858780]">{clinicInfo.fullAddress}</p>
              <p className="text-[#858780]">Telephone: {clinicInfo.phoneDisplay}</p>
              <p className="text-[#858780]">Email: {clinicInfo.email}</p>
            </div>
          </section>
        </div>

        {/* Footer Credit */}
        <div className="pt-8 border-t border-[#E8E9E5] text-xs text-[#858780] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 {clinicInfo.name}. All rights reserved. Saibaba Colony, Coimbatore.</p>
        </div>
      </div>
    </main>
  );
}
