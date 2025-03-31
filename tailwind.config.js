/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.25rem',
      },
      animation: {
        scrollDown: 'scrollDown 30s linear infinite',
        scrollUp: 'scrollUp 30s linear infinite',
      },
      keyframes: {
        scrollDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        scrollUp: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} 