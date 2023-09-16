import NomaPraneta from "../../atoms/mainDestino/NomaPraneta"
import DescriçaoPraneta from "../../atoms/mainDestino/DescriçaoPlaneta"
import PropTypes from "prop-types"
import { styled } from "styled-components"
const DivCaixaDescriçao = styled.div`
    @media screen and (min-width:990px){
        float: right;
        width: 45%;
        text-align: left;
    }
    
`
export default function Descriçoes({InformaçoesPraneta}){
    return(
        <DivCaixaDescriçao>
            <NomaPraneta Nome={InformaçoesPraneta.nome}/>
            <DescriçaoPraneta Texto={InformaçoesPraneta.texto}/>
        </DivCaixaDescriçao>
    )
}
Descriçoes.propTypes= {
    InformaçoesPraneta:PropTypes.object.isRequired
}