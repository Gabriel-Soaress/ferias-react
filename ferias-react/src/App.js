
import './App.css';

import PlacaDeVideo from "./components/PlacaDeVideo";
import CardAnime from "./components/CardAnime";
import ItemEstoque from "./components/ItemEstoque";
import FilmeCard from "./components/FilmeCard";
import TrocaInfo from "./components/troca info componentes/TrocaInfo";
import TrocaInfo2 from "./components/troca info componentes/TrocaInfo2";
import CaixaLojaT3 from "./components/troca info componentes/CaixaLojaT3";
import PainelEstoqueT4 from "./components/troca info componentes/PainelEstoqueT4";
import PainelLoja from "./components/EFFECT E API/PainelLoja.jsx";
import BiblioApp from "./components/EFFECT E API/BiblioApp";

function App() {
    const produtos = [
        { id: 1, nome: "Camisa Dry-Fit", emEstoque: true },
        { id: 2, nome: "Óculos de Ciclismo", emEstoque: false },
        { id: 3, nome: "Shorts de Corrida", emEstoque: true }
    ]

    const filmes = [
        { id: 1, nome: "Interestelar", nota: 95 },
        { id: 2, nome: "Dragon Ball Evolution", nota: 30 },
        { id: 3, nome: "Batman", nota: 62 }
    ]


    return (
      <div>
          {/* <PlacaDeVideo nome="RTX 5090" marca='nvidia' desc="uma placa de video maravilha incrivelmente boa" preco='500' />
          <PlacaDeVideo nome="RTX 5070" marca='nvidia' desc="uma placa de video maravilha incrivelmente boa" preco='400' />
          <CardAnime titulo="Naruto" eps={500} novo={true}></CardAnime>

          {produtos.map((produto) => (
              <ItemEstoque
                  key={produto.id}
                  nome={produto.nome}
                  emEstoque={produto.emEstoque}
              />
          ))}

          {filmes.map((filme) => (
            <FilmeCard nome={filme.nome} nota={filme.nota}></FilmeCard>
          ))}

          <TrocaInfo></TrocaInfo>
          <TrocaInfo2></TrocaInfo2>
          <CaixaLojaT3></CaixaLojaT3>
          <PainelEstoqueT4></PainelEstoqueT4>
          <PainelLoja></PainelLoja>*/}
          <BiblioApp></BiblioApp>
      </div>
  )
}

export default App;
