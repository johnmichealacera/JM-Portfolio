module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       backgroundColor: () => ({
        'primary': "#01a2a6",
       }),
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100': '100% 100%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
