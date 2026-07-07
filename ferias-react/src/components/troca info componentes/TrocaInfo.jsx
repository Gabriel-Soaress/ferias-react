import {useState, useEffect} from 'react';
import CompInputT1 from "./CompInputT1";
import CompRender from "./CompRenderT1";

function TrocaInfo() {

    const [pessoa, setPessoa] = useState([])
    return (
        <div>
            <CompInputT1 avisarPai={setPessoa} ></CompInputT1>
            <CompRender textoExibir={pessoa} ></CompRender>
        </div>
    )
}export default TrocaInfo;