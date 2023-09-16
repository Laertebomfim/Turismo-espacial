import PropPTypes from "prop-types"
import { styled } from "styled-components"
const H1Style = styled.h1`
    font-family: "Bellefair";
    color:#fff;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 100;
    margin-top: 10px;
    margin-bottom: 20px;
    @media screen and (min-width:990px){
        font-size: 2em;

    }
`
export default function ElemH1({Texto}){
    return(
        <H1Style>{Texto}</H1Style>
    )
}
ElemH1.propTypes = {
    Texto:PropPTypes.string
}