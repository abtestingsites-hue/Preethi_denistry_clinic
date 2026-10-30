import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Version 4 Refined Minimalism Palette
        clinic: {
          bg: "#FFFFFF",
          white: "#FFFFFF",
          warm: "#F7F8F5",
          pistachio: "#8f9d6f",
          sage: "#8f9d6f",
          deep: "#6a774b",
          border: "#E8E9E5",
          greyLight: "#E8E9E5",
          muted: "#858780",
          greyMid: "#858780",
          charcoal: "#181A16",
          text: "#181A16",
          dark: "#111310",
          // Functional states
          brand: "#6a774b",
          hover: "#58633d",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "var(--font-dm-sans)", "Manrope", "DM Sans", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-dm-sans)", "Manrope", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        "section-desktop": "72px",
        "section-compact": "56px",
        "section-mobile": "44px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(37, 39, 36, 0.04), 0 4px 12px rgba(37, 39, 36, 0.03)",
        card: "0 2px 8px rgba(37, 39, 36, 0.04), 0 12px 24px -4px rgba(37, 39, 36, 0.05)",
        float: "0 8px 24px -4px rgba(37, 39, 36, 0.08)",
        elevated: "0 16px 40px -8px rgba(37, 39, 36, 0.10)",
      },
      borderRadius: {
        card: "18px",
        "card-sm": "14px",
        "card-lg": "22px",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.65" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
