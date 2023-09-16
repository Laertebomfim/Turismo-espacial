import { styled } from "styled-components"
import PropTypes from "prop-types"
const Pstyle = styled.p`
    color:#fff;
    font-family: "Barlow Condensed";
    text-transform: uppercase;
    font-weight: 400;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 20px;
    strong{
        padding-right:20px;
        color:#707070;
        font-size: 20px;
    }
    @media screen and (min-Width:768px) and (max-width:990px){
        margin-left: 30px;
        text-align: left;
    }
    @media screen and (min-width:990px){
        margin-bottom: 80px;
        margin-left: 150px;
        text-align: left;
    }


`
export default function DestinoDescriçao({Numero,Texto}){
    return(
        <Pstyle><strong>{Numero}</strong>{Texto}</Pstyle>
    )
}
DestinoDescriçao.propTypes = {
    Numero:PropTypes.string.isRequired,
    Texto:PropTypes.string.isRequired
}