export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "booking" | "invisalign" | "location" | "consultation";
}

export const faqData: FAQItem[] = [
  {
    id: "faq-request-appointment",
    category: "booking",
    question: "How can I request an appointment?",
    answer:
      "You can submit an appointment request through our online booking form on this website by choosing your preferred date, preferred time window, and treatment interest. Our reception team in Saibaba Colony will then follow up by phone or WhatsApp to confirm your specific consultation time and answer any preliminary questions.",
  },
  {
    id: "faq-enquire-invisalign",
    category: "invisalign",
    question: "How can I enquire about Invisalign?",
    answer:
      "You can select 'Invisalign® & Clear Aligners' in our appointment request form or click any 'Enquire About Invisalign' button on this site. During your in-person consultation, Dr. Preethi will evaluate your bite, discuss digital scan possibilities, and outline a clear roadmap tailored to your orthodontic goals.",
  },
  {
    id: "faq-clinic-location",
    category: "location",
    question: "Where is the clinic located?",
    answer:
      "Dr. Preethi’s Dentistry is located in Saibaba Colony, Coimbatore, Tamil Nadu 641011. The clinic is easily accessible with convenient local parking and prominent neighborhood landmarks. An interactive Google Maps directions tool is available in our Contact section below.",
  },
  {
    id: "faq-what-to-expect",
    category: "consultation",
    question: "What should I expect at my consultation?",
    answer:
      "At your consultation, Dr. Preethi conducts an unhurried, one-on-one examination to discuss your dental concerns and aesthetic goals. If you are exploring clear aligners, we perform a precision 3D digital intraoral scan to visualize your dental arch without uncomfortable putty trays, followed by a transparent discussion of treatment pathways.",
  },
  {
    id: "faq-contact-reception",
    category: "booking",
    question: "How can I contact the reception team?",
    answer:
      "Our reception team can be reached by telephone at +91 94420 12345 during clinic working hours (Monday through Saturday, 09:30 AM to 08:00 PM). You can also connect directly via our official WhatsApp consultation link for prompt assistance.",
  },
  {
    id: "faq-change-appointment",
    category: "booking",
    question: "How can I reschedule an appointment?",
    answer:
      "If you need to reschedule or modify your appointment request, please contact our reception desk by phone or WhatsApp at least 24 hours prior to your scheduled time. Our clinic staff will gladly assist in finding an alternate date and time that fits your schedule.",
  },
];

