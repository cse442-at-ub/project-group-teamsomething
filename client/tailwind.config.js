module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        playfair: ["Playfair Display SC", "serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};