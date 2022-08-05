/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {}
    },
  },
  variants: {
    extends: {
      scrollbar: ['dark']
    }
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}
