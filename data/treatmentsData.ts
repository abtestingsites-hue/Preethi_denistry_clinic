export interface Treatment {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  badge?: string;
  featured?: boolean;
  benefits: string[];
  whatToExpect: string[];
  idealFor: string;
  image: string;
  imageAlt: string;
  accentIcon: "aligner" | "tooth" | "sparkle" | "shield" | "crown" | "smile";
}

export const treatmentsData: Treatment[] = [
  {
    id: "invisalign",
    slug: "invisalign-clear-aligners",
    title: "Invisalign® & Clear Aligners",
    badge: "Orthodontic Signature",
    featured: true,
    shortDescription:
      "A discreet, comfortable orthodontic system using custom clear aligners to gently straighten your smile without brackets or metal wires.",
    fullDescription:
      "Modern orthodontic alignment designed for adult and teenage lifestyles. Clear aligners gently guide your teeth into optimal alignment without metal brackets or wires, allowing effortless brushing, flossing, and dining throughout treatment. Every aligner set is custom-fabricated from digital 3D scans.",
    benefits: [
      "Virtually invisible transparent biocompatible material",
      "Removable for dining, brushing, flossing, and social events",
      "Predictable digital 3D treatment plan preview",
      "Gentle, calibrated tooth movement with minimal discomfort",
    ],
    whatToExpect: [
      "Digital oral scan and consultation to map out tooth movement",
      "Custom aligner tray fabrication and precision fitting",
      "Progress reviews every 4–6 weeks at our Saibaba Colony clinic",
      "Custom retainer plan to preserve your straight smile for life",
    ],
    idealFor:
      "Patients seeking orthodontic alignment with minimal aesthetic disruption to professional or social life.",
    image: "/aligner-presentation.png",
    imageAlt: "Invisalign clear aligner presentation at Dr. Preethi's Dentistry",
    accentIcon: "aligner",
  },
  {
    id: "general-dentistry",
    slug: "general-dentistry",
    title: "General Dentistry",
    shortDescription:
      "Routine oral examinations, gentle fillings, gum evaluations, and essential care to preserve lifelong dental health.",
    fullDescription:
      "Comprehensive diagnostic and therapeutic oral care tailored to your baseline health. We focus on early detection, painless cavity treatment, conservative tooth restoration, and personalized hygiene planning in a calm, modern environment.",
    benefits: [
      "Early cavity and decay detection using digital diagnostics",
      "High-durability tooth-colored composite restorations",
      "Comprehensive periodontal gum evaluations",
      "Gentle, stress-free clinical approach with unhurried visits",
    ],
    whatToExpect: [
      "Visual and digital radiographic assessment",
      "Thorough review of any tooth sensitivity or discomfort",
      "Clear explanation of findings before any procedure begins",
      "Personalized preventive routine recommendations",
    ],
    idealFor:
      "Individuals and families seeking routine check-ups, filling replacements, or comprehensive oral examinations.",
    image: "/Clinic3.png",
    imageAlt: "Primary clinical operatory and ergonomic dental chair at Dr. Preethi's Dentistry",
    accentIcon: "tooth",
  },
  {
    id: "cosmetic-dentistry",
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortDescription:
      "Refined aesthetic enhancements including conservative ceramic veneers, tooth contouring, and in-clinic brightening.",
    fullDescription:
      "Aesthetic dentistry that balances facial harmony, tooth proportion, and natural tooth shade. We emphasize biomimetic, conservative enhancements that look seamlessly authentic in natural daylight without artificial over-whiteness.",
    benefits: [
      "Safe, in-office and take-home whitening protocols",
      "Ultra-thin porcelain veneers for chipped or discolored teeth",
      "Enamel contouring for balanced dental symmetry",
      "Shade-matching that mirrors natural tooth translucency",
    ],
    whatToExpect: [
      "Facial proportion and smile analysis",
      "Digital mockup or shade guide comparison",
      "Gentle surface preparation when indicated",
      "Polished, lifelike finishing and care instructions",
    ],
    idealFor:
      "Patients who wish to brighten, balance, or repair minor aesthetic imperfections in their smile.",
    image: "/Clinic7.png",
    imageAlt: "Dr. Preethi's Dentistry signature cosmetic consultation suite with circular halo lighting",
    accentIcon: "sparkle",
  },
  {
    id: "preventive-care",
    slug: "preventive-dental-care",
    title: "Preventive Dental Care",
    shortDescription:
      "Professional ultrasonic scaling, deep plaque removal, protective fluoride applications, and dental sealants.",
    fullDescription:
      "Proactive dentistry focused on keeping teeth and gums healthy and disease-free. Regular professional cleanings eliminate stubborn calculus and tartar that regular brushing cannot reach, protecting against gum recession and bad breath.",
    benefits: [
      "Ultrasonic tartar and plaque removal with gentle irrigation",
      "Enamel-strengthening remineralization treatments",
      "Protection against gingivitis and periodontal issues",
      "Fresh breath and smooth, clean tooth surfaces",
    ],
    whatToExpect: [
      "Gentle plaque and calculus removal",
      "Polishing with micro-abrasive prophylactic paste",
      "Targeted fluoride or remineralizing application",
      "Tailored advice on flossing and brushing ergonomics",
    ],
    idealFor:
      "Every adult and adolescent looking to maintain fresh breath, healthy gums, and cavity prevention.",
    image: "/Clinic4.png",
    imageAlt: "Clinical operatory with shadowless surgical illumination and precision dental delivery unit",
    accentIcon: "shield",
  },
  {
    id: "restorative-dentistry",
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    shortDescription:
      "Custom ceramic crowns, durable bridges, and precision inlays to rebuild damaged teeth and restore full chewing comfort.",
    fullDescription:
      "Functional tooth rehabilitation that preserves as much natural tooth structure as possible. We use high-strength ceramics and biocompatible materials that restore strength, durability, and natural bite dynamics.",
    benefits: [
      "Custom zirconia and all-ceramic crowns",
      "Tooth-preserving inlays and onlays",
      "Fixed dental bridges for missing teeth",
      "Restoration of comfortable, balanced bite force",
    ],
    whatToExpect: [
      "Assessment of structural tooth integrity and digital imaging",
      "Precision digital or physical impression",
      "Durable temporary protection during lab fabrication",
      "Bonding and fine bite adjustment for complete comfort",
    ],
    idealFor:
      "Patients with broken, fractured, heavily filled, or missing teeth seeking lasting functional restoration.",
    image: "/Clinic5.png",
    imageAlt: "Treatment suite with filtered natural daylight for restorative dental care",
    accentIcon: "crown",
  },
  {
    id: "smile-makeovers",
    slug: "smile-makeovers",
    title: "Smile Makeovers",
    badge: "Comprehensive Design",
    featured: true,
    shortDescription:
      "Multi-disciplinary aesthetic rehabilitation designed to harmonize tooth alignment, proportion, color, and function.",
    fullDescription:
      "A customized combination of aesthetic treatments planned holistically. Whether integrating clear aligners, restorative crowns, and gentle whitening, each plan is crafted to achieve a confident, radiant, and biologically sound smile.",
    benefits: [
      "Holistic treatment plan tailored to your facial aesthetics",
      "Coordinated sequence of cosmetic and restorative steps",
      "Digital mock-up to preview planned changes",
      "Long-term structural and bite stability",
    ],
    whatToExpect: [
      "Detailed photographic and smile mapping",
      "Comprehensive discussion of aesthetic goals and timelines",
      "Step-by-step phased treatment journey",
      "Long-term maintenance and smile care guidance",
    ],
    idealFor:
      "Patients seeking an all-inclusive transformation addressing wear, discoloration, and mild misalignment.",
    image: "/Clinic6.png",
    imageAlt: "Sterile operatory and custom cabinetry at Dr. Preethi's Dentistry in Saibaba Colony",
    accentIcon: "smile",
  },
];

