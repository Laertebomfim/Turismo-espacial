import PropTypes from "prop-types"
import ElemH2 from "../../atoms/Tecnologia/ElemH2"
import ElemH1 from "../../atoms/Tecnologia/ElemH1"
import ElemP from "../../atoms/Tecnologia/ElemP"
import { styled } from "styled-components"
const ArticleInfomaçoeStyle = styled.article`
    
    @media screen and (min-width:990px){
        text-align: left;
        margin: 0;
        margin-left:14%;
        padding: 0 5%;
        width: 40%;
    }
`
export default function InforTecnologia({Objetofoguete}){
    return (
        <ArticleInfomaçoeStyle>
            <ElemH2 Texto="A TERMINOLOGIA..."/>
            <ElemH1 Texto={Objetofoguete.nome}/>
            <ElemP Texto={Objetofoguete.texto}/>
        </ArticleInfomaçoeStyle>
    )
}
InforTecnologia.propTypes = {
    Objetofoguete:PropTypes.object
}