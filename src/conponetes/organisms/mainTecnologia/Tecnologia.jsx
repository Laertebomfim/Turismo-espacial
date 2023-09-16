
import { TecnologiaInfor } from "../../../Api"
import { useState,useEffect } from "react"
import ImgNavTeconologia from "../../molecules/Tecnologia/ImgNavTeconologia"
import InforTecnologia from "../../molecules/Tecnologia/inforTecnologia"
import Contesto from "../../../createContext/Conteto"
import { useContext } from "react"

export default function VisualizaçãoColaborado() {
    const [nomeObjeto,setNomeObjeto] = useState("vehicle")
    const [Objetofoguete,setObjetofogete] = useState({})
    const [imgFogueta,setImgFogueta] = useState("")
    const {valorResize} = useContext(Contesto)
    useEffect(()=>{
        setObjetofogete(TecnologiaInfor[nomeObjeto])
        typeof(Objetofoguete) === "undefined"?true: setImgFogueta(valorResize>990?Objetofoguete.imgG:Objetofoguete.imgP)
    },[nomeObjeto,Objetofoguete,valorResize])

    return(
        <section>
            <ImgNavTeconologia imgFogueta={imgFogueta} setNomeObjeto={setNomeObjeto}/>
            <InforTecnologia Objetofoguete={Objetofoguete}/>
        </section>
    )
}