/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#343434',
        'lightgrey': '#737373',
        'purple': '#915DFF',
      },

      fontSize: {
        'c-twenty': '20px',
        'c-eighteen': '18px',
      }
    },
  },
  plugins: [],
}