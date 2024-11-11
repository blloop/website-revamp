/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",

      slate: colors.slate,
      secondary: colors.amber,
    },
    extend: {
      colors: {
        olive: {
          50: "#F6FCDF",
          300: "#859F3D",
          700: "#31511E",
        },
        gray: {
          600: "#2A2A29",
          800: "#1A1A19",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
