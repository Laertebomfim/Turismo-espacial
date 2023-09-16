import PropTypes from "prop-types"
import { styled } from "styled-components"

const Pstyle = styled.p`
    font-family: "Bellefair";
    color:#979797;
    text-transform: uppercase;
    font-size: 16px;
    @media screen and (min-width:990px){
        font-size: 24px;
    }
`
export default function Proficional({Cargo}){
        return (
            <Pstyle>{Cargo}</Pstyle>
        )
}
Proficional.propTypes = {
    Cargo:PropTypes.string
}