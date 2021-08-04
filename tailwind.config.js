module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#9522FF",
      }
    },
    fontFamily: {
      VitesseLight: ["Vitesse sans light, sans-serif"],
      VitesseBook: ["Vitesse sans book, sans-serif"],
      VitesseMedium: ["Vitesse sans medium, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
