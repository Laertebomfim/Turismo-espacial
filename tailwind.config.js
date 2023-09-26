/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      backgroundImage:{
        //home
        imgHomeMobile:"url('../public/recursos/home/HomeMobile.jpg')",
        imgHomeTablet:"url('../public/recursos/home/HomeTablet.jpg')",
        imgHomeDesktop:"url('../public/recursos/home/HomeDesktop.jpg')",
        //destino
        imgDestinoMobile:"url('../public/recursos/destino/background-destination-mobile.jpg')",
        imgDestinoTablet:"url('../public/recursos/destino/background-destination-tablet.jpg')",
        imgDestinoDesktop:"url('../public/recursos/destino/background-destination-desktop.jpg')",

      },
      animation:{
        telaMenu:"telaMenu 1s ease-out",
        planeta:"planeta linear 10s infinite"
      },
      keyframes:{
        telaMenu:{
          "0%": {width:"40px"},
          "100%":{width:"70vw"}
        },
        planeta:{
          "0%":{transform: "rotate(0deg)"},
          "100%":{transform: "rotate(360deg)"}
        }
      },
    fontFamily:{
      BarlowCondensed:"'Barlow Condensed', sans-serif",
      Bellefair:"'Bellefair', serif"
    }
  },
  plugins: [],
}

