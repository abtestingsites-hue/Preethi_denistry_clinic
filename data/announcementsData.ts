/**
 * Dr. Preethi's Dentistry — Scrolling Promotional Announcements
 *
 * NOTE FOR CLINIC ADMINISTRATORS:
 * All announcement items below are verified and clinic-approved.
 * In accordance with ethical medical regulations, no unverified discounts,
 * time-limited deals, or free claims are permitted.
 */

export interface AnnouncementItem {
  id: string;
  badge?: string;
  text: string;
  highlight?: string;
  ctaText?: string;
  ctaAction?: "book" | "invisalign" | "contact";
}

export const clinicAnnouncements: AnnouncementItem[] = [
  {
    id: "announcement-invisalign",
    badge: "Invisalign® Focus",
    text: "Invisalign® Clear Aligner Consultations at Dr. Preethi’s Dentistry",
    highlight: "Saibaba Colony, Coimbatore",
    ctaText: "Book Online",
    ctaAction: "book",
  },
  {
    id: "announcement-care",
    badge: "Thoughtful Dentistry",
    text: "Personalized Oral Care & Gentle Aesthetic Consultations",
    highlight: "Unhurried 1-on-1 Appointments",
    ctaText: "Request Appointment",
    ctaAction: "book",
  },
  {
    id: "announcement-facility",
    badge: "Clinic Spaces",
    text: "Modern Ergonomic Operatories & Digital 3D Smile Planning",
    highlight: "Saibaba Colony Practice",
    ctaText: "Discover Spaces",
    ctaAction: "invisalign",
  },
  {
    id: "announcement-booking",
    badge: "Appointments",
    text: "Priority Scheduling for Orthodontic & Smile Design Consultations",
    highlight: "Mon – Sat · 09:30 AM to 08:00 PM",
    ctaText: "Book Online",
    ctaAction: "book",
  },
];
