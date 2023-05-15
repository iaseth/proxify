/** @type {import('tailwindcss').Config} */
const top100YCC = require("top-100-yc-companies");
const { yc100colors } = top100YCC;
const { airbnb } = yc100colors;

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb
      }
    },
  },
  plugins: [],
}

