import { styled } from "styled-components"
import { DivStyle } from "./Tempo"
import PropTypes from "prop-types"
const DivStyle2 = styled(DivStyle)`
`
export default function Distansia({Distansia}){
    return(<DivStyle2><strong>Distância</strong><p>{Distansia}</p></DivStyle2>)
}
Distansia.propTypes = {
    Distansia:PropTypes.string
}