import { styled } from "styled-components"
import PropTypes from "prop-types"
const PStyle = styled.p`
    color:#fff;
    font-family: "Barlow Condensed";
    font-size: 1.3em;
    font-weight: 100;
    padding: 0 40px;
    margin-bottom: 40px;
    @media screen and (min-width:990px) {
        padding: 0;
        width:90%;
    }
    
`
export default function DescriçaoPlaneta({Texto}){
    return(
        <div>
            <PStyle>{Texto}</PStyle>
            <hr style={{width:"90%",display:"inline-block",borderColor:"#000"}}></hr>      
        </div>
    )
}
DescriçaoPlaneta.propTypes = {
    Texto:PropTypes.string
}