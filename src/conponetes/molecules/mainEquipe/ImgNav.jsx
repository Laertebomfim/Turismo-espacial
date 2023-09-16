import ImgColaborado from "../../atoms/mainEquipe/ImgColaborado"
import PropTypes from "prop-types"
import Nevegadores from "../../atoms/mainEquipe/Nevegadores"
import { useState,useEffect } from "react"
import { styled } from "styled-components"

const ArticleStyle = styled.article`
    hr{
        border-color: #444444 ;
        height: .1px;
        width: 90%;
        margin: 0 auto;
        margin-top: -3px;
    }
    @media screen and (min-width:768px) and (max-width:990px){
        min-height: 550px;
        position:relative;
        top: 150px;
        overflow: hidden;
        
        .CaixaImgColaborado{
            margin-top: 150px;

            hr{
                display: none;
            }
        }

        .caixaNavegadores{
            width:60%;
            position: absolute;
            transform: translate(-50%);
            top:50px;
            left: 50%;
        }

    }
    @media screen and (min-width:990px){
        .CaixaImgColaborado{
            width: 40%;
            height: 70%;
            position: absolute;
            bottom: 0.6vh;
            right: 5%;
            hr{
                display: none;
            }
            img{
                width: 70%;
                height: 100%;
            }
        }
        .caixaNavegadores{
            margin-left: 65px;
            text-align: left;
            width: 40%;
            position: absolute;
            bottom: 15%;
        }
    }
`
export default function ImgNav({ObjetoColaboradores,setNomeObjeto}){
    const [elemento,setElemento] = useState()

    const MudarProfisional = (elemento,nome)=>{
        setElemento(elemento.target)
        setNomeObjeto(nome)
    }
    
    useEffect(()=>{
        typeof(elemento) === "undefined"?setElemento(document.getElementById("hurley")):elemento.style.backgroundColor="#fff"
        return(()=>{
            typeof(elemento) === "undefined"?true:elemento.style.backgroundColor="#979797"
        })
    },[elemento])
    return(
        <ArticleStyle>
            <div className="CaixaImgColaborado">
                <ImgColaborado Img={ObjetoColaboradores.img}/>
                <hr></hr>
            </div>

            <div className="caixaNavegadores">
                <Nevegadores MudarProfisional={MudarProfisional}/>
            </div>
        </ArticleStyle>
    )
}
ImgNav.propTypes = {
    ObjetoColaboradores:PropTypes.object.isRequired,
    setNomeObjeto:PropTypes.func.isRequired
}