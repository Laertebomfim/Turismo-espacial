// import {Routes,Route} from 'react-router-dom'
import Home from "../../atoms/links/Home"
import Destino from "../../atoms/links/Destino"
import Equipe from "../../atoms/links/Equipe"
import Tecnologia from "../../atoms/links/Tecnologia"
import { useEffect, useState } from "react"
// const DivStyle = styled.div`
//     display:flex;
//     justify-content: center;
//     align-items: center;
//     gap: 3%;
//     width: 60%;
//     height: 92px;
//     background-color: #191b315f;
//     backdrop-filter:blur(5px);
//     div{
//         height: 100%;
//         min-width:5vw ;
//         margin-right: 3%;
//         text-align: center;
//         color: #fff;
//         /* border-bottom: solid 3px #fff ; */

//     }
// `
export default function Conputado(){
    const [elemento,setElemento] = useState()

    const MudaNavegado = (elemento)=>{
        console.log(elemento)
        setElemento(elemento.target)
    }
    
    useEffect(()=>{
        typeof(elemento) === "undefined"?setElemento(document.getElementById("home")):elemento.style.borderBottom="solid 3px #fff "
        return(()=>{
            typeof(elemento) === "undefined"?true:elemento.style.borderBottom="0px"
        })
    },[elemento])
    return(
        <div>
            <Home MudaNavegado={MudaNavegado}/>
            <Destino MudaNavegado={MudaNavegado}/>
            <Equipe MudaNavegado={MudaNavegado}/>
            <Tecnologia MudaNavegado={MudaNavegado}/>
        </div>
    )
}
