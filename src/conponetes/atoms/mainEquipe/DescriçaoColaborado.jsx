import PropTypes from "prop-types"
import { styled } from "styled-components"

const PTextoStyle = styled.p`
    font-family: "Barlow Condensed";
    color:#D0D6F9;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 100;
`
export default function DescriçaoColaborado({Texto}){
    return (
            <PTextoStyle>{Texto}</PTextoStyle>
    )
}
DescriçaoColaborado.propTypes ={
    Texto:PropTypes.string
}