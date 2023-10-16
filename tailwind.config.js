/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
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
    extend: {
      animation: {
        expandFromMiddle: 'expandFromMiddle 3s 0.5s ease-out'
      },
      keyframes: {
        expandFromMiddle: {
          '0%': { width: '2%', transform: 'translateX(0%)', flex: 'none' },
          '100%': { width: '100%', transform: 'translateX(0%)', flex: '1 1 auto' }
        }
      }
    }
  },
  plugins: []
};
