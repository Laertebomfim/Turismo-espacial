import { styled } from "styled-components"
import PropTypes from "prop-types"
export const ButtonMoonStyle = styled.button`
    font-family: "Barlow Condensed";
    font-size: 25px;
    font-weight: 400;
    background-color: transparent;
    color: #fff;
    border: 0;
    margin:0 3%;
    padding-bottom: 15px;
    @media screen and (min-Width:768px) and (max-width:990px){
       margin: 0 2%;
    }
    @media screen and (min-width:990px) {
        margin:0;
        margin-right:5%;
    }
`

export default function Moon({Alterna}){
    return(
    <ButtonMoonStyle id={"Moon"} onClick={(e)=>Alterna(e,"moon")}>Moon</ButtonMoonStyle>
    )
}
Moon.propTypes={
    Alterna:PropTypes.func.isRequired
}