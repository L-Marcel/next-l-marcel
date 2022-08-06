/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        gray: {
          700: "#1B1816",
          600: "#252322",
          500: "#3B3937"
        },
        primary: {
          500: "#EB513B",
          600: "#C1412E"
        },
        white: {
          500: "#F1F1F1",
          600: "#E3E3E3"
        }
      }
    },
  },
  variants: {
    extends: {
      scrollbar: ["dark"]
    }
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
