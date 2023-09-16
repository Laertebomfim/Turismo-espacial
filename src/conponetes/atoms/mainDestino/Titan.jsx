import { styled } from "styled-components"
import { ButtonMoonStyle } from "./Moon"
import PropTypes from "prop-types"
const ButtonTitanStyle = styled(ButtonMoonStyle)``
export default function Titan({Alterna}){
    return(<ButtonTitanStyle onClick={(e)=>{Alterna(e,"titan")}}>Titan</ButtonTitanStyle>)
}
Titan.propTypes={
    Alterna:PropTypes.func.isRequired
}
