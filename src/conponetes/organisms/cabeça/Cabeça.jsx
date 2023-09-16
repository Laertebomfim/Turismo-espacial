import{Logo,} from "../../../Api.jsx"
import Conputado from "../../molecules/manu/Conputado.jsx"
import Celular from "../../molecules/manu/Celular.jsx"
// import Celular from "../../molecules/manu/celular"
import { useEffect, useState,useContext, useMemo} from "react"
import Conteto from "../../../createContext/Conteto.jsx"

export default function Cabeça(){
    const {valorResize} = useContext(Conteto) 
    const [boleanomenu,setboleanomenu]=useState(false)

    const MostraMenu = ({Boleano})=>{
        return Boleano ? <Celular/>  : <Conputado/>
    }
    
    const MostraMenuMemo = useMemo(()=>{return <MostraMenu Boleano={boleanomenu}/>},[boleanomenu])
    useEffect(()=>{
        setboleanomenu(valorResize < 768)
    },[valorResize])
    return(
        <section>
            <img src={Logo} alt=""/>
            {valorResize > 990 ? <div id="DivLinha"></div>:false}
            {MostraMenuMemo}
        </section>
    )
}
// const Section = styled.section`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-left:5%;
//     margin-top: 33px;
// @media screen and (min-width:768px) and (max-width:990px) {
//     margin-top: 0px;
// }
// @media screen and (min-width:999px){
//     div#DivLinha{
//         width: 30vw;
//         height:3px;
//         background-color: #1f243b;
//         margin-right: -11vw;
//         z-index: 999;
//         backdrop-filter:blur(55px);

//     }
// }
// `
// const StyleImg = styled.img`
//     width: 40px;

// `