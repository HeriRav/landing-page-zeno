/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  purge: {
    options: {
      safelist: ['absolute', 'relative', 'top-0', 'left-0', 'right-0', 'bottom-0'],
    },
  },
  theme: {
    extend: {
      colors: {
        'primary': '#6D30A8',
        'secondary': '#F9CF39',
        'black': '#1E1E1E',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        popIn: {
          "0%": { scale: 0 },
          "100%": { scale: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        popIn: "popIn 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
}
