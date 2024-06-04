module.exports = {
  content: [
    './src/**/*.{html,js,vue}',
  ],
  mode: 'jit',
  darkMode: 'media', // or 'class' if you prefer
  theme: {
    extend: {
      backgroundColor: {
        'primary': "#01a2a6",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '100': '100% 100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
