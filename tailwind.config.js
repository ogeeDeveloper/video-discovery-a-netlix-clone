/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        black: "var(--black)",
        black10: "var(--black10)",
        black20: "var(--black20)",
        black30: "var(--black30)",
        black40: "var(--black40)",
        black50: "var(--black50)",
      
        gray10: "var(--gray10)",
        gray20: "var(--gray20)",
        gray40: "var(--gray40)",
      
        white10: "var(--white10)",
        white20: "var(--white20)",
        white30: "var(--white30)",
      
        green10:"var(--green10)",

        shadow10: "var(--shadow10)",
        shadow20: "var(--shadow20)",
        shadow30: "var(--shadow30)",
        tw_gradient_from: "var(--black)",
      
        red: "var(--red)",
        red10: "var(--red10)",
      
        blue: "var(--blue)",
        blue20: "var(--blue20)",
      },
    },
  },
  plugins: [],
}
