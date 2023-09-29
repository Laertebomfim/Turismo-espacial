import DestinoDescriçao from "../atoms/titulo/DestinoDescriçao";
import Navega from "../organisms/NavInformação/Navega";
import Context from "../../createContext/Context";
import { useContext,useState } from "react";
import { TecnologiaInfor } from "../../Api";// local onde estar armazenado as informações da pagina

let arrayTecnologia =[]
let contado = 0
for(let Objeto in TecnologiaInfor){
    contado +=1
    arrayTecnologia.push({key:contado,nome:Objeto,boleano:contado === 1})
}// serve para organizar o que esta dentro do meu Api, para ser exibido na tela  

export default function TempleteTecnologia(){
    
    const {valorResize} = useContext(Context) // medida da tale 

    const [infomaçoesPagina,setInfomaçoesPagina] = useState(TecnologiaInfor.capsule)

    const MudaIformações = (nomeObjeto)=>{
        setInfomaçoesPagina(TecnologiaInfor[nomeObjeto])// muda de objeto de informações 
    }
    return(
        <main className="text-center">
            <DestinoDescriçao Numero="03" Texto="LANÇAMENTO ESPACIAL 101"/>
            <section className="md:relative md:top-[40vh] md:-translate-y-[50%] xl:flex xl:flex-row-reverse  xl:-mt-10 xl:text-left">
                <article className="self-start xl:relative xl:-top-10">
                    <div>
                        <img className="w-full max-h-[300px] xl:h-full xl:max-h-[450px] xl:max-w-[500px]" src={(valorResize > 1280 ? infomaçoesPagina.imgG :infomaçoesPagina.imgP )}></img>
                    </div>
                </article>
                <article className="px-4 max-w-[600px] mx-auto md:pb-10 xl:pb-0 xl:mb-0 xl:ml-32">
                    <div className="w-5/6 max-w-[370px] mx-auto xl:xl:ml-0">
                        <Navega arrayDeObjeto={arrayTecnologia} MudaIformações={MudaIformações} nomeurl="tecnologia"/>
                    </div>
                    <h2 className="md:text-xl pb-4">{"A TERMINOLOGIA..."}</h2>
                    <h1 className="text-2xl font-Bellefair font-bold text-slate-400 pb-4 md:text-3xl xl:text-4xl">{infomaçoesPagina.nome}</h1>
                    <p className="text-lg font-BarlowCondensed md:text-2xl">{infomaçoesPagina.texto}</p>
                </article>
            </section>
        </main>
    )
}