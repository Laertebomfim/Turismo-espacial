import PropTypes from "prop-types"
import { styled } from "styled-components"
const DivStyle = styled.div`
    width: 100%;
    height: 40%;
    margin-top: 40px;
    img{
        width:40%;
    }
    @media screen and (min-width:768px) and (max-width:990px){
        img{
            width:350px;
            height: 400px;
        }
    }
    @media screen and (min-width:990px){
        margin: 0;
        height: 100%;
    }
`
export default function ImgColaborado({Img}){
    return (
        <DivStyle>
            <img src={Img}></img>
        </DivStyle>
    )
}
ImgColaborado.propTypes = {
    Img:PropTypes.string
}