/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "4rem",
    },
    fontFamily: {
      "iransansL": "iransansL",
      "iransans": "iransans",
      "iransansB": "iransansB",
      "estedad": "estedad",
      "estedadSB": "estedadSB",
    },
    screens: {
      'large': '1440px',
      'desktop': '1200px',
      'mini-desktop': '1100px',
      'lg': '976px',
      'md': '768px',
      'sm': '480px',
    },
  },
  
  
  
  
  // plugins: [],
}