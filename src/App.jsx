import { useEffect, useState } from 'react'
import Contesto from './createContext/Conteto'
import TempleteHead from './conponetes/templates/TempleteHead'
import TempleteHome from './conponetes/templates/TempleteHome'
// import TempleteDestino from './conponetes/templates/TempleteDestino'
// import TempleteEquipe from './conponetes/templates/TempleteEquipe'
// import TempleteTecnologia from './conponetes/templates/TempleteTecnologia'
import { Route,Routes } from 'react-router-dom'

export default function App() {
  const [valorResize,setValorResize] = useState(innerWidth)
  const [backgroundDesktop,setBackgroundDesktop] = useState("")
  const [backgroundTablet,setBackgroundTablet] = useState("")
  const [backgroundMobile,setbackgroundMobile] = useState("")
  const [Imagem,setImagem] = useState({})
  
  const estilo = {
    backgroundImage:`url(${Imagem})`,
    backgroundSize:"100% 100%",
    backgroundRepeat:"no-repeat",
    width: "100%",
    height: "100%",
    overflow: "auto",
  
  }
  useEffect(()=>{
    window.addEventListener("resize",()=>{ 
        setValorResize(innerWidth)
    })
  },[valorResize])

  useEffect(()=>{
      if(valorResize<600){
          setImagem(backgroundMobile)
      }else if(valorResize<990){
          setImagem(backgroundTablet)
      }else{
        setImagem(backgroundDesktop)
      }
  },[valorResize,backgroundDesktop,backgroundTablet,backgroundMobile])
  return (
    <Contesto.Provider value={
      {
        valorResize,setValorResize,
        setBackgroundDesktop,backgroundDesktop,
        setBackgroundTablet,backgroundTablet,
        setbackgroundMobile,backgroundMobile
      }
      }>
        <div className=''></div>
      <div style={estilo}>
      <TempleteHead/>
      <Routes>
        <Route path='' Component={TempleteHome}/>
        {/* <Route path='/destino' Component={TempleteDestino}/> */}
        {/* <Route path='/equipe' Component={TempleteEquipe}/>
        <Route path='/tecnologia' Component={TempleteTecnologia}/> */}
      </Routes>
      </div>
    </Contesto.Provider>
  )
}

