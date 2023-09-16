import PropTypes from "prop-types"
import { styled } from "styled-components"
const DivStyle = styled.div`
    width: 100%;
    height:25Vh;
    margin-top: 40px;
    img{
        width:inherit;
        height: inherit;
    }
    @media screen and (min-width:768px) and (max-width:990px){
        height: 34vh;
    }
    @media screen and (min-width:990px){
        margin: 0;
        height: 60%;
        width: 30%;
        right: 0;
        top: 30%;
        position: absolute;
        img{
           width: 100%;
           height: 100%;
       } 
    }
`
export default function ElemImg({Img}){
    return (
        <DivStyle>
            <img src={Img}></img>
        </DivStyle>
    )
}
ElemImg.propTypes = {
    Img:PropTypes.string
}