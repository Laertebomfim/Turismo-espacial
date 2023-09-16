import Tempo from "../../atoms/mainDestino/Tempo";
import Distansia from "../../atoms/mainDestino/Distansia";
import PropTypes from "prop-types"
import { styled } from "styled-components";
const ArticleStyle = styled.article`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom:60px ;
    margin-top:40px;
    @media screen and (min-Width:768px){
       flex-direction: row;
       justify-content: center;
    }
    @media screen and (min-width:990px) {
        width:45%;
        float:right;
       justify-content: left;
    }

`
export default function PlanetaDataTempo({InformaçoesPraneta}){
    return(
        <ArticleStyle>
            <Distansia Distansia={InformaçoesPraneta.distancia}/>
            <Tempo Tempo={InformaçoesPraneta.Tempo}/>
        </ArticleStyle>
    )
}
PlanetaDataTempo.propTypes ={
    InformaçoesPraneta:PropTypes.object.isRequired
}