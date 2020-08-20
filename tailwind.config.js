module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
      './src/**/*.js',
      './src/**/*.jsx'
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
}
