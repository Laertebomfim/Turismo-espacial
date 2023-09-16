import {Link} from 'react-router-dom'
import PropTypes from "prop-types"

    // const DivEstilo = styled(DivHomeStyle)`
    // `
export default function Equipe({MudaNavegado}){
    return(
        <div onClick={(e)=>{{MudaNavegado(e)}}}>
            <Link to='/equipe'>
                <div>
                    <strong>02</strong> Equipe
                </div>
            </Link>
        </div>
    )
}
Equipe.propTypes={
    MudaNavegado:PropTypes.func.isRequired
}