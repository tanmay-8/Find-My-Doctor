/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "800px",

      lg: "1048px",

      xl: "1280px",
    },
    extend: {
      keyframes: {
        spread: {
          "0%": { height: "0rem", width: "0rem" },
          "20%": { height: "2rem", width: "4rem" },
          "40%": { height: "4rem", width: "8rem" },
          "60%": { height: "6rem", width: "12rem" },
          "80%": { height: "8rem", width: "16rem" },
          "100%": { height: "10rem", width: "20rem" },
        },
        shrink: {
          from: { height: "12rem", width: "24rem" },
          To: { height: "0rem", width: "0rem" },
        },
      },
      animation: {
        "spread-out": "spread 0.3s linear 1",
        "shrink-in": "visibility 0s linear 0.33s, opacity 0.33s linear",
      },
      backgroundImage: {
        "sign-bg": "url(./Images/background2.svg)",
      },
      height: {
        "h-login": "34rem",
        "h-0.1": "1.5px",
      },
      fontFamily: {
        regular: ["Varela Round", "sans-serif"],
        logo: ["Ubuntu", "sans-serif"],
        quote: ["Lilita One", "cursive"],
      },
      borderRadius: {
        half: "40%",
        extra: "10%",
      },
      transitionDuration: {
        "1-s": "1s",
      },
      width: {
        "w-0.1":"1.5px",
        "2full": "200%",
        "3full": "300%",
      },
      colors: {
        intro: "#32b2f2",
      },
    },
  },
  plugins: [],
};
