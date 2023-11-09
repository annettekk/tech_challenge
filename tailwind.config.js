/** @type {import('tailwindcss').Config} */



module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': {'max':'550px'}
      }
    },
  },
  plugins: [],
}
