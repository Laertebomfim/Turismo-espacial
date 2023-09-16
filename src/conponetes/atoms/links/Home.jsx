import {Link} from 'react-router-dom'
import PropTypes from "prop-types"

    // export const DivHomeStyle = styled.span`
    //     color:#fff;
    //     font-family: "Bellefair";
    //     text-transform: uppercase;
    //     display: block;
    //     height: 100%;
    //     padding-top: 35px;
    // `
    // export const LinkEstilo = {
    //     textDecoration: "none",
    // }
export default function Home({MudaNavegado}){
    return(
        <div id='home' onClick={(e)=>{{MudaNavegado(e)}}}>
            <Link to='/'>
                <div> <strong>00</strong>  Home</div>
            </Link>
        </div>
    )
}
Home.propTypes={
    MudaNavegado:PropTypes.func.isRequired
}