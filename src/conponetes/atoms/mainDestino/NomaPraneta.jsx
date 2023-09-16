import { styled } from "styled-components"
import PropTypes from "prop-types"
const H1Style = styled.h1`
    color:#fff;
    font-family: "Bellefair";
    font-size: 74px;
    text-transform: uppercase;
    padding: 40px 0;
    font-weight: 100;
    @media screen and (min-width:990px){
        font-size: 100px;
    }
    
`
export default function NomaPraneta({Nome}){
    return(<H1Style>{Nome}</H1Style>)
}
NomaPraneta.propTypes = {
    Nome:PropTypes.string
}