const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: colors.indigo[50],
        dark: colors.slate[900],
        primary:{
          light: colors.violet[900],
          dark: colors.violet[500],
        }
      },
    },
  },
  plugins: [],
};
