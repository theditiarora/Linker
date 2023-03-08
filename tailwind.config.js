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
        'green': '#14B888',
        'blue': '#5DA7FF',
        'light-green': '#B5E6BA',
        'orange': '#FC9400',
        'pink': '#FEAFFF',
      },

      fontSize: {
        'c-twenty': '20px',
        'c-eighteen': '18px',
        'c-twentyEight': '24px',
      }
    },
  },
  plugins: [],
}