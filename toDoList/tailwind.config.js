const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      borderRadius:{
        'default': '8px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
