// icons
import IconFecha from "../src/recucos/Icons/IconClose.svg"
import IconHamburger from "../src/recucos/Icons/IconHamburger.svg"
import Logo from "../src/recucos/Icons/Logo.svg"
// imagem de fundo Home 
import HomeDesktop from "../src/recucos/capa/home/HomeDesktop.jpg"
import HomeTablet from"../src/recucos/capa/home/HomeTablet.jpg"
import HomeMobile from "../src/recucos/capa/home/HomeMobile.jpg"

// imagem de fumdo Destino
import DestinoDesktop from "../src/recucos/destino/background-destination-desktop.jpg"
import DestinoTablet from "../src/recucos/destino/background-destination-tablet.jpg"
import DestinoMobile from "../src/recucos/destino/background-destination-mobile.jpg"
// imagem de fumdo Equipe
import EquipeDesktop from "../src/recucos/Equipe/background-crew-desktop.jpg"
import EquipeTablet from "../src/recucos/Equipe/background-crew-tablet.jpg"
import EquipeMobile from "../src/recucos/Equipe/background-crew-mobile.jpg"
// imagem de fumgo Tecnologia
import TecnologiaDesktop from "../src/recucos/tecnologia/background-technology-desktop.jpg"
import TecnologiaTablet from "../src/recucos/tecnologia/background-technology-tablet.jpg"
import TecnologiaMobile from "../src/recucos/tecnologia/background-technology-mobile.jpg"
// imagem Plenatas
import ImgMoon from"../src/recucos/destino/image-moon.png"
import ImgMars from"../src/recucos/destino/image-mars.png"
import ImgEuropa from "../src/recucos/destino/image-europa.png"
import ImgTitan from "../src/recucos/destino/image-titan.png"
// imagem Equipe
import ImgAnsari from "../src/recucos/Equipe/ansari.png"
import ImgGlover from "../src/recucos/Equipe/glover.webp"
import ImgHurley from "../src/recucos/Equipe/hurley.png"
import ImgShuttleworth from "../src/recucos/Equipe/shuttleworth.webp"
// img tecnologia
import ImgCapsulePequena from "../src/recucos/tecnologia/capsule-landscape.jpg"
import ImgCapsuleGrande from "../src/recucos/tecnologia/capsule-landscape.jpg"
import ImgSpaceportPequena from "../src/recucos/tecnologia/spaceport-landscape.jpg"
import ImgSpaceportGrande from "../src/recucos/tecnologia/spaceport-portrait.jpg"
import ImgVehiclePequena from "../src/recucos/tecnologia/vehicle-landscape.jpg"
import ImgVehicleGrande from "../src/recucos/tecnologia/vehicle-portrait.jpg"
const DestinoPranetas ={
    moon:{
        img:"../public/recursos/destino/image-moon.png",
        nome:"moon",
        texto:"Veja nosso planeta como você nunca viu antes. Uma viagem relaxante perfeita para ajudar a recuperar a perspectiva e voltar revigorado. Enquanto estiver lá, conheça um pouco da história visitando os locais de pouso da Luna 2 e da Apollo 11.",
        distancia:"384,400 km",
        Tempo:"3 dias",
    },
    mars:{
        img:"../public/recursos/destino/image-mars.png",
        nome:"mars",
        texto:"Não se esqueça de levar suas botas de caminhada. Você precisará deles para enfrentar o Olympus Mons, a montanha planetária mais alta do nosso sistema solar. É duas vezes e meia o tamanho do Everest!",
        distancia:"225 MIL. km",
        Tempo:"9 meses",
    },
    europa:{
        img:"../public/recursos/destino/image-europa.png",
        nome:"europa",
        texto:"A menor das quatro luas galileanas que orbitam Júpiter, Europa é o sonho de um amante do inverno. Com uma superfície gelada, é perfeito para patinar no gelo, curling, hóquei ou simplesmente relaxar em sua confortável cabana de inverno.",
        distancia:"628 MIL. km",
        Tempo:"3 anos",
    },
    titan:{
        img:"../public/recursos/destino/image-titan.png",
        nome:"titan",
        texto:"A única lua conhecida por ter uma atmosfera densa além da Terra, Titã é um lar longe de casa (apenas algumas centenas de graus mais frio!). Como bônus, você obtém vistas impressionantes dos Anéis de Saturno.",
        distancia:"1.6 BIL. km",
        Tempo:"7 anos",
    }
}
const InfomacoesEquipe ={
    shuttleworth:{
        img:"../public/recursos/Equipe/shuttleworth.webp",
        nome:"MARK SHUTTLEWORTH",
        Proficão:"Especialista em missão",
        texto:"Mark Richard Shuttleworth é o fundador e CEO da Canonical, a empresa por trás do sistema operacional Ubuntu baseado em Linux. Shuttleworth se tornou o primeiro sul-africano a viajar para o espaço como turista espacial."
    },
      glover:{
        img:"../public/recursos/Equipe/glover.webp",
        nome:"Victor Glover",
        Proficão:"PILOTO",
        texto:"Piloto no primeiro voo operacional do SpaceX Crew Dragon para a Estação Espacial Internacional. Glover é um comandante da Marinha dos Estados Unidos, onde pilota um F/A-18. Ele foi membro da tripulação da Expedição 64 e serviu como engenheiro de vôo de sistemas de estação."
    },
    hurley:{
        img:"../public/recursos/Equipe/hurley.png",
        nome:"Douglas Hurley",
        Proficão:"Comandante",
        texto:"Douglas Gerald Hurley é um engenheiro americano, ex-piloto do Corpo de Fuzileiros Navais e ex-astronauta da NASA. Ele se lançou ao espaço pela terceira vez como comandante do Crew Dragon Demo-2."
    },
    ansair:{
        img:"../public/recursos/Equipe/ansari.png",
        nome:"Anousheh Ansari",
        Proficão:"Engenheiro de voo",
        texto:"Anousheh Ansari é uma engenheira iraniana-americana e cofundadora da Prodea Systems. Ansari foi a quarta turista espacial autofinanciada, a primeira mulher autofinanciada a voar para a ISS e a primeira iraniana no espaço."
    }
}
const TecnologiaInfor={
    capsule:{
        imgG:"../public/recursos/tecnologia/capsule-portrait.jpg",
        imgP:"../public/recursos/tecnologia/capsule-landscape.jpg",
        nome:"CÁPSULA ESPACIAL",
        texto:"Uma cápsula espacial é uma espaçonave frequentemente tripulada que usa uma cápsula de reentrada de corpo rombudo para reentrar na atmosfera da Terra sem asas. Nossa cápsula é onde você passará seu tempo durante o voo. Inclui um ginásio espacial, cinema e muitas outras atividades para o manter entretido.",
    },
    spaceport:{
        imgG:"../public/recursos/tecnologia/spaceport-portrait.jpg",
        imgP:"../public/recursos/tecnologia/spaceport-landscape.jpg",
        nome:"ESPAÇOPORTO",
        texto:"Um espaçoporto ou cosmódromo é um local para lançamento (ou recebimento) de espaçonaves, por analogia com o porto marítimo para navios ou aeroporto para aeronaves. Com sede no famoso Cabo Canaveral, nosso espaçoporto está idealmente situado para aproveitar a rotação da Terra para o lançamento.",
    },
    vehicle:{
        imgP:"../public/recursos/tecnologia/vehicle-landscape.jpg",
        imgG:"../public/recursos/tecnologia/vehicle-portrait.jpg",
        nome:"VEÍCULO DE LANÇAMENTO",
        texto:"Um veículo de lançamento ou foguete transportador é um veículo movido a foguete usado para transportar uma carga útil da superfície da Terra para o espaço, geralmente para a órbita da Terra ou além. Nosso foguete transportador WEB-X é o mais poderoso em operação. Com 150 metros de altura, é uma visão bastante inspiradora no lançamento",
    },
}
export{
    IconFecha,
    IconHamburger,
    Logo,
    HomeDesktop,
    HomeTablet,
    HomeMobile,
    DestinoDesktop,
    DestinoTablet,
    DestinoMobile,
    DestinoPranetas,
    EquipeDesktop,
    EquipeTablet,
    EquipeMobile,
    InfomacoesEquipe,
    TecnologiaDesktop,
    TecnologiaTablet,
    TecnologiaMobile,
    TecnologiaInfor,
}