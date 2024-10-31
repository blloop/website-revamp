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
      current: "currentColor",
      slate: colors.slate,
      secondary: colors.amber,
    },
    extend: {
      backgroundImage: {
        "header-image": "url('../public/header.jpg')",
      },
      colors: {
        primary: {
          50: "#A99FF2",
          100: "#9F95E5",
          200: "#8E84CC",
          300: "#7B72B2",
          400: "#6A6199",
          500: "#58517F",
          600: "#474166",
          700: "#35304C",
          800: "#242033",
          900: "#121019",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
