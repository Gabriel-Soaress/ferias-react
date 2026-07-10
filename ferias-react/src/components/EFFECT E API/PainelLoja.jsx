import {useEffect, useState} from "react";


function PainelLoja(){
    const [produtos, setProdutos] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(()=>{

        const buscarDados = async () => {
            try{
                //pega os dados da api
                const resposta = await fetch("https://fakestoreapi.com/products")
                //converte em json
                const dados = await resposta.json()
                //joga no array
                setProdutos(dados);
            }catch (erro){
                console.log("Erro na busca: ",erro)
            }finally{
                setCarregando(false)
            }
        }
        buscarDados();

    },[]);




    return (
        <div>
            {carregando &&(<h2>Carregando...</h2>)};

            {produtos.map(produto => (
                <div key={produto.id}>
                    <h3>{produto.title}</h3>
                    <p>U${produto.price}</p>
                    <p>{produto.description}</p>
                    <img src={produto.image} width="100" />
                </div>
            ))}
        </div>

    )
} export default PainelLoja;