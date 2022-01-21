const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'purple': colors.purple,
        'indigo': colors.indigo
      },
      fontFamily: {
        'sans': ['Roboto', 'Helvetica'],
        'body': ['"Open Sans"']
      }
    },
  },
  variants: {},
  plugins: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
}