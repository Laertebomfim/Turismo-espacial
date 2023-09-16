import DestinoDescriçao from "../atoms/mainDestino/DestinoDescriçao";
import InPlaneta from "../organisms/mainDestino/InPlaneta";
import Contesto from "../../createContext/Conteto";
import { useContext, useEffect } from "react";
import {
    DestinoDesktop,
    DestinoTablet,
    DestinoMobile
} from "../../Api"
import { styled } from "styled-components";

 export const MainStyle = styled.main`
    width: 100%;
    height: auto;
    text-align: center;
    overflow: hidden;
`
export default function TempleteDestino(){
    const {
        setBackgroundDesktop,
        setBackgroundTablet,
        setbackgroundMobile
    } = useContext(Contesto)
    useEffect(()=>{
        setBackgroundDesktop(DestinoDesktop)
        setBackgroundTablet(DestinoTablet)
        setbackgroundMobile(DestinoMobile)
    })
    return (
        <MainStyle>
            <DestinoDescriçao Numero={"01"} Texto={"Escolha seu destino"}/>
            <InPlaneta/>
        </MainStyle>
      );
}