import type { Metadata, Viewport } from "next";
import "./globals.css";
import { clinicInfo } from "@/data/clinicInfo";

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://drpreethidentistry.com"),
  title: {
    default: "Dr. Preethi’s Dentistry | Premium Dental Care · Saibaba Colony, Coimbatore",
    template: "%s | Dr. Preethi’s Dentistry",
  },
  description:
    "Experience thoughtful, modern dentistry and Invisalign® clear aligner consultations in Saibaba Colony, Coimbatore. Luxury minimalism, unhurried patient care, and advanced oral aesthetics.",
  keywords: [
    "Dr Preethi Dentistry",
    "Dentist Saibaba Colony",
    "Dental Clinic Coimbatore",
    "Invisalign Coimbatore",
    "Clear Aligners Saibaba Colony",
    "Cosmetic Dentistry Coimbatore",
    "Aesthetic Dental Clinic Coimbatore",
    "Orthodontic Consultations Coimbatore",
  ],
  authors: [{ name: "Dr. Preethi" }],
  creator: "Dr. Preethi’s Dentistry",
  publisher: "Dr. Preethi’s Dentistry",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drpreethidentistry.com",
    siteName: "Dr. Preethi’s Dentistry",
    title: "Dr. Preethi’s Dentistry | Premium Dental Care · Saibaba Colony, Coimbatore",
    description:
      "Your Smile. Reimagined. Discover thoughtful modern dentistry, personalized consultations, and smile-enhancing treatments in a welcoming environment.",
    images: [
      {
        url: "/Clinic.png",
        width: 838,
        height: 630,
        alt: "Dr. Preethi’s Dentistry Clinic Interior — Saibaba Colony, Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Preethi’s Dentistry | Saibaba Colony, Coimbatore",
    description:
      "Modern dentistry and Invisalign® clear aligner consultations in a calming, luxury clinical setting.",
    images: ["/Clinic.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Verified Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinicInfo.name,
    description:
      "Premium dental clinic in Saibaba Colony, Coimbatore offering Invisalign® clear aligners, aesthetic smile design, and gentle family dentistry.",
    image: "/Clinic.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicInfo.locality,
      addressLocality: clinicInfo.city,
      addressRegion: clinicInfo.state,
      postalCode: clinicInfo.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.0232454",
      longitude: "76.9388307",
    },
    telephone: clinicInfo.phoneDisplay,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    priceRange: "₹₹",
    medicalSpecialty: ["Dentistry", "Orthodontics"],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-clinic-bg text-clinic-text font-sans antialiased selection:bg-clinic-pastel selection:text-clinic-dark flex flex-col">
        {children}
      </body>
    </html>
  );
}

