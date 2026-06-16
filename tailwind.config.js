/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0A0F1E",
        surface: "#111827",
        accent: "#00A8FF",
        gold: "#F5C518",
        muted: "#6B7280",
      },
      fontFamily: {
        // 🟢 Change this key from 'display' to 'mono' so 'font-mono' uses your font!
        mono: ["var(--font-mono)", "monospace"], 
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};