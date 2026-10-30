/**
 * Dr. Preethi's Dentistry — Central Configuration & Verified Clinic Details
 *
 * All clinic contact details, hours, and addresses below can be updated here.
 * Fields marked with `verified: false` indicate details awaiting clinic confirmation
 * before live production deployment.
 */

export interface ClinicHours {
  day: string;
  hours: string;
  isClosed?: boolean;
}

export interface ClinicContactInfo {
  name: string;
  tagline: string;
  leadDentist: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  fullAddress: string;
  addressVerified: boolean;
  phoneDisplay: string;
  phoneRaw: string;
  phoneVerified: boolean;
  emergencyPhoneDisplay: string;
  emergencyPhoneRaw: string;
  email: string;
  emailVerified: boolean;
  openingHours: ClinicHours[];
  hoursVerified: boolean;
  googleMapsQuery: string;
  googleMapsDirectionsUrl: string;
  googleMapsEmbedUrl: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
  invisalignProvider: {
    featured: boolean;
    label: string;
    description: string;
  };
}

export const clinicInfo: ClinicContactInfo = {
  name: "Dr. Preethi’s Dentistry",
  tagline: "Thoughtful, modern dental care in a welcoming environment.",
  leadDentist: "Dr. Preethi",
  locality: "Saibaba Colony",
  city: "Coimbatore",
  state: "Tamil Nadu",
  pincode: "641011",
  fullAddress: "Saibaba Colony, Coimbatore, Tamil Nadu 641011",
  addressVerified: true, // Saibaba Colony, Coimbatore is verified; street line pending confirmation
  phoneDisplay: "+91 94420 12345",
  phoneRaw: "+919442012345",
  phoneVerified: false, // Update with confirmed reception line
  emergencyPhoneDisplay: "+91 94420 12346",
  emergencyPhoneRaw: "+919442012346",
  email: "reception@drpreethidentistry.com",
  emailVerified: false, // Update with confirmed domain email
  openingHours: [
    { day: "Monday – Friday", hours: "09:30 AM – 08:00 PM" },
    { day: "Saturday", hours: "09:30 AM – 06:30 PM" },
    { day: "Sunday", hours: "By Prior Appointment Only", isClosed: false },
  ],
  hoursVerified: false, // Indicative hours, client confirmation in onboarding checklist
  googleMapsQuery: "Dr.+Preethi's+Dentistry+Saibaba+Colony+Coimbatore",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Saibaba+Colony+Coimbatore+Tamil+Nadu",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.838339178082!2d76.9388307!3d11.0232454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85888e2c079db%3A0xb36b5ec63259ce36!2sSaibaba%20Colony%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  socialLinks: {
    whatsapp: "https://wa.me/919442012345?text=Hello%20Dr.%20Preethi's%20Dentistry,%20I%20would%20like%20to%20enquire%20about%20an%20appointment",
  },
  invisalignProvider: {
    featured: true,
    label: "Invisalign® Clear Aligners",
    description: "Modern orthodontic alignment with discreet, removable clear aligners.",
  },
};

