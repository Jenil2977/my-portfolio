/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0a0b10",
          card: "#11131e",
          cardLight: "#1a1d2e",
          border: "rgba(255, 255, 255, 0.08)",
        },
        gold: {
          50: "#fbf8eb",
          100: "#f6eecc",
          200: "#eddba0",
          300: "#e0c26c",
          400: "#d3a63f",
          500: "#d4af37", // Base premium gold
          600: "#a68224",
          700: "#7c5f1a",
          800: "#554013",
          900: "#35260b",
        }
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }
    },
  },
  plugins: [],
}
