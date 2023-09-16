import { InfomacoesEquipe } from "../../../Api"

import { useState,useEffect } from "react"
import ImgNav from "../../molecules/mainEquipe/ImgNav"
import InfomaçaoColaborador from "../../molecules/mainEquipe/InfomaçaoColaborador"
export default function VisualizaçãoColaborado() {
    const [nomeObjeto,setNomeObjeto] = useState("hurley")
    const [ObjetoColaboradores,setObjetoColaboradores] = useState({})
    useEffect(()=>{
        setObjetoColaboradores(InfomacoesEquipe[nomeObjeto])
    },[nomeObjeto])
    return(
        <section>
            <ImgNav ObjetoColaboradores={ObjetoColaboradores} setNomeObjeto={setNomeObjeto}/>
            <InfomaçaoColaborador ObjetoColaboradores={ObjetoColaboradores}/>
        </section>
    )
}