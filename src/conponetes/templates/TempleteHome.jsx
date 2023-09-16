import { useContext, useEffect } from "react"
import Contesto from "../../createContext/Conteto"
import MainHome from "../organisms/mainHome/MainHome"
import { 
    HomeDesktop,
    HomeTablet,
    HomeMobile,
  } from "../../Api"
export default function TempleteHome(){
    const {
        setBackgroundDesktop,
        setBackgroundTablet,
        setbackgroundMobile,
    } = useContext(Contesto)
    useEffect(()=>{
        setBackgroundDesktop(HomeDesktop)
        setBackgroundTablet(HomeTablet)
        setbackgroundMobile(HomeMobile)
    })
    return(
        <main>
            <MainHome/>
        </main>
    )
}