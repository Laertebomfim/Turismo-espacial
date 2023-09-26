import { useState } from "react";
import DestinoDescriçao from "../atoms/mainDestino/DestinoDescriçao";
import NavPleneta from "../molecules/mainDestino/NavPleneta";
import {DestinoPranetas} from "../../Api"// onde fica as img dos planetas é as informações deles 
import TempoKm from "../atoms/mainDestino/TempoKm";


export default function TempleteDestino(){

    const [urlImg,setUrlImg] = useState(DestinoPranetas.moon)

    const MudaIformações = (nomeObjeto)=>{
        setUrlImg(DestinoPranetas[nomeObjeto])// muda de objeto de informações 
    }
    return (
        <main className="text-center lg:Desktop overflow-auto ">
                <DestinoDescriçao Numero={"01"} Texto={"Escolha seu destino"}/>
            <section className=" lg:flex lg:justify-between items-center">
                
                <article className="lg:w-2/4">
                    <img className="w-2/5 min-w-[190px] max-w-[300px] inline-block animate-planeta lg:w-full" src={urlImg.img} alt="" />
                </article>
                <div className="lg:w-2/4">

                <article className="p-4 sm:px-16 sm:pb-16 lg:text-left lg:pt-0 lg:pb-10">
                    <NavPleneta MudaIformações={MudaIformações}/>
                    <h1 className="text-6xl capitalize font-Bellefair lg:text-8xl">{urlImg.nome}</h1>
                    <p className="font-BarlowCondensed text-lg leading-6 lg:text-xl">{urlImg.texto}</p>
                </article>
                <hr className="border-slate-500 border-t-2 w-10/12 mx-auto pt-4 sm:mb-8"/>
                <article className="sm:flex sm:justify-center gap-10">
                    <TempoKm Titolo="AVG. DISTÂNCIA" informação={urlImg.distancia}/>
                    <TempoKm Titolo="tempo de viagem" informação={urlImg.Tempo}/>
                </article>
                </div>
            </section>

        </main>
      );
}