module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cdark: '#403A48',
        cbrown: '#98876E',
        cgrey: '#E1DEDA',
        cfontgrey: '#707070',
        corange: {
          DEFAULT: '#fcb813',
          dark: '#009eeb',
        },
        cyellow: '#FEDD50',
        cdarkgreen: '#1D7F3D',
        cgreen: '#3BA459',
        cdarkgreenblue: '#1D8476',
        cgreenblue: '#25A996',
        cblue: '#82CFD0',
        clightblue: '#B2E0E5',
      },     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
