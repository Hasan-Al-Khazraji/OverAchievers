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
        'logo-cloud': 'logo-cloud 30s linear infinite',
      },
      keyframes: {
        'logo-cloud': {
               from: { transform: 'translateX(0)' },
               to: { transform: 'translateX(calc(-100% - 4rem))' },
             },
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
    },
  },
  plugins: [],
};
