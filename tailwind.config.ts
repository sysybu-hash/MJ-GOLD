import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0A0A0A",
          800: "#141414",
          700: "#1F1F1F",
        },
        pearl: {
          DEFAULT: "#FAFAF7",
          200: "#F2F1EB",
          300: "#E8E6DE",
        },
        gold: {
          light: "#E8D9A8",
          DEFAULT: "#C9A961",
          deep: "#B8860B",
        },
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "radial-gold":
          "radial-gradient(circle at 50% 0%, rgba(201,169,97,0.18), transparent 60%)",
      },
      letterSpacing: {
        luxury: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
