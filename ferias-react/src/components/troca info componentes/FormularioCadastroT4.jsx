import TrocaInfo2 from "./TrocaInfo2";
import {useState} from "react";


function FormularioCadastroT4(props){
    const [nomeInput, setNomeInput] = useState("");
    const [precoInput, setPrecoInput] = useState("");

    const cadastro = () =>{
        const objetoMontado = {id: Math.random(),nome: nomeInput, preco: precoInput};
        props.avisarPai(objetoMontado);
        setNomeInput("");
        setPrecoInput("");
    }


    return (
        <div>
            <h2>Formulario:</h2>
            <input placeholder="Nome" value={nomeInput} onChange={(event) => setNomeInput(event.target.value)}/>
            <input placeholder="Preco" value={precoInput} onChange={(event) => setPrecoInput(event.target.value)}/>
            <button onClick={cadastro}>salvar</button>
        </div>
    )
} export default FormularioCadastroT4;