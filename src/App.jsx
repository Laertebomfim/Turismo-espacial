import { useEffect, useState } from 'react'
import { tv } from 'tailwind-variants'
import { Outlet } from 'react-router-dom'
import Contesto from './createContext/Conteto'
import TempleteHead from './conponetes/templates/TempleteHead'
import TempleteHome from './conponetes/templates/TempleteHome'
// import TempleteDestino from './conponetes/templates/TempleteDestino'
// import TempleteEquipe from './conponetes/templates/TempleteEquipe'
// import TempleteTecnologia from './conponetes/templates/TempleteTecnologia'
import Home from './conponetes/atoms/links/Home'

//========================================
//             tailwind-variants

const background = tv({
  base:"bg-cover bg-no-repeat h-screen overflow-auto",
  variants:{
    Imagem:{
      Home: "bg-imgHomeMobile sm:bg-imgHomeTablet lg:bg-imgHomeDesktop" 
    }
  },
  defaultVariants:{
    Imagem:Home
  }
})

//=======================================

export default function App() {
  const [valorResize,setValorResize] = useState(innerWidth)
  const [backgroundDesktop,setBackgroundDesktop] = useState("")
  const [backgroundTablet,setBackgroundTablet] = useState("")
  const [backgroundMobile,setbackgroundMobile] = useState("")
  const [Imagem,setImagem] = useState({})

  useEffect(()=>{
    window.addEventListener("resize",()=>{ 
        setValorResize(innerWidth)
    })
  },[valorResize])

  return (
    <Contesto.Provider value={
      {
        valorResize,setValorResize,
        setBackgroundDesktop,backgroundDesktop,
        setBackgroundTablet,backgroundTablet,
        setbackgroundMobile,backgroundMobile
      }
      }>
      <div className={background({Imagem:'Home'})}>
        <TempleteHead/>
        <Outlet/>
      </div>

    </Contesto.Provider>
  )
}
//cria um tame 
// passar as imagem para o pubrik
// usase tailwind variantes 

