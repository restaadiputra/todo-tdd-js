module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ['./src/**/*.js', './src/**/*.jsx'],
  },
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        maxHeight: 'maxHeight',
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '200': '200px',
        full: '100%',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
