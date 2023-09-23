import Celular from "../organisms/manu/Celular.jsx"
import Nav from "../molecules/nav/Nav.jsx"
import { useEffect, useState,useMemo} from "react"
import PropTypes from "prop-types"

export default function TempleteHead(){

    const [boleanomenu,setboleanomenu]=useState(false)

    const MostraMenu = ({Boleano})=>(Boleano ? <Celular/> : <Nav/>)
    
    const MostraMenuMemo = useMemo(()=>{return <MostraMenu Boleano={boleanomenu}/>},[boleanomenu])

    MostraMenu.propTypes={Boleano:PropTypes.bool}// tipo MostraMenu

    window.addEventListener("resize",()=>{setboleanomenu(innerWidth< 768)})

    useEffect(()=>{
        setboleanomenu(innerWidth< 768)
    },[])
    return(
        <header>
            <section className="flex items-center mx-[5%] mt-4 md:mr-0">
                    <img className="w-8 " 
                    src="public/recursos/Icons/Logo.svg" 
                    alt="logo do site"/>

                    <div className="shrink w-full">
                         <div className=" hidden md:block md:h-1 md:w-2/5 max-w-[300px] md:bg-slate-800 md:z-10 ml-auto md:relative md:-right-4"></div>{/* poso usar essa div com lg */}
                    </div>

                    {MostraMenuMemo}
            </section>
        </header>
    )
}

