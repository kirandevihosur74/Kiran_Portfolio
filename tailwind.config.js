/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#FF6D00',
          dark: '#FF3D00',
        },
        surface: '#121212',
        muted: '#1E1E1E',
        accent: '#FF9800',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} 