import DestinoDescriçao from "../atoms/mainDestino/DestinoDescriçao";
import { MainStyle } from "./TempleteDestino";
import Tecnologia from "../organisms/mainTecnologia/Tecnologia"
import Contesto from "../../createContext/Conteto";
import { useContext, useEffect } from "react";
import {
   TecnologiaDesktop,
   TecnologiaTablet,
   TecnologiaMobile
} from "../../Api"
import { styled } from "styled-components";
const Tecnologiastyle = styled(MainStyle)`
    @media screen and (min-width:990px){ 
        height: calc(100% - 92);
        
    }
`
export default function TempleteTecnologia(){
    const {
        setBackgroundDesktop,
        setBackgroundTablet,
        setbackgroundMobile
    } = useContext(Contesto)
    useEffect(()=>{
        setBackgroundDesktop(TecnologiaDesktop)
        setBackgroundTablet(TecnologiaTablet)
        setbackgroundMobile(TecnologiaMobile)
    })

    return(
        <Tecnologiastyle>
            <DestinoDescriçao Numero="03" Texto="LANÇAMENTO ESPACIAL 101"/>
            <Tecnologia/>
        </Tecnologiastyle>
    )
}