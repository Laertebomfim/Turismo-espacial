import { IconHamburger } from "../../../Api"
import { IconFecha } from "../../../Api"
import { useEffect,useState } from "react"
import Home from "../../atoms/links/Home"
import Equipe from "../../atoms/links/Equipe"
import Destino from "../../atoms/links/Destino"
import Tecnologia from "../../atoms/links/Tecnologia"
    // const estilo ={
    //     Icon:css`
    //     width: 24px;
    //     height: 21px;
    //     margin-right:24px;
    //     `,
    //     Menu:css`
    //     float: right;
    //     margin-right: 25px;
    //     margin-top: 25px;
    //     `
    // }
    
    // const Img = styled.img`
    //     ${({nomestyle})=>{ return estilo[nomestyle]}}
    //     `
    // const DivMenuStyle = styled.div`
    //     background-color: #262d4b1c;
    //     backdrop-filter:blur(15px);
    //     position: absolute;
    //     z-index: 999;
    //     height: 100vh;
    //     right: 0vw;
    //     top: 0vw;
    //     animation-name: menu;
    //     animation-duration: 1s;
    //     width:70vw;

    //     @keyframes menu{
    //         0%{
    //             width: 35vw;
    //         }
    //         100%{
    //             transition: .5s;
    //             width:70vw;
    //         }
    //     }
    //     div.navega{
    //         clear: both;
    //         height: 50%;
    //         padding-top: 50px;
    //         padding-left: 40px;
    //         display: flex;
    //         flex-direction: column;
    //         gap: 20% 0px;
    //     }
    // `
export default function Celular(){
    const [boleano,setboleano] = useState(false)
    const [iconMeno,seticonMeno] = useState(<></>)
    const [elemetoBody,setelemetoBody] = useState(document.getElementsByTagName("body")[0])
 
    useEffect(()=>{
        function fechameno(){setboleano(boleano?false:true)}
        if(boleano){
          seticonMeno(<div onClick={(e)=>{e.stopPropagation()}}>
            <img nomestyle={"Menu"} onClick={()=>setboleano(!boleano)} src={IconFecha}/>
            <div className="navega">
                <Home/>
                <Destino/>
                <Equipe/>
                <Tecnologia/>
            </div>
            </div>)
            elemetoBody.addEventListener("click",fechameno)
        }else{
            seticonMeno(<img nomestyle={"Icon"}  onClick={()=>{setboleano(!boleano)}} src={IconHamburger}/>)
        }
        return ()=>{elemetoBody.removeEventListener("click",fechameno)}                                            

    },[boleano,elemetoBody])

    return(
        <div id="menuMobile" onClick={(e)=>{e.stopPropagation()}}>
            {iconMeno}
        </div>
    )
}