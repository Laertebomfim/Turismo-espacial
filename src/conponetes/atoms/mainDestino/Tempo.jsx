import { styled } from "styled-components"
import PropTypes from "prop-types"
export const DivStyle = styled.div`
    color:#fff;
    text-transform: uppercase;
    font-family: "Barlow Condensed";
    strong{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 100;
        font-size: 15px;
    }
    p{
        font-size: 30px;

    }
`
export default function Tempo({Tempo}){
    return(<DivStyle>
            <strong> tempo de viagem</strong>
            <p>{Tempo}</p>
        </DivStyle>)
}
Tempo.propTypes = {
    Tempo:PropTypes.string
}