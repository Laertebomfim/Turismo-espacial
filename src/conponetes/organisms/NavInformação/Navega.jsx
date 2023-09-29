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


export default function Navega({MudaIformações,arrayTecnologia,nomeurl}){

    const [arrayDeInformação,setArrayDeInformação] =useState(arrayTecnologia)

    let navega = useNavigate()// adsiona o nome a barra de pesquisa

    const auteraBoliano = (ChaveElemeto)=>{// indentifica o que foi clicado para atribuir um estilo
        let novoObjto = arrayDeInformação.map((e)=>({
            ...e,
            boleano:e.key === ChaveElemeto
        }))
        setArrayDeInformação(novoObjto)
    }

    return(
        <nav className="">
            <ul className="flex justify-between  mx-auto my-4 sm:text-2xl sm:my-8  lg:w-full">
            {arrayDeInformação.map((e,)=>(
                <li 
                className={listyle({border:[e.boleano]})}
                onClick={()=>{navega(`/${nomeurl}/${e.nome}`),MudaIformações(e.nome),auteraBoliano(e.key)}}
                key={e.key}
                >
                    {e.nome}
                </li>
            ))}
            {/* w-3/5 min-w-[200px] max-w-[300px] */}

            </ul>
        </nav>
    )
}
Navega.propTypes = {
    MudaIformações:PropTypes.func,
    arrayTecnologia:PropTypes.array,
    nomeurl:PropTypes.string
}