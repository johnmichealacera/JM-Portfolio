module.exports = {
  content: [
    './src/**/*.{html,js,vue}',
  ],
  mode: 'jit',
  darkMode: 'media', // or 'class' if you prefer
  theme: {
    extend: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '100': '100% 100%',
      },
      colors: {
        primary: '#01a2a6',
        dark: '#1e1e1e',
        light: '#f7f7f7',
        coral: '#f2545b',
        yellowAccent: '#ffc857',
        softTeal: '#dff6f5',
        white: '#ffffff',
        // trending palletes
        olive: '#606c38',
        forest: '#283618',
        cream: '#fefae0',
        gold: '#dda15e',
        burnt: '#bc6c25',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
