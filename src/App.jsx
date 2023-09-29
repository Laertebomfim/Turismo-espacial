import { useEffect, useState } from 'react'
import { tv } from 'tailwind-variants'
import { Outlet } from 'react-router-dom'
import Context from './createContext/Context'
import TempleteHead from './conponetes/templates/TempleteHead'
// import TempleteDestino from './conponetes/templates/TempleteDestino'
// import TempleteEquipe from './conponetes/templates/TempleteEquipe'
// import TempleteTecnologia from './conponetes/templates/TempleteTecnologia'

//========================================
//             tailwind-variants

const background = tv({
  base:"bg-cover bg-no-repeat h-screen overflow-auto",
  variants:{
    Imagem:{
      home: "bg-imgHomeMobile sm:bg-imgHomeTablet lg:bg-imgHomeDesktop",
      destino:"bg-imgDestinoMobile sm:bg-imgDestinoTablet lg:bg-imgDestinoDesktop",
      equipe:"bg-imgEquipeMobile sm:bg-imgEquipeTablet lg:bg-imgEquipeDesktop",
      tecnologia:"bg-imgTecnologiaMobile sm:bg-imgTecnologiaTablet lg:bg-imgTecnologiaDesktop"
    }
  },
  defaultVariants:{
    Imagem:"home"
  }
})

//=======================================

export default function App() {
  if(sessionStorage.length===0){
    window.sessionStorage.setItem("localPagina","home")
  }// não quebra a pagina quando der um f5

  const [valorResize,setValorResize] = useState(innerWidth)
  const [backgroundDesktop,setBackgroundDesktop] = useState("")
  const [backgroundTablet,setBackgroundTablet] = useState("")
  const [backgroundMobile,setbackgroundMobile] = useState("")
  const [backgroundPagina,setBackgroundPagina] = useState(window.sessionStorage.getItem("localPagina"))
  

  useEffect(()=>{
    window.addEventListener("resize",()=>{ 
        setValorResize(innerWidth)
    })
  },[valorResize])
  return (
    <Context.Provider value={
      {
        valorResize,setValorResize,
        setBackgroundDesktop,backgroundDesktop,
        setBackgroundTablet,backgroundTablet,
        setbackgroundMobile,backgroundMobile,
        setBackgroundPagina
      }
      }>
      <div className={background({Imagem:[backgroundPagina]})}>
        <TempleteHead/>
        <Outlet/>
      </div>

    </Context.Provider>
  )
}
// automatiza as funções de atualização de imfomaçao  é navegação 

