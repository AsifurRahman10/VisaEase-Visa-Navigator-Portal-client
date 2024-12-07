/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        primary: '#025cb5',
        secondary: '#fa8714',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],

}


