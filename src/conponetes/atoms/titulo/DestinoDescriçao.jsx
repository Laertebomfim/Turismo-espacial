import PropTypes from "prop-types"

export default function DestinoDescriçao({Numero,Texto}){
    return(
        <p className="font-BarlowCondensed uppercase font-medium text-xl my-8 sm:ml-8 sm:text-left sm:mb-20 lg:ml-32 lg:mb-10">
            <strong className="pr-4 text-[#707070]">{Numero}</strong>
            {Texto}
        </p>
    )
}
DestinoDescriçao.propTypes = {
    Numero:PropTypes.string.isRequired,
    Texto:PropTypes.string.isRequired
}