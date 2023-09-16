import PropTypes from "prop-types"
import { styled } from "styled-components"

const NavStyle = styled.nav`
    min-width: 88px;
    margin: 30px 0;

    diV{
        background-color: #979797;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        display: inline-block;
        margin: 0 3%;
    }
`
export default function Nevegadores({MudarProfisional}){
    return(
        <NavStyle>
            <div id="hurley" onClick={(e)=>{MudarProfisional(e,"hurley")}}></div>
            <div onClick={(e)=>{MudarProfisional(e,"shuttleworth")}}></div>
            <div onClick={(e)=>{MudarProfisional(e,"glover")}}></div>
            <div onClick={(e)=>{MudarProfisional(e,"ansair")}}></div>
        </NavStyle>
    )
}
Nevegadores.propTypes = {
    MudarProfisional:PropTypes.func
}