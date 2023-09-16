import ElemImg from "../../atoms/Tecnologia/ElemImg"
import ElemetosNav from "../../atoms/Tecnologia/ElemetosNav"
import PropTypes from "prop-types"
import { useState,useEffect } from "react"
import { styled } from "styled-components"

const ArticleStyle = styled.article`
   
`
export default function ImgNavTeconologia({imgFogueta,setNomeObjeto}){
    const [elemento,setElemento] = useState()
    const MudarFoguete = (elemento,nome)=>{
        setElemento(elemento.target)
        setNomeObjeto(nome)
    }
    
    useEffect(()=>{
        typeof(elemento) === "undefined"?setElemento(document.getElementById("botao1")):elemento.style.backgroundColor="#fff"
        return(()=>{
            typeof(elemento) === "undefined"?true:elemento.style.backgroundColor="transparent"
        })
    },[elemento])
    return(
        <ArticleStyle>
                <ElemImg  Img={imgFogueta}/>
                <ElemetosNav  MudaFoguete={MudarFoguete}/>
        </ArticleStyle>
    )
}
ImgNavTeconologia.propTypes = {
    imgFogueta:PropTypes.string,
    setNomeObjeto:PropTypes.func.isRequired
}