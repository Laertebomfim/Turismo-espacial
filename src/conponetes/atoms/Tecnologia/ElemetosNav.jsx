import PropTypes from "prop-types"
import { styled } from "styled-components"

const NavStyle = styled.nav`
    min-width: 88px;
    margin: 30px 0;

    diV{
        background-color: transparent;
        color: #979797;
        width: 40px;
        height: 40px;
        padding: 10px;
        border:solid 1px #fff;
        border-radius: 50%;
        display: inline-block;
        margin: 0 3%;
        
    }
    @media screen and (min-width:990px){
      
            height: 40vh;
            position: absolute;
            bottom: 20%;
            left:10vw;
        div{
            display: block;
            width: 45px;
            height: 50px;
            margin-bottom: 25px;
            text-align: center;
            font-size: 1.5em;
            padding-top: 10px;
        }
    }

`
export default function ElemetosNav({MudaFoguete}){
    return(
        <NavStyle>
            <div id={"botao1"} onClick={(e)=>{MudaFoguete(e,"vehicle")}}>1</div>
            <div  onClick={(e)=>{MudaFoguete(e,"spaceport")}}>2</div>
            <div  onClick={(e)=>{MudaFoguete(e,"capsule")}}>3</div>
        </NavStyle>
    )
}
ElemetosNav.propTypes = {
    MudaFoguete:PropTypes.func
}