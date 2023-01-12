/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yello': "f8d047",
      },
      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '100%': {
            transform: 'translate3d(-1500px, 0, 0)'
          },
        }
      },
      animation: {
        'slide': 'slide 15s linear infinite',
      }
    },
  },
  plugins: [],
}