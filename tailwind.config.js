/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: true,
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      xl: '1440px',
      lg: '976px',
      md: '768px',
      sm: '480px'
    },
    extend: {}
  },
  plugins: []
};
