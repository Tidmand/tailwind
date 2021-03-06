function withOpacity(variableName) {
  return ({opacityValue}) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: 'rgba(149,34,255,1.0)',
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
          fill: withOpacity('--color-fill'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted'),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill'),
        },
      },
    },
    fontFamily: {
      VitesseLight: ["Vitesse sans light, sans-serif"],
      VitesseBook: ["Vitesse sans book, sans-serif"],
      VitesseMedium: ["Vitesse sans medium, sans-serif"],
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
  },
  /*variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
    },
  },*/
  plugins: [],
}
