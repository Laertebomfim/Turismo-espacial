import DestinoDescriçao from "../atoms/mainDestino/DestinoDescriçao";
import VisualizaçãoColaborado from "../organisms/mainEquipe/visualizaçãoColaborado";
import { useContext, useEffect } from "react";
import { styled } from "styled-components";
import { MainStyle } from "./TempleteDestino";

import {
    EquipeDesktop,
    EquipeTablet,
    EquipeMobile
} from "../../../src/Api"
import Contesto from "../../createContext/Conteto";
const Mainstyle = styled(MainStyle)`
    @media screen and (min-width:990px){ 
        height: calc(100% - 92);
        > p{
            margin-left: 80px;
        }
    }
`
export default function TempleteEquipe(){
    const {
        setBackgroundDesktop,
        setBackgroundTablet,
        setbackgroundMobile
    } = useContext(Contesto)
    useEffect(()=>{
        setBackgroundDesktop(EquipeDesktop)
        setBackgroundTablet(EquipeTablet)
        setbackgroundMobile(EquipeMobile)
    })
    return(
        <Mainstyle>
            <DestinoDescriçao Numero="02" Texto="Conheça sua tripulação"/>
            <VisualizaçãoColaborado/>
        </Mainstyle>
    )
}