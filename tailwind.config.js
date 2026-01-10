/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      colors: {
        slate: {
          950: '#020617',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'scan-down': 'scan-down 3s linear infinite',
      },
      keyframes: {
        'scan-down': {
          '0%': { top: '0%', opacity: '0' },
          '10%': { opacity: '0.5' },
          '90%': { opacity: '0.5' },
          '100%': { top: '100%', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
