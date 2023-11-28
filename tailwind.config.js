/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent', 
      current: 'currentColor', 
      black: colors.black,
      white: colors.white, 
      primary: colors.lime,
      secondary: colors.amber,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
