import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import { tv } from "tailwind-variants"
//==========================================
//            tailwind-variants

const listyle = tv({
    base:"capitalize pb-2",
    variants:{
        border:{
            true:"border-blue-50 border-b-4",
            false:"border-none"
        }
    }
})
//==========================================

const informaçõesPlaneta = [
    {key:1,nome:"moon", boleano:true},
    {key:2,nome:"mars", boleano:false},
    {key:3,nome:"europa", boleano:false},
    {key:4,nome:"titan", boleano:false}
]
export default function NavPleneta({MudaIformações}){

    const [Planetas,setPlanetas] =useState(informaçõesPlaneta)

    let navega = useNavigate()// adsiona o nome do planeta a barra de pesquisa

    const auteraBoliano = (ChaveElemeto)=>{// para atribuir um barra no planeta clicado 
        let novoObjto = Planetas.map((e)=>({
            ...e,
            boleano:e.key === ChaveElemeto
        }))
        setPlanetas(novoObjto)
    }

    return(
        <nav className="">
            <ul className="flex justify-between w-3/5 min-w-[200px] max-w-[300px] mx-auto my-4 sm:text-2xl sm:my-8 lg:ml-0 lg:w-full">
            {Planetas.map((e,)=>(
                <li 
                className={listyle({border:[e.boleano]})}
                onClick={()=>{navega(`/Destino/${e.nome}`),MudaIformações(e.nome),auteraBoliano(e.key)}}
                key={e.key}
                >
                    {e.nome}
                </li>
            ))}

            </ul>
        </nav>
    )
}
NavPleneta.propTypes = {
    MudaIformações:PropTypes.func
}