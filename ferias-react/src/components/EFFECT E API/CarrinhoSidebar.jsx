import {useState} from "react";

function CarrinhoSidebar(props) {
     const vazio = (props.itensNoCarrinho.length === 0) ? true : false;
     const proCar = props.itensNoCarrinho

    const totalCalculado = proCar.reduce((acumulador, produto) => {
        return acumulador + produto.download_count;
    }, 0);

    return (
          <div>
              {vazio &&(
                  <h2>Seu carrinho ta vazio!</h2>
              )}

              {proCar.map(produto => (
                  <div key={produto.id}>
                      <h3>{produto.title}</h3>
                      <p>{produto.download_count}</p>

                  </div>
              ))}

              <h4>Total: {totalCalculado}</h4>


         </div>
    )
 }export default CarrinhoSidebar;