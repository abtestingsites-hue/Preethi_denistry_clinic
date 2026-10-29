import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { clinicInfo, agencyCredit } from "@/data/clinicInfo";

export const metadata = {
  title: "Terms of Use | Dr. Preethi’s Dentistry",
  description: "Terms of website use and clinical disclaimer for Dr. Preethi’s Dentistry in Saibaba Colony, Coimbatore.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-[#252724] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5C7651] hover:text-[#252724] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>

        {/* Header */}
        <div className="space-y-3 border-b border-[#E8E9E5] pb-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#5C7651]">
            <FileText className="w-4 h-4 text-[#5C7651]" />
            <span>TERMS OF SERVICE & CLINICAL DISCLAIMER</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#252724] tracking-tight">
            Terms of Use
          </h1>
          <p className="text-sm text-[#858780]">
            Effective Date: October 2026 · {clinicInfo.name}, Saibaba Colony, Coimbatore
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm sm:text-base text-[#252724] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#252724]">
              1. Acceptance of Terms
            </h2>
            <p className="text-[#858780]">
              By accessing and using this website, you agree to comply with and be bound by these Terms of Use. If you do not agree with any portion of these terms, please refrain from using this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#252724]">
              2. Medical & Dental Information Disclaimer
            </h2>
            <p className="text-[#858780]">
              All content on this website—including treatment overviews, Invisalign® descriptions, diagrams, and oral health guidelines—is provided for informational and educational purposes only. It is not intended to be a substitute for professional clinical advice, formal diagnosis, or individualized treatment.
            </p>
            <div className="p-4 rounded-2xl bg-[#C7DDB0]/25 border border-[#A9C49A]/50 text-xs sm:text-sm text-[#252724]">
              Always seek the advice of a qualified dental professional regarding any medical condition or orthodontic alignment goals.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#252724]">
              3. Appointment Requests vs. Formal Bookings
            </h2>
            <p className="text-[#858780]">
              Submitting an appointment consultation request through this website does not constitute a guaranteed or finalized clinical appointment. All appointment times are subject to calendar availability and must be confirmed directly with our reception team via telephone or WhatsApp.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#252724]">
              4. Intellectual Property
            </h2>
            <p className="text-[#858780]">
              All brand assets, photography, architectural images, written copy, and visual trademarks appearing on this website belong to {clinicInfo.name} or their respective trademark holders (including Invisalign®). Unauthorized copying, distribution, or alteration is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#252724]">
              5. Governing Law & Jurisdiction
            </h2>
            <p className="text-[#858780]">
              These terms are governed by the laws of India. Any disputes arising in connection with the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Coimbatore, Tamil Nadu.
            </p>
          </section>
        </div>

        {/* Footer Credit */}
        <div className="pt-8 border-t border-[#E8E9E5] text-xs text-[#858780] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 {clinicInfo.name}. All rights reserved.</p>
          <p>Development Partner: {agencyCredit.name} ({agencyCredit.cin})</p>
        </div>
      </div>
    </main>
  );
}
