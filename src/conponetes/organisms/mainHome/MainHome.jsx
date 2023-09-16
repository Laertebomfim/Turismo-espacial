import Premisa from "../../molecules/mainHome/Premisa"
import { Link } from "react-router-dom"

// import { styled,} from "styled-components"
//     const StyleSection = styled.main`
//         text-align: center;
//         width: 100%; 
//         height: auto;
//         overflow: auto;
//         @media screen and (min-width:990px){
//             margin-top:150px ;
//         }
//     `
export default function MainHome(){
    return(
        <section>
            <Premisa/>
            <article>
                <Link to={"/destino"}>
                    <div>explora</div>
                </Link>
            </article>
        </section>
    )
}
