import PropPTypes from "prop-types"
import { styled } from "styled-components"
const H2style = styled.h2`
    font-family: "Bellefair";
    color:#979797;
    text-transform: uppercase;
    font-size: 16px;
    margin-top: 20px;
    @media screen and (min-width:990px){
        font-size: 24px;
    }
`
export default function ElemH2({Texto}){
    return(
        <H2style>{Texto}</H2style>
    )
}
ElemH2.propTypes = {
    Texto:PropPTypes.string
}