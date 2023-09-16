import Moon from "../../atoms/mainDestino/Moon"
import Mars from "../../atoms/mainDestino/Mars"
import Europa from "../../atoms/mainDestino/Europa"
import Titan from "../../atoms/mainDestino/Titan"
import ImgPlaneta from "../../atoms/mainDestino/ImgPlaneta"
import { styled } from "styled-components"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"

const CaixaNav = styled.nav`
    @media screen and (min-width:990px){
        float: right;
        width: 45%;
        text-align: left;
    }
    
`
export default function Botoes({InformaçoesPraneta,setNomeObjeto}){
    const [elemento,setElemento] = useState()

    const MudarPlaneta = (elemento,nome)=>{
        setElemento(elemento.target)
        setNomeObjeto(nome)
    }
    
    useEffect(()=>{
        typeof(elemento) === "undefined"?setElemento(document.getElementById("Moon")):elemento.style.borderBottom="solid"
        return(()=>{
            typeof(elemento) === "undefined"?true:elemento.style.borderBottom="0px"
        })
    },[elemento])
     
    return(
        <div>
            <ImgPlaneta Img={InformaçoesPraneta.img}/>
            <CaixaNav>
                <Moon Alterna ={MudarPlaneta}/>
                <Mars Alterna ={MudarPlaneta}/>
                <Europa Alterna ={MudarPlaneta}/>
                <Titan Alterna ={MudarPlaneta}/>
            </CaixaNav>
        </div>
    )
}
Botoes.propTypes = {
    InformaçoesPraneta:PropTypes.object.isRequired,
    setNomeObjeto:PropTypes.func.isRequired
}