/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      backgroundImage:{
        imgHomeMobile:"url('public/recursos/home/HomeMobile.jpg')",
        imgHomeTablet:"url('public/recursos/home/HomeTablet.jpg')",
        imgHomeDesktop:"url('public/recursos/home/HomeDesktop.jpg')"
      },
      animation:{
        telaMenu:"telaMenu 1s ease-out"
      },
      keyframes:{
        telaMenu:{
          "0%": {width:"40px"},
          "100%":{width:"70vw"}
        }
      },
    fontFamily:{
      BarlowCondensed:"'Barlow Condensed', sans-serif",
      Bellefair:"'Bellefair', serif"
    }
  },
  plugins: [],
}

