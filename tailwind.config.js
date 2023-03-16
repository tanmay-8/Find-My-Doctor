/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '1048px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend:{
        backgroundImage: {
          "sign-bg":"url(./Images/background2.svg)",
        },
        height:{
          "h-login":"34rem"
        },
        fontFamily:{
          regular:['Varela Round', 'sans-serif'],
          logo:['Ubuntu', 'sans-serif'],
          quote:['Lilita One', 'cursive'],
        },
        borderRadius:{
          half:"40%",
          extra:"10%"
        },
        transitionDuration:{
          "1-s":"1s"
        },
        width:{
          "2full":"200%",
          "3full":"300%"
        },
        colors: {
          "intro":"#32b2f2"
        }
    },
  },
  plugins: [],
}