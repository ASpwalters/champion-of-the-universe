/* eslint @typescript-eslint/no-var-requires: "off" */
const { colors } = require('./src/constants/colors')
const { fractions } = require('./src/constants/fractions')
const { fontSizes } = require('./src/constants/fontSizes')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      height: fractions,
      width: fractions,
      minHeight: fractions,
      minWidth: fractions,
      maxHeight: fractions,
      maxWidth: fractions,
      aspectRatio: {
        card: '5/7',
      },
    },
    colors,
    fontSize: {
      ...fontSizes,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
