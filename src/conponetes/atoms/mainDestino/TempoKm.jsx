import PropTypes from "prop-types"

export default function TempoKm({Titolo,informação}){
    return(
        <div className="pb-4">
            <strong className="font-Bellefair text-xl uppercase"> {Titolo}</strong>
            <p className="font-BarlowCondensed text-xl">{informação}</p>
        </div>
)
}
TempoKm.propTypes = {
    informação:PropTypes.string,
    Titolo:PropTypes.string
}