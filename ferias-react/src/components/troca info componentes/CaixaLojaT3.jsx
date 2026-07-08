import {useState} from 'react';
import VitrineVendasT3 from "./VitrineVendasT3";
import PainelSaldo from "./PainelSaldo";


function CaixaLojaT3() {
    const [saldoCaixa, setSaldoCaixa] = useState(0);

    const registrarVenda = (valorP) =>{
        setSaldoCaixa(saldoCaixa + valorP);
    }

    const produto = [
        {nome: "Camisa Dry-Fit", preco:50 },
        {nome: "tênis", preco:100 },
        {nome: "meia", preco:25 }
    ]
     return (
         <div>
             {produto.map((produto) => (
                 <VitrineVendasT3
                     nomeP={produto.nome}
                     valorP={produto.preco}
                     RegVenda={registrarVenda}
                 />
             ))}
            <PainelSaldo Saldo={saldoCaixa}></PainelSaldo>
         </div>
     )
}export default CaixaLojaT3;