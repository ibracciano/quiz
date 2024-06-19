/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jaune': "#F2B705",
        'bleu': "#0F1A59"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'million': "url('./src/assets/million.jpg' )",
        'game': "url('./src/assets/plateau.jpg' )"
      },
      animation: {
        flash: 'flash .5s cubic-bezier(0.4, 0, 0.6, 1) 4',
      },

      keyframes: {
        flash: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 }
        }
      }
    },
  },
  plugins: [],
}