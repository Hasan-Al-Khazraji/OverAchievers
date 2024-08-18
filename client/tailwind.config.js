/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Arcade': ["Arcade", "sans"],
        'Retro': ["Retro", "sans"]
      }
    },
  },
  plugins: [],
};
