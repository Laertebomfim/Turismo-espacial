import { styled } from "styled-components"
import { ButtonMoonStyle } from "./Moon"
import PropTypes from "prop-types"
const ButtonMarsStyle = styled(ButtonMoonStyle)``
export default function Mars({Alterna}){
    return(
    <ButtonMarsStyle onClick={(e)=>{Alterna(e,"mars")}} >Mars</ButtonMarsStyle>
    )
}

Mars.propTypes={
    Alterna:PropTypes.func.isRequired
}