/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
