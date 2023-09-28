import DestinoDescriçao from "../atoms/mainDestino/DestinoDescriçao";
import NavEquipe from "../organisms/mainEquipe/NavEquipe";
import { useState } from "react";
import { InfomacoesEquipe } from "../../Api"; // local onde estar armazenado as informações da pagina


export default function TempleteEquipe(){
    const [infomaçoesPagina,setinfomaçoesPagina] = useState(InfomacoesEquipe["shuttleworth"])

    const MudaIformações = (nomeObjeto)=>{
        setinfomaçoesPagina(InfomacoesEquipe[nomeObjeto])// muda de objeto de informações 
    }


    return(
        <main className="text-center xl:text-left">

            <DestinoDescriçao Numero="02" Texto="Conheça sua tripulação"/>

            <section className=" px-6 md:flex md:flex-col-reverse md:justify-between md:fixed md:bottom-0 md:h-[80%] md:w-full xl:flex-row-reverse xl:pl-32">
                <article className="xl:self-end">
                    <div className="min-w-[110px] w-2/5 h-2/5 xl:w-9/12 mx-auto xl:mx-0">
                        <img src={infomaçoesPagina.img} alt="" />
                    </div>
                        <hr className="border-slate-600 border-[2px] block md:hidden"></hr>
                </article>

                <article className="md:flex md:flex-col-reverse self-center">

                    <div className=" py-5 mx-auto md:mx-0 md:py-10 xl:pt-32">
                        <NavEquipe MudaIformações={MudaIformações}/>
                    </div>

                    <article className="md:w-[550px] md:mx-auto">
                        <div>
                            <p className="text-lg md:text-2xl text-slate-400 font-Bellefair uppercase">{infomaçoesPagina.Proficão}</p>
                            <h1 className="text-3xl md:text-5xl font-Bellefair uppercase font-bold py-4">{infomaçoesPagina.nome}</h1>
                        </div>
                        <div>
                            <p className="text-md md:text-xl font-BarlowCondensed  pb-5 md:pb-0">{infomaçoesPagina.texto}</p>
                        </div>
                    </article>
                </article>
            </section>
        </main>
    )
}