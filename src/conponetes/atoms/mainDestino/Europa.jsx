import { styled } from "styled-components"
import { ButtonMoonStyle } from "./Moon"
import PropTypes from "prop-types"
const ButtonEuropaStyle = styled(ButtonMoonStyle)``
export default function Europa({Alterna}){
    return(<ButtonEuropaStyle onClick={(e)=>{Alterna(e,"europa")}}>Europa</ButtonEuropaStyle>)
}
Europa.propTypes ={
    Alterna:PropTypes.func.isRequired
}