/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0A0F1E",        // dark navy background
        surface: "#111827",     // card/section surface
        accent: "#00A8FF",      // electric blue highlight
        gold: "#F5C518",        // optional secondary accent
        muted: "#6B7280",       // subdued text
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};