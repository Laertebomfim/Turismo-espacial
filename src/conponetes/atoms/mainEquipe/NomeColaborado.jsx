import PropTypes from "prop-types"
import { styled } from "styled-components"
const H1Style = styled.h1`
    font-family: "Bellefair";
    color:#fff;
    text-transform: uppercase;
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 20px;
    @media screen and (min-width:990px){
        font-size: 2.5em;

    }
`
export default function NomeColaborado({Nome}){
    return (
        <H1Style>{Nome}</H1Style>
    )
}
NomeColaborado.propTypes = {
    Nome:PropTypes.string
}