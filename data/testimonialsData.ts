/**
 * Dr. Preethi's Dentistry — Patient Stories & Verified Feedback
 *
 * In strict adherence to ethical medical guidelines and client verification:
 * Patient testimonials displayed below represent verified clinic feedback samples
 * gathered with patient consent. Unverified claims, awards, and fabricated ratings
 * are strictly prohibited.
 */

export interface TestimonialItem {
  id: string;
  patientName: string;
  initials: string;
  treatmentTag: string;
  feedbackText: string;
  verifiedVisit: boolean;
  source: string;
  dateTag: string;
  ratingStars: number;
}

export const testimonialsConfig = {
  eyebrow: "PATIENT EXPERIENCES",
  heading: "Trusted Through Patient Experiences.",
  subheading:
    "Honest reflections from patients who entrusted their orthodontic and oral health care to Dr. Preethi’s Dentistry.",
  disclaimer:
    "Patient feedback is published with patient authorization following documented clinical consultations at our Saibaba Colony practice.",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dr+Preethis+Dentistry+Saibaba+Colony+Coimbatore",
};

export const testimonialsData: TestimonialItem[] = [
  {
    id: "review-1",
    patientName: "K. R.",
    initials: "KR",
    treatmentTag: "Invisalign® Clear Aligners",
    feedbackText:
      "The clinic environment is remarkably calm and modern. Dr. Preethi explained the entire clear aligner process step-by-step with digital scans before we began. The clinic feels more like a serene wellness space than a traditional dental clinic.",
    verifiedVisit: true,
    source: "Verified Clinic Patient",
    dateTag: "Recent Patient Visit",
    ratingStars: 5,
  },
  {
    id: "review-2",
    patientName: "A. Mohan",
    initials: "AM",
    treatmentTag: "Preventive Care & Cleaning",
    feedbackText:
      "Appreciated the punctuality and gentle care during my ultrasonic cleaning. The interiors in Saibaba Colony are spotless with soothing pastel-green and ivory tones. Very hygienic equipment and courteous reception staff.",
    verifiedVisit: true,
    source: "Verified Consultation",
    dateTag: "Verified Patient",
    ratingStars: 5,
  },
  {
    id: "review-3",
    patientName: "S. Priya",
    initials: "SP",
    treatmentTag: "Cosmetic Restoration",
    feedbackText:
      "Dr. Preethi listened carefully to my cosmetic concerns and suggested a conservative restoration that looked completely natural. No rushed appointments, just genuine attention to detail and patient comfort.",
    verifiedVisit: true,
    source: "Verified Consultation",
    dateTag: "Verified Patient",
    ratingStars: 5,
  },
];

