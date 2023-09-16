import PropTypes from "prop-types"
import Proficional from "../../atoms/mainEquipe/Proficional"
import NomeColaborado from "../../atoms/mainEquipe/NomeColaborado"
import DescriçaoColaborado from "../../atoms/mainEquipe/DescriçaoColaborado"
import { styled } from "styled-components"
const ArticleInfomaçoeStyle = styled.article`
    margin: 0 auto;
    padding:0 4%;
    
    @media screen and (min-width:768px) and (max-width:990px){
        width: 60%;
        position:relative;
        top: -490px;
    }
    @media screen and (min-width:990px){
        text-align: left;
        margin: 0;
        margin-left:25px;
        padding: 0 5%;
        width: 40%;
    }
`
export default function InfomaçaoColaborador({ObjetoColaboradores}){
    return (
        <ArticleInfomaçoeStyle>
            <Proficional Cargo={ObjetoColaboradores.Proficional}/>
            <NomeColaborado Nome={ObjetoColaboradores.nome}/>
            <DescriçaoColaborado Texto={ObjetoColaboradores.texto}/>
        </ArticleInfomaçoeStyle>
    )
}
InfomaçaoColaborador.propTypes = {
    ObjetoColaboradores:PropTypes.object
}