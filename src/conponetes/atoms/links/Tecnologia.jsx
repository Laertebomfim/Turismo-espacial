import {Link} from 'react-router-dom'
import PropTypes from "prop-types"

// const DivEstilo = styled(DivHomeStyle)``
export default function Tecnologia({MudaNavegado}){
    return(
        <div onClick={(e)=>{{MudaNavegado(e)}}}>
            <Link to='/tecnologia'>
                <div><strong>03</strong> Tecnologia</div>
            </Link>
        </div>
    )
}
Tecnologia.propTypes={
    MudaNavegado:PropTypes.func.isRequired
}