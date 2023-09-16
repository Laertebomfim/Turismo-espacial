import PropTypes from "prop-types"
import { styled } from "styled-components"
const PTextoStyle = styled.p`
    font-family: "Barlow Condensed";
    color:#D0D6F9;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    @media screen and (min-width:768px) and (max-width:990px){
        width: 50%;
        margin:0 auto;
        text-align:center;
    }
`
export default function ElemP({Texto}){
    return(
        <PTextoStyle>
            {Texto}
        </PTextoStyle>
    )
}
ElemP.propTypes ={
    Texto:PropTypes.string
}