/**
 * Dr. Preethi's Dentistry — Gallery & Clinic Space Assets Registry
 *
 * Authentic clinic photographs from Saibaba Colony, Coimbatore practice:
 * - Clinic.png: Reception & Arrival Lounge (custom green branding, comfortable seating)
 * - Clinic2.png: Main Corridor & Clinic Wayfinding (glass partitions, clean architectural lines)
 * - Clinic3.png: Primary Operatory & Ergonomic Dental Chair
 * - Clinic4.png: Clinical Operatory with Shadowless Lighting & Advanced Units
 * - Clinic5.png: Natural Light Treatment Room
 * - Clinic6.png: Sterile Operatory & Precision Workstation
 * - Clinic7.png: Signature Treatment Operatory with Circular Ambient Lighting Ring
 */

export type GalleryCategory =
  | "all"
  | "reception"
  | "treatment"
  | "equipment"
  | "invisalign"
  | "interiors";

export interface ClinicImageItem {
  id: string;
  category: GalleryCategory;
  categoryLabel: string;
  title: string;
  description: string;
  expectedFilename: string;
  assetPath: string;
  fallbackUrl: string;
  width: number;
  height: number;
  featured?: boolean;
}

export const clinicGalleryCategories = [
  { id: "all" as GalleryCategory, label: "All Spaces" },
  { id: "reception" as GalleryCategory, label: "Reception Lounge" },
  { id: "treatment" as GalleryCategory, label: "Treatment Suites" },
  { id: "equipment" as GalleryCategory, label: "Clinical Equipment" },
  { id: "invisalign" as GalleryCategory, label: "Invisalign® Suite" },
  { id: "interiors" as GalleryCategory, label: "Clinic Architecture" },
];

export const clinicGalleryImages: ClinicImageItem[] = [
  {
    id: "clinic-reception",
    category: "reception",
    categoryLabel: "Reception Lounge",
    title: "Welcoming Reception & Arrival Lounge",
    description:
      "Warm off-white walls, comfortable patient seating, and signature pistachio-green branding designed to create an unhurried, calming arrival in Saibaba Colony.",
    expectedFilename: "Clinic.png",
    assetPath: "/Clinic.png",
    fallbackUrl: "/Clinic.png",
    width: 838,
    height: 630,
    featured: true,
  },
  {
    id: "clinic-operatory-signature",
    category: "invisalign",
    categoryLabel: "Invisalign® Suite",
    title: "Signature Treatment Suite & Circular Ambient Lighting",
    description:
      "Contemporary dental operatory featuring an architectural circular LED ceiling halo, custom sage cabinetry, and ergonomic dental seating for clear-aligner consultations.",
    expectedFilename: "Clinic7.png",
    assetPath: "/Clinic7.png",
    fallbackUrl: "/Clinic7.png",
    width: 840,
    height: 602,
    featured: true,
  },
  {
    id: "clinic-corridor",
    category: "interiors",
    categoryLabel: "Clinic Architecture",
    title: "Practice Corridor & Architectural Wayfinding",
    description:
      "Clean architectural corridor with discreet glass entrance, wall signage, and serene lighting leading to private consultation suites.",
    expectedFilename: "Clinic2.png",
    assetPath: "/Clinic2.png",
    fallbackUrl: "/Clinic2.png",
    width: 475,
    height: 635,
    featured: false,
  },
  {
    id: "clinic-treatment-suite",
    category: "treatment",
    categoryLabel: "Treatment Suites",
    title: "Primary Clinical Operatory & Digital Screen",
    description:
      "State-of-the-art treatment room with contoured ergonomic chair, patient-facing diagnostic screen, and hygienic cabinetry layout.",
    expectedFilename: "Clinic3.png",
    assetPath: "/Clinic3.png",
    fallbackUrl: "/Clinic3.png",
    width: 478,
    height: 630,
    featured: false,
  },
  {
    id: "clinic-equipment-view",
    category: "equipment",
    categoryLabel: "Clinical Equipment",
    title: "Precision Dental Delivery Unit & Shadowless Lamp",
    description:
      "Advanced dental delivery console, surgical illumination arm, and sterile instrument tray engineered for gentle, precise dental care.",
    expectedFilename: "Clinic4.png",
    assetPath: "/Clinic4.png",
    fallbackUrl: "/Clinic4.png",
    width: 477,
    height: 636,
    featured: false,
  },
  {
    id: "clinic-window-operatory",
    category: "treatment",
    categoryLabel: "Treatment Suites",
    title: "Operatory with Filtered Natural Illumination",
    description:
      "Comfortable treatment setting with natural daylight, privacy blinds, and tranquil surroundings for restorative and cosmetic appointments.",
    expectedFilename: "Clinic5.png",
    assetPath: "/Clinic5.png",
    fallbackUrl: "/Clinic5.png",
    width: 486,
    height: 635,
    featured: false,
  },
  {
    id: "clinic-sterile-station",
    category: "equipment",
    categoryLabel: "Clinical Equipment",
    title: "Sterile Operatory & Custom Cabinetry",
    description:
      "Hygienic workspace with custom green cabinetry, ultrasonic sterilization protocols, and overhead LED focus for detailed clinical procedures.",
    expectedFilename: "Clinic6.png",
    assetPath: "/Clinic6.png",
    fallbackUrl: "/Clinic6.png",
    width: 476,
    height: 642,
    featured: false,
  },
];
