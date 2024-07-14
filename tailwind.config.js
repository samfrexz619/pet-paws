/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
    },
    fontFamily: {
      pry: 'var(--jost)',
    },
    extend: {
      colors: {
        'pry-bg': '#F8F8F7',
        accent: {
          DEFAULT: '#FF868E',
          hover: '#fbe0dc',
        },
        grey: {
          DEFAULT: '#8C8C8C',
          pry: '#F8F8F7',
        },
        'pry-dark': '#1D1D1D',
        vote: '#B4B7FF',
        breed: '#97EAB9',
        gallery: '#FFD280',
      },
      fontSize: {
        12: '12px',
        16: '16px',
        44: '44px',
        20: '20px',
      },
      spacing: {
        '95': '95%',
        '96%': '96%',

      },
      backgroundImage: {
        bgl: "url('./src/assets/images/girl-pet.png')",
        dgl: "url('./src/assets/images/dark-girl.png')"
      },
      borderRadius: {
        10: '10px',
        5: '5px',
        20: '20px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}