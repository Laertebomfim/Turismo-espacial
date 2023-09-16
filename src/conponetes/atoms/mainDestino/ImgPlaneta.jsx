import { styled } from "styled-components"
import PropTypes  from "prop-types"
const CaixaDiv  = styled.div`
    width:100%;
    margin: 40px auto;
    @media screen and (min-width:990px){
       width:55%;
       float: left;  
       display: inline-block;
       text-align:center;
       margin-bottom: 65px;
    }
    

`
const ImgStyle = styled.img`
    width:40%;
    min-width: 190px;
    display: inline-block;
    animation: rotaçao 9s linear infinite;
    @keyframes rotaçao {
        0%{
            transform:rotate(1turn);
        }
    }
    @media screen and (min-width:990px){
        width:60%;
    }

`
export default function ImgPlaneta({Img}){
    return(
    <CaixaDiv>
        <ImgStyle src={Img}></ImgStyle>
    </CaixaDiv>
    )
}
ImgPlaneta.propTypes={
    Img:PropTypes.string
}