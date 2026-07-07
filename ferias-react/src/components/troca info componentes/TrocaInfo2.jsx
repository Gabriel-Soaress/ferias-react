import {useState} from 'react'
import CardAnimeT2 from "./CardAnimeT2";

function TrocaInfo2() {
    const [totalAssistido, setTotalAssistido] = useState(0)

    const assistirEpsodio = (nomeAnime) =>{
        setTotalAssistido(totalAssistido + 1);
    }

    const rmvEpsodio = (nomeAnime) =>{
        setTotalAssistido(totalAssistido - 1);
    }

    return(
        <div>
            <h1>Total ep assistidos: {totalAssistido}</h1>
            <CardAnimeT2 nomeAnime="Jujutso" AvisarPai={assistirEpsodio} AvisarPairm={rmvEpsodio}></CardAnimeT2>


        </div>
    )
}export default TrocaInfo2;