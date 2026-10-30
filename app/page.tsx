"use client";

import React, { useState } from "react";
import { AnnouncementMarquee } from "@/components/layout/AnnouncementMarquee";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { CinematicAlignerStory } from "@/components/sections/CinematicAlignerStory";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { ClinicAbout } from "@/components/sections/ClinicAbout";
import { TreatmentPortfolio } from "@/components/sections/TreatmentPortfolio";
import { InvisalignFeature } from "@/components/sections/InvisalignFeature";
import { ClinicGallery } from "@/components/sections/ClinicGallery";
import { MeetTheDentist } from "@/components/sections/MeetTheDentist";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ContactMap } from "@/components/sections/ContactMap";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BackToTop } from "@/components/ui/BackToTop";
import { FloatingContactBar } from "@/components/ui/FloatingContactBar";
import { AppointmentModal } from "@/components/booking/AppointmentModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  /**
   * Version 4 Requirement:
   * Every "Book Online", "Book Appointment", and "Enquire About Invisalign" CTA
   * must open the consistent, reusable booking modal.
   */
  const handleOpenBooking = (treatmentTitle?: string) => {
    setSelectedTreatment(treatmentTitle);
    setIsModalOpen(true);
  };

  const handleExploreInvisalign = () => {
    scrollToSection("invisalign");
  };

  const handleExploreClinic = () => {
    scrollToSection("gallery");
  };

  const handleContactClinic = () => {
    scrollToSection("contact");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF7]">
      {/* SECTION 01 — ANNOUNCEMENT MARQUEE (Above main navigation) */}
      <AnnouncementMarquee onBookClick={() => handleOpenBooking()} />

      {/* SECTION 02 — PREMIUM NAVIGATION */}
      <SiteHeader onBookAppointmentClick={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* SECTION 03 — EDITORIAL HERO */}
        <EditorialHero
          onBookAppointment={() => handleOpenBooking()}
          onExploreInvisalign={handleExploreInvisalign}
          onExploreClinic={handleExploreClinic}
        />

        {/* SECTION 04 (V5 HERO EXTENSION) — CINEMATIC SCROLL-DRIVEN ALIGNER STORY */}
        <CinematicAlignerStory
          onBookAppointment={() =>
            handleOpenBooking("Invisalign® & Clear Aligners")
          }
        />

        {/* SECTION 05 — CLINIC TRUST METRICS */}
        <TrustMetrics />

        {/* SECTION 05 — ABOUT THE CLINIC */}
        <ClinicAbout
          onDiscoverClinic={handleExploreClinic}
          onBookAppointment={() => handleOpenBooking()}
          onExploreInvisalign={handleExploreInvisalign}
        />

        {/* SECTION 06 — DENTAL SERVICES */}
        <TreatmentPortfolio
          onBookTreatment={(title) => handleOpenBooking(title)}
        />

        {/* SECTION 07 — SIGNATURE INVISALIGN EXPERIENCE */}
        <InvisalignFeature
          onEnquireInvisalign={() =>
            handleOpenBooking("Invisalign® & Clear Aligners")
          }
        />

        {/* SECTION 08 — DEDICATED CLINIC GALLERY */}
        <ClinicGallery />

        {/* SECTION 09 — MEET THE DENTIST */}
        <MeetTheDentist
          onBookAppointment={() => handleOpenBooking("Consultation with Dr. Preethi")}
        />

        {/* SECTION 10 — PATIENT TESTIMONIALS AND REVIEW COUNTS */}
        <TestimonialsSection />

        {/* SECTION 11 — BLOGS AND DENTAL EDUCATION */}
        <BlogSection
          onBookAppointment={() => handleOpenBooking()}
        />

        {/* SECTION 12 — FAQ SECTION */}
        <FAQAccordion
          onBookAppointment={() => handleOpenBooking()}
        />

        {/* SECTION 14 — CONTACT AND EMBEDDED MAP */}
        <ContactMap
          onBookAppointment={() => handleOpenBooking()}
        />

        {/* SECTION 15 — FINAL CTA WITH SCROLLING BANNER */}
        <FinalCTA
          onBookAppointment={() => handleOpenBooking()}
          onContactClinic={handleContactClinic}
        />
      </main>

      {/* SECTION 15 — SITE FOOTER */}
      <SiteFooter />

      {/* Persistent Controls & Floating Actions */}
      <BackToTop />
      <FloatingContactBar onOpenBookingModal={() => handleOpenBooking()} />

      {/* SECTION 13 — ONLINE APPOINTMENT BOOKING MODAL */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTreatmentId={selectedTreatment}
      />
    </div>
  );
}
