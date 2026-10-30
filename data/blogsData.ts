/**
 * Dr. Preethi's Dentistry — The Smile Journal
 * Educational Articles & Dentist-Reviewed Guides
 */

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Orthodontics" | "Consultation Guide" | "Preventive Care" | "Aligner Care" | "Smile Design";
  categoryLabel: string;
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
    clinicalTips: string[];
    takeaway: string;
  };
}

export const blogArticles: BlogArticle[] = [
  {
    id: "clear-aligners-guide",
    slug: "understanding-clear-aligners-modern-orthodontics",
    title: "Understanding Clear Aligners: The Modern Alternative to Metal Braces",
    excerpt:
      "A comprehensive look at how clear aligners gradually guide teeth into optimal alignment using transparent, custom-molded polymer trays without brackets or metal wires.",
    category: "Orthodontics",
    categoryLabel: "Invisalign® Focus",
    readTime: "4 min read",
    publishDate: "October 2026",
    author: "Dr. Preethi",
    authorRole: "Chief Dental Surgeon & Clear Aligner Consultant",
    imageUrl: "/Clinic7.png",
    imageAlt: "Dr. Preethi's Dentistry signature Invisalign and clear aligner consultation suite with circular halo lighting",
    featured: true,
    content: {
      intro:
        "Orthodontic treatment has evolved dramatically over the last two decades. For adults and teens seeking to straighten crooked, crowded, or spaced teeth, clear aligners offer a discreet, removable, and comfortable treatment path tailored to everyday life.",
      sections: [
        {
          heading: "How Do Clear Aligners Actually Work?",
          paragraphs: [
            "Clear aligners work by applying calibrated, gentle directional forces to individual teeth over sequential stages. Rather than tightening wires periodically, patients transition to a newly fabricated set of custom trays every one to two weeks.",
            "Each aligner tray is micro-engineered using advanced digital scanning technology. Before manufacturing begins, a 3D computerized software model maps the incremental movement of each tooth from its initial baseline to its desired clinical position.",
          ],
        },
        {
          heading: "Key Daily Lifestyle Advantages",
          paragraphs: [
            "Unlike traditional metal appliances with fixed brackets and elastic ties, clear aligners are completely removable. This allows patients to enjoy their favorite foods without dietary restrictions and maintain immaculate oral hygiene through effortless brushing and flossing.",
            "Furthermore, because the trays are fabricated from smooth, medical-grade biopolymers, irritation to inner cheeks and gums is substantially minimized.",
          ],
        },
        {
          heading: "The Clinical Importance of Compliance",
          paragraphs: [
            "Because aligners are removable, patient compliance is the single most critical factor in achieving predictable outcomes. Trays should be worn between 20 to 22 hours every single day, being removed only for meals, hot beverages, and oral hygiene routines.",
          ],
        },
      ],
      clinicalTips: [
        "Wear your aligner trays for 20 to 22 hours daily to ensure continuous, gentle tooth guidance.",
        "Store your aligners in their protective case whenever they are not in your mouth.",
        "Rinse and gently brush your trays with cool water before reinserting them after meals.",
      ],
      takeaway:
        "Clear aligners offer a remarkably discreet pathway to a healthier, more balanced smile when guided by an experienced clinical professional.",
    },
  },
  {
    id: "first-dental-consultation",
    slug: "what-to-expect-during-your-first-dental-consultation",
    title: "What to Expect During Your Dental Consultation in Coimbatore",
    excerpt:
      "A step-by-step walkthrough of our unhurried initial examination, digital diagnostic mapping, and transparent smile planning at our Saibaba Colony practice.",
    category: "Consultation Guide",
    categoryLabel: "Patient Experience",
    readTime: "3 min read",
    publishDate: "October 2026",
    author: "Dr. Preethi",
    authorRole: "Chief Dental Surgeon",
    imageUrl: "/Clinic.png",
    imageAlt: "Welcoming reception and arrival lounge at Dr. Preethi's Dentistry in Saibaba Colony",
    featured: false,
    content: {
      intro:
        "If you have postponed visiting the dentist due to uncertainty or past rushed clinical visits, understanding the consultation journey can provide genuine peace of mind. At Dr. Preethi’s Dentistry in Saibaba Colony, appointments are designed to be calm, transparent, and completely unhurried.",
      sections: [
        {
          heading: "The Initial Conversation & Listening Session",
          paragraphs: [
            "Your appointment begins not on a dental chair under bright lights, but in a private consultation space. Dr. Preethi takes time to understand your personal dental history, any specific sensitivity or discomfort you may be experiencing, and your long-term aesthetic goals.",
            "Whether you are interested in orthodontic alignment, conservative whitening, or a comprehensive check-up, this initial dialogue sets a collaborative foundation.",
          ],
        },
        {
          heading: "Gentle Diagnostic Examination",
          paragraphs: [
            "Next, a thorough visual and digital assessment evaluates the health of your enamel, gums, bite dynamics, and jaw joint function. High-magnification diagnostic tools allow us to identify early demineralization or subtle micro-fractures before they develop into larger issues.",
          ],
        },
        {
          heading: "Transparent Discussion of Clinical Options",
          paragraphs: [
            "We believe that an informed patient makes the best health decisions. You will review digital imaging together on screen, understand the biological rationale for any suggested treatment, and receive a clear breakdown of timelines and priorities without any pressure.",
          ],
        },
      ],
      clinicalTips: [
        "Bring along any recent X-rays or dental records from the past 12 months.",
        "List any medications, allergies, or chronic health conditions you currently manage.",
        "Feel completely welcome to bring a list of questions regarding treatments or aligners.",
      ],
      takeaway:
        "A dental consultation should be an empowering, informative conversation about your health, never a stressful or rushed encounter.",
    },
  },
  {
    id: "oral-hygiene-preventive-science",
    slug: "everyday-oral-hygiene-science-of-preventive-care",
    title: "Everyday Oral Hygiene: The Science Behind Preventive Care",
    excerpt:
      "Why routine professional ultrasonic cleanings combined with targeted daily habits remain the foundation of lasting tooth longevity and gum health.",
    category: "Preventive Care",
    categoryLabel: "Clinical Wellness",
    readTime: "5 min read",
    publishDate: "September 2026",
    author: "Dr. Preethi",
    authorRole: "Chief Dental Surgeon",
    imageUrl: "/Clinic4.png",
    imageAlt: "Clinical operatory equipped with shadowless surgical illumination and precision dental delivery unit",
    featured: false,
    content: {
      intro:
        "Behind every radiant, confident smile lies strong biological foundation: healthy gum tissues and intact enamel. Preventive dentistry focuses on stopping dental complications long before they require complex restorative interventions.",
      sections: [
        {
          heading: "The Micro-Biology of Plaque and Tartar",
          paragraphs: [
            "Every day, a microscopically thin biofilm known as plaque forms on tooth enamel. While regular brushing removes soft plaque, minerals in saliva eventually cause unremoved plaque to crystallize into calculus (tartar) within 24 to 48 hours.",
            "Once hardened into tartar, no amount of home brushing or flossing can dislodge it safely. Only professional ultrasonic scaling at a dental clinic can remove calculus without scratching delicate enamel.",
          ],
        },
        {
          heading: "Protecting the Periodontal Foundation",
          paragraphs: [
            "When tartar accumulates near and below the gumline, it triggers chronic mild inflammation known as gingivitis. Left unattended, this inflammation can progress to periodontitis, which gradually weakens the underlying bone supporting your teeth.",
            "Scheduling a professional cleaning every six months effectively resets this cycle, ensuring gums remain firm, pink, and healthy.",
          ],
        },
      ],
      clinicalTips: [
        "Brush twice daily for two full minutes using a soft-bristled brush angled at 45 degrees toward the gumline.",
        "Floss once every evening before bed to dislodge interdental bacteria.",
        "Replace your toothbrush every 3 months or immediately after recovering from a cold.",
      ],
      takeaway:
        "Consistent daily oral hygiene combined with biannual clinical visits is the single most cost-effective investment in lifelong dental health.",
    },
  },
  {
    id: "aligner-care-maintenance",
    slug: "caring-for-teeth-and-trays-during-aligner-treatment",
    title: "Caring for Your Teeth and Trays During Clear Aligner Treatment",
    excerpt:
      "Essential daily guidelines for keeping your clear aligners crystal clear, odor-free, and biologically sound throughout your orthodontic journey.",
    category: "Aligner Care",
    categoryLabel: "Patient Guide",
    readTime: "4 min read",
    publishDate: "September 2026",
    author: "Dr. Preethi",
    authorRole: "Chief Dental Surgeon & Clear Aligner Consultant",
    imageUrl: "/Clinic6.png",
    imageAlt: "Hygienic operatory and sterile workstation at Dr. Preethi's Dentistry",
    featured: false,
    content: {
      intro:
        "Wearing clear aligners is one of the most discreet ways to straighten your smile. However, because trays fit snugly over your teeth, proper tray hygiene and attentive dental care are crucial to keep both your teeth and aligners crystal-clear.",
      sections: [
        {
          heading: "The Golden Rule: Never Eat with Aligners In",
          paragraphs: [
            "Clear aligner trays are engineered to guide teeth through gentle, continuous tension—they are not designed to withstand the heavy biting and grinding forces of chewing.",
            "Eating with trays in can crack the polymer, warp the calibrated fit, or trap food particles directly against your enamel, creating an ideal breeding ground for cavity-causing bacteria.",
          ],
        },
        {
          heading: "Cleaning Your Aligners Safely",
          paragraphs: [
            "Rinse your trays with lukewarm or cool water every time you take them out. Avoid using hot water, as high temperatures can deform the thermoplastic polymer and alter your treatment tracking.",
            "Clean the trays gently with a soft toothbrush and clear, mild liquid soap. Avoid abrasive whitening toothpastes, which can create microscopic scratches that make aligners look cloudy.",
          ],
        },
      ],
      clinicalTips: [
        "Always brush and rinse your teeth thoroughly before clicking your aligners back in.",
        "Never soak aligners in boiling water or mouthwashes with artificial coloring.",
        "Always carry your protective aligner storage case when traveling or dining outside.",
      ],
      takeaway:
        "Caring for your aligners takes just a few extra minutes each day and guarantees that your treatment remains completely invisible and hygienic.",
    },
  },
];

