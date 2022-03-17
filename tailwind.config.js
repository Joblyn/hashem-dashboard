module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{html}"],
  theme: {
    minWidth: {
      "98": "26rem"
    },
    colors: {
      white: "#ffffff",
      blue: {
        btn: "#397FFE",
        btnhover: "",
        deep: "#0063B7",
        sky: "#41A9FA",
        light: "#41A9FA",
      },
      red: {
        deep: "#FF4955",
        tomato: "#FF6C75",
        light: "#FF9074",
      },
      brown: {
        deep: "#D25720",
        light: "#FF8C56",
        orange: "#FFB215",
      },
      black: "#000000",
      gray: {
        300: "#F4F6FA", // search-bg
        200: "#F4F6FA", // prog bar
        600: "#F8F8F8", // bg
        650: "#EDEFF3", // phone bg
        700: "#9CA1AC", // nav-text
        800: "#CBCCCF", // icon
      },
      purple: {
        avstart: "#6988B7", // avatar
        avpend: "#9F87D4", // avatar
        progstart: "#508EFF", // progress
        progend: "#CB70EA", // progress
        barstart: "#8287FD", // prog bar
        barend: "#DD95FF", // prog bar
      },
      orange: "#E39F43",
      green: "#0EC23E",
      pink: "#FF8B85",
      teal: "#65A2B1",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      boxShadow: {
      "3xl": "0px 0px 20px rgba(0, 0, 0, 0.05);"
      },
      spacing: {
        "98": "26rem",
        "68": "16rem",
        "17": "5rem"
      },
    },
  },
  plugins: [],
};
