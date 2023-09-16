import {Link} from 'react-router-dom'
import PropTypes from "prop-types"
    // const DivEstilo = styled(DivHomeStyle)`
    // `
export default function Destino({MudaNavegado}){
    return(
        <div onClick={(e)=>{{MudaNavegado(e)}}}>
            <Link to='/destino'>
                <div>
                    <strong>01</strong> Destino
                </div>
            </Link>
        </div>
    )
}
Destino.propTypes={
    MudaNavegado:PropTypes.func.isRequired
}