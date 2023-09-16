import { DestinoPranetas } from "../../../Api"
import Botoes from "../../molecules/mainDestino/Botoes"
import PlanetaDataTempo from "../../molecules/mainDestino/PlanetaDataTempo"
import Descriçoes from "../../molecules/mainDestino/Descriçoes"
import { useEffect, useState } from "react"

export default function InPlaneta(){
    const [nomeObjeto,setNomeObjeto] = useState("moon")
    const [ObjetoPranetas,setObjetoPranetas] = useState({})
    useEffect(()=>{
        setObjetoPranetas(DestinoPranetas[nomeObjeto])
    },[nomeObjeto])
    return(
        <section>
            <Botoes
                InformaçoesPraneta={ObjetoPranetas}
                setNomeObjeto={setNomeObjeto}
            />
            <Descriçoes InformaçoesPraneta={ObjetoPranetas}/>
            <PlanetaDataTempo InformaçoesPraneta={ObjetoPranetas}/>
        </section>
    )
}