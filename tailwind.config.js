/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
        backgroundImage: {
          "sign-bg":"url(./Images/background3.svg)",
        },
        height:{
          "h-login":"34rem"
        },
        fontFamily:{
          regular:['Varela Round', 'sans-serif'],
        
        },
        borderRadius:{
          half:"40%",
          extra:"10%"
        },
        transitionDuration:{
          "1-s":"1s"
        },
        width:{
          "2full":"200%"
        }
    },
  },
  plugins: [],
}