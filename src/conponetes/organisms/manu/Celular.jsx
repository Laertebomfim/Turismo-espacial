import {useState } from "react"
import PropTypes from "prop-types"
import Nav from "../../molecules/nav/Nav"

export default function Celular(){

    const [boleano,setBoleano] = useState(false) // para alterna o menu
    const elemetoBody = document.getElementsByTagName("body")[0] 
 
    function fechaMenu(){setBoleano(!boleano)} //muda o valor do boleano
    
    const Menu = ({Boleano})=>{

        if(Boleano){ // menu aberto

            elemetoBody.addEventListener("click",fechaMenu)
            return(
                <div 
                className=' absolute top-0 right-0 h-screen backdrop-blur-lg z-20 w-[70vw] max-w-[350px] animate-telaMenu'
                onClick={(e)=>{e.stopPropagation()}}>

                    <img className="float-right mt-4 mr-4"   
                        onClick={()=>fechaMenu()} 
                        src="../public/recursos/Icons/IconClose.svg"/>

                    <div className="clear-both h-1/2 pt-16">
                        <Nav/>
                    </div>
                </div>
            )
            
        }else{ // menu fechado 
            elemetoBody.removeEventListener("click",fechaMenu)
            return(
                <img onClick={()=>{setBoleano(!boleano)}} src="../public/recursos/Icons/IconHamburger.svg"/>
            )
        }    
    }
    Menu.propTypes = {Boleano:PropTypes.bool}// tipo Menu

    return(
        <div onClick={(e)=>{e.stopPropagation()}}>
            <Menu Boleano={boleano}/>
        </div>
    )
}