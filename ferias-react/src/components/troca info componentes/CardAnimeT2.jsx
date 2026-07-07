
function CardAnimeT2(props) {
    return (
        <div>
            <h3>{props.nomeAnime}</h3>
            <button onClick={props.AvisarPai} >Adc epsodio</button>
            <button onClick={props.AvisarPairm} >rmv epsodio</button>
        </div>
    )
}export default CardAnimeT2;