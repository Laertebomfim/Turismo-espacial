import { useContext,useState } from "react"
import { useNavigate } from "react-router-dom"
import { tv } from "tailwind-variants"
import Context from "../../../createContext/Context"

//=======================================
//          tailwind-variants
const StyleNav = tv({
    base:"pb-3 border-solid border-white font-BarlowCondensed text-xl",
    variants:{
        border:{
            true:"border-b-2 ",
            false:"border-none",
        }
    }
})
//=======================================

export default function Nav (){

    const infomações =[// infomaçoes para exibir o menu na tela 
        {key:1,teste:"home" === sessionStorage.getItem("localPagina"), nome:"home",url:"home"},
        {key:2,teste:"destino" === sessionStorage.getItem("localPagina"), nome:"destino",url:"destino/moon"},
        {key:3,teste:"equipe" === sessionStorage.getItem("localPagina"), nome:"equipe",url:"equipe/shuttleworth"},
        {key:4,teste:"tecnologi" === sessionStorage.getItem("localPagina"), nome:"tecnologi"},
    ]//uso sessionStorage para não perder informações quando der um f5 na pagina 

    const novega = useNavigate()//para altera  a url

    const [infoStete,setInfoStete] = useState(infomações)
    
    let MudarState = (keyClicado)=>{
        setInfoStete(infoStete.map((e)=>({
            ...e,
            teste: e.key===keyClicado            
        })))// para identifica o clicado e atribuir um estilo
    }

    const {setBackgroundPagina} = useContext(Context)// para muda o background da pagina 

    const localDaPagina = (nome)=>{
        window.sessionStorage.setItem("localPagina",nome)

        setBackgroundPagina(sessionStorage.getItem("localPagina"))
    }

    
    return(
        
        <div className=" flex flex-col gap-12  md:flex-row md:gap-14 md:backdrop-blur-3xl  md:h-16 md:p-4 box-content md:z-0 md:min-w-[470px] md:w-1/2 md:max-w-[650px] md:shrink-0 md:justify-center">
            {infoStete.map((e,i)=>(
                <button
                    key={e.key} 
                    onClick={()=>{MudarState(e.key),novega(`/${e.url}`),localDaPagina(e.nome) }}>

                        <span className={StyleNav({border:[e.teste]})}>{`0${i} ${e.nome}`}</span>
                </button>
            ))}

        </div>
    )
}