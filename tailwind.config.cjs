/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        oleo: ['"Oleo Script"', 'system-ui'],
      },
      colors: {
        lightbg: "#E0E8F6",
        darkbg: "#1A1A1A",
        lighttext: "#484E53",
        darktext: "#ffffff",
      },
    },
  },
  plugins: [],
};
