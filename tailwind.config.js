/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",     // indigo-500
        surface: "#0F172A",     // slate-900
        card: "#1E293B",        // slate-800
        border: "#334155",      // slate-700
      }
    },
  },
  plugins: [],
}