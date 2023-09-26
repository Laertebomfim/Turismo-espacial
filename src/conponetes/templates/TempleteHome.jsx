import { useNavigate } from "react-router-dom"
import Context from "../../createContext/Context"
import { useContext } from "react"
export default function TempleteHome(){
    const navega = useNavigate()

    const {setBackgroundPagina} = useContext(Context)
    const armazenaNamePagina = (nome)=>{
        sessionStorage.setItem("localPagina",nome)

        setBackgroundPagina(nome)
    }
    return(
        <main className="Movel overflow-auto lg:Desktop lg:flex lg:items-center">
            <section className="lg:flex lg:justify-between items-end lg:box-content  lg:w-full">
                <article className="px-4 mt-[20%] text-center md:px-16 max-w-[400px] mx-auto md:max-w-[600px] lg:m-0 lg:text-left">
                    <p className="font-BarlowCondensed font-light text-xl lg:text-3xl"> ENTÃO VOCÊ QUER VIAJAR PARA</p>
                    <h1 className="text-5xl my-4 font-Bellefair sm:text-8xl lg:text-9xl">SPACE</h1>
                    <p className="font-BarlowCondensed font-light text-md leading-6 lg:text-2xl"> Vamos encarar; se você quer ir para o espaço, pode muito bem ir genuinamente para o espaço sideral e não pairar no limite dele. Bem, sente-se e relaxe porque vamos dar-lhe uma experiência verdadeiramente fora deste mundo!</p>
                </article>
                <div onClick={()=>{navega("/destino/moon"),armazenaNamePagina("destino")}}
                className="flex justify-center absolute bottom-[5%] left-[50%] -translate-x-[50%] lg:relative lg:left-0 lg:top-0">
                    <p className=" bg-white text-black w-40 h-40 rounded-full flex justify-center items-center font-Bellefair text-xl hover:border-[20px] border-slate-700 lg:w-52 lg:h-52 lg:text-3xl lg:font-extrabold transition-[2s]">EXPLORE</p>
                </div>
            </section>
        </main>
    )
}
