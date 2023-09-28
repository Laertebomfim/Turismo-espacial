import PropTypes from "prop-types"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { tv } from "tailwind-variants"

//=================================
//        tailwind-variants
const liStyle = tv({
    base:"w-6 h-6 rounded-full",
    variants:{
        background:{
            true:"bg-slate-100",
            false:"bg-slate-700"
        }
    }
})
//=================================

const infomaçoesObjeto = [
    {key:1,nome:"mark-shuttleworth",nomeObjeto:"shuttleworth",boleano:true},
    {key:2,nome:"Victor-Glover",nomeObjeto:"glover",boleano:false},
    {key:3,nome:"Douglas-Hurley",nomeObjeto:"hurley",boleano:false},
    {key:4,nome:"Anousheh-Ansari",nomeObjeto:"ansair",boleano:false},

]
export default function NavEquipe ({MudaIformações }){

    const [infomaçoes,setInfomaçoes] = useState(infomaçoesObjeto)
     
    const navega = useNavigate() // adsiona a url o que esta sendo assado 

    const selecionaClicado = (chaveElamento)=>{ // indentifica o que foi clicado para atribuir um estilo 
        let novoObjeto = infomaçoes.map((e)=>(
            {
                ...e,
                boleano:e.key == chaveElamento
            }
        ))
        setInfomaçoes(novoObjeto)
    }
    return(
        <nav className="w-3/5 max-w-[200px] inline-block">
            <ul className="flex justify-between">
                {infomaçoes.map((e)=>(
                    <li 
                    className={liStyle({background:[e.boleano]})}
                    key={e.key}
                    onClick={()=>{navega(`/equipe/${e.nome}`),MudaIformações(e.nomeObjeto),selecionaClicado(e.key)}}
                    >

                    </li>
                ))}
            </ul>
        </nav>
    )
}
NavEquipe.propTypes = {
    MudaIformações:PropTypes.func
}