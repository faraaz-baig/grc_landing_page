module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1140px"
    },
    colors: {
      transparent: "transparent",
      black: "#222222",
      white: {
        100: "#FCFFFA",
        800: "#FFFFFF"
      },
      gray: {
        100: "#EFEFEF",
        800: "#71736E"
      },
      green: {
        50: "#F3FCEA",
        100: "#D5FCD2",
        200: "#9DF895",
        300: "#9CDA61",
        400: "#4CBE42",
        500: "#20943A",
        600: "#168550",
        700: "#0E5640",
        800: "#052D32",
        900: "#05272C"
      },
      blue: {
        300: "#5ED5EF",
        400: "#3DB1E3",
        500: "#3494DA"
      },
      red: {
        300: "#F6AD96",
        400: "#EF918B",
        500: "#E77070"
      },
      orange: {
        300: "#F1D368",
        400: "#E79D47",
        500: "#DA7136"
      },
      indigo: {
        300: "#6E8BD3",
        400: "#485CA5",
        500: "#324376"
      }
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      rale: ["Raleway", "sans-serif"]
    },
    boxShadow: {
      input: " 0px 4px 30px rgba(0, 0, 0, 0.14)"
    },
    extend: {
      screens: {
        "2xl": "1440px"
      },
      spacing: {
        i5: "-5px"
      },
      fontSize: {
        tiny: "15px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
