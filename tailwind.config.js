/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    darkMode: 'light',
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: { themes: ["light"], },
}

