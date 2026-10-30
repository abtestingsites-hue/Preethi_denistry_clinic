/**
 * Dr. Preethi's Dentistry — Clinician Profile Registry
 *
 * In strict compliance with professional dental ethics and verified credentials:
 * Details below reflect Dr. Preethi's verified qualifications, clinical focus,
 * and practice leadership at the Saibaba Colony, Coimbatore clinic.
 */

export interface DentistProfile {
  id: string;
  name: string;
  designation: string;
  qualifications: string;
  experienceYears: string;
  treatmentFocus: string[];
  bio: string;
  extendedBio: string;
  clinicalPhilosophy: string;
  portraitUrl: string;
  portraitAlt: string;
  clinicRole: string;
  location: string;
  consultationDays: string;
}

export const leadDentist: DentistProfile = {
  id: "dr-preethi",
  name: "Dr. Preethi",
  designation: "Chief Dental Surgeon & Clear Aligner Consultant",
  qualifications: "BDS · Clinical Focus in Orthodontics & Aesthetic Dentistry",
  experienceYears: "10+ Years Clinical Expertise",
  treatmentFocus: [
    "Invisalign® Clear Aligners",
    "Digital Smile Architecture",
    "Preventive & Biomimetic Dentistry",
    "Conservative Cosmetic Restorations",
  ],
  bio: "Dr. Preethi leads our Saibaba Colony practice with a philosophy founded on unhurried, patient-centered dentistry. She combines digital 3D bite planning with gentle, attentive clinical care to deliver predictable orthodontic and aesthetic smile transformations.",
  extendedBio: "With over a decade of clinical experience in comprehensive dentistry, Dr. Preethi has focused her clinical practice on modern clear aligner therapy and minimally invasive smile enhancements. Rather than rushing patients through back-to-back appointments, she dedicates generous one-on-one time to listen to aesthetic concerns, explain digital scan diagnostics, and construct conservative treatment pathways tailored to each individual.",
  clinicalPhilosophy: "Exceptional dentistry begins with clear listening. Our goal is to create a serene, supportive environment where every patient fully understands their treatment choices and feels genuinely comfortable throughout their smile journey.",
  portraitUrl: "/Doctor.png",
  portraitAlt: "Dr. Preethi — Chief Dental Surgeon at Dr. Preethi's Dentistry in Saibaba Colony, Coimbatore",
  clinicRole: "Clinical Director & Lead Practitioner",
  location: "Saibaba Colony, Coimbatore",
  consultationDays: "Monday through Saturday · By Appointment",
};

