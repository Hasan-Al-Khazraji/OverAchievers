/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "public/*.{html,js}"],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        Arcade: ["Arcade", "sans"],
        Retro: ["Retro", "sans"],
      },
      animation: {
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
    },
  },
  plugins: [],
};
