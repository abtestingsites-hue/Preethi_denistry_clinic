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
        // Version 5 Luxury Editorial Palette
        clinic: {
          bg: "#FAFAF7",
          ivory: "#FAFAF7",
          surface: "#F2F4EF",
          white: "#FFFFFF",
          warm: "#F2F4EF",
          pistachio: "#DCE8CF",
          softPistachio: "#DCE8CF",
          sage: "#A9C49A",
          green: "#607C55",
          brand: "#607C55",
          deep: "#607C55",
          hover: "#4E6645",
          border: "#E7E9E2",
          greyLight: "#E7E9E2",
          muted: "#777D75",
          greyMid: "#777D75",
          charcoal: "#20231F",
          text: "#20231F",
          dark: "#171B16",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "var(--font-dm-sans)", "Manrope", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      spacing: {
        "section-desktop": "88px",
        "section-compact": "72px",
        "section-mobile": "48px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(32, 35, 31, 0.04), 0 4px 12px rgba(32, 35, 31, 0.03)",
        card: "0 2px 8px rgba(32, 35, 31, 0.04), 0 12px 24px -4px rgba(32, 35, 31, 0.06)",
        float: "0 8px 24px -4px rgba(32, 35, 31, 0.08)",
        elevated: "0 16px 40px -8px rgba(32, 35, 31, 0.12)",
      },
      borderRadius: {
        card: "16px",
        "card-sm": "12px",
        "card-lg": "18px",
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
