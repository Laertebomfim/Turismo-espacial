import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import { tv } from "tailwind-variants"

//=======================================
//          tailwind-variants
const StyleNav = tv({
    base:"pb-3 border-solid",
    variants:{
        border:{
            true:"border-b-2",
            false:"border-none",
        }
    }
})
//=======================================

const infomações =[
    {key:1,teste:true, nome:"home"},
    {key:2,teste:false, nome:"Destino"},
    {key:3,teste:false, nome:"Equipe"},
    {key:4,teste:false, nome:"Tecnologi"},
]

export default function Nav (){
    const [infoStete,setInfoStete] = useState(infomações)
    const novega = useNavigate()

    let MudarState = (keyClicado)=>{

        setInfoStete(infoStete.map((e)=>({
            ...e,
            teste: e.key===keyClicado            
        })))
    }
    
    return(
        
        <div className="flex flex-col gap-12  md:flex-row md:gap-8 md:backdrop-blur-lg md:h-16 md:pl-8 md:z-0 md:min-w-[450px] md:w-1/2 md:max-w-[650px] md:shrink-0">
            {infoStete.map((e,i)=>(
                <button
                    key={e.key} 
                    onClick={()=>{MudarState(e.key),novega(`/${e.nome}`) }}>

                        <span className={StyleNav({border:[e.teste]})}>{`0${i} ${e.nome}`}</span>
                </button>
            ))}

        </div>
    )
}
// novega(`/${e.nome}`)