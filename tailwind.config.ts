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
        primary: {
          DEFAULT: "#4A7C6F",
          dark: "#3a6258",
          light: "#6a9c8f",
        },
        accent: {
          DEFAULT: "#C2956D",
          dark: "#a87a55",
          light: "#d4b091",
        },
        cream: {
          DEFAULT: "#F7F5F0",
          dark: "#EDE9E1",
          muted: "#E3DDD3",
        },
        charcoal: {
          DEFAULT: "#2A2A2A",
          muted: "#6B6B6B",
          light: "#9B9B9B",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        script: ["Great Vibes", "cursive"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
