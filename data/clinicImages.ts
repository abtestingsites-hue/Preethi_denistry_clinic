/**
 * Dr. Preethi's Dentistry — Gallery & Clinic Space Assets Registry
 *
 * The photography references match the actual clinic spaces:
 * 1. Reception & Waiting Area: Warm off-white/ivory walls, grey upholstered seating, architectural lighting
 * 2. Invisalign Experience: Clear aligner display, digital scans, discreet orthodontic branding
 * 3. Treatment Operatories & Dental Chair: State-of-the-art ergonomic dental chairs and lighting
 * 4. Equipment & Sterilization: Precision ultrasonic equipment, hospital-grade hygiene
 * 5. Clinic Interiors & Architecture: Subtle green trims, glass partitions, private consultation suites
 */

export type GalleryCategory =
  | "all"
  | "reception"
  | "waiting"
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
  { id: "reception" as GalleryCategory, label: "Reception" },
  { id: "waiting" as GalleryCategory, label: "Waiting Area" },
  { id: "treatment" as GalleryCategory, label: "Treatment Rooms" },
  { id: "equipment" as GalleryCategory, label: "Dental Equipment" },
  { id: "invisalign" as GalleryCategory, label: "Invisalign Experience" },
  { id: "interiors" as GalleryCategory, label: "Clinic Interiors" },
];

export const clinicGalleryImages: ClinicImageItem[] = [
  {
    id: "reception-lounge",
    category: "reception",
    categoryLabel: "Reception",
    title: "Welcoming Reception & Arrival Lounge",
    description:
      "Warm ivory architectural walls, comfortable seating, and soft ambient lighting designed to put patients at ease the moment they arrive in Saibaba Colony.",
    expectedFilename: "01_reception_lounge_dr_preethi.webp",
    assetPath: "/images/clinic/reception-lounge.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    width: 1200,
    height: 800,
    featured: true,
  },
  {
    id: "invisalign-branding",
    category: "invisalign",
    categoryLabel: "Invisalign Experience",
    title: "Dedicated Invisalign® Consultation Suite",
    description:
      "Modern digital consultation zone equipped for smile visualization, clear aligner demonstration, and personalized orthodontic roadmapping.",
    expectedFilename: "03_invisalign_consultation_corner.webp",
    assetPath: "/images/clinic/invisalign-branding.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=85",
    width: 1200,
    height: 900,
    featured: true,
  },
  {
    id: "treatment-suite-1",
    category: "treatment",
    categoryLabel: "Treatment Rooms",
    title: "Primary Clinical Operatory & Ergonomic Dental Chair",
    description:
      "Precision treatment operatory featuring an advanced contoured dental chair, shadowless surgical lighting, and an uncluttered sterile layout.",
    expectedFilename: "02_dental_operatory_chair_primary.webp",
    assetPath: "/images/clinic/dental-operatory-chair.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
    width: 1200,
    height: 800,
    featured: false,
  },
  {
    id: "waiting-area-comfort",
    category: "waiting",
    categoryLabel: "Waiting Area",
    title: "Serene Waiting Lounge & Patient Comfort",
    description:
      "A quiet, unhurried space tailored with plush grey upholstery, natural greenery accents, and filtered natural illumination.",
    expectedFilename: "04_waiting_lounge_comfort.webp",
    assetPath: "/images/clinic/waiting-lounge.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
    width: 1200,
    height: 800,
    featured: false,
  },
  {
    id: "precision-equipment",
    category: "equipment",
    categoryLabel: "Dental Equipment",
    title: "High-Precision Hygiene & Ultrasonic Scaling Units",
    description:
      "Advanced micro-ultrasonic scalers and sterile clinical instruments adhering to rigorous infection-control protocols.",
    expectedFilename: "05_precision_hygiene_equipment.webp",
    assetPath: "/images/clinic/hygiene-sterilization.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=85",
    width: 1200,
    height: 800,
    featured: false,
  },
  {
    id: "consultation-suite-interior",
    category: "interiors",
    categoryLabel: "Clinic Interiors",
    title: "Private Diagnostic & Consultation Desk",
    description:
      "Glass-partitioned private space for transparent treatment plan reviews, patient questions, and personalized dental education.",
    expectedFilename: "06_private_consultation_desk.webp",
    assetPath: "/images/clinic/consultation-suite.webp",
    fallbackUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    width: 1200,
    height: 800,
    featured: false,
  },
];

