/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0B1120",      // main canvas
        card: "#111827",         // node background
        border: "#1F2937",       // subtle border
        muted: "#9CA3AF",        // secondary text
        primary: "#6366F1",      // accent
      }
    }
  },
  plugins: [],
}