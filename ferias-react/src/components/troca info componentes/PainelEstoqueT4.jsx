import {useState} from "react";
import FormularioCadastroT4 from "./FormularioCadastroT4";
import VitrineCardsT4 from "./VitrineCardsT4";


function PainelEstoqueT4() {
    const [listaCalcados, setListaCalcados] = useState([]);

    const cadastrarNovoItem = (novoObjeto) =>{
        setListaCalcados([...listaCalcados, novoObjeto])
        //o uso dos "..." serve para adicionar ao fim da lista ao inves de substituir
    }
    return (
        <div>
            <FormularioCadastroT4 avisarPai={cadastrarNovoItem}></FormularioCadastroT4>
            <VitrineCardsT4 produtosParaExibir={listaCalcados}></VitrineCardsT4>
        </div>
    )
} export default PainelEstoqueT4;