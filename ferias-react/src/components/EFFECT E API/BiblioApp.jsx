import React, { useState, useEffect } from "react";
import VitrineLivros from "./VitrineLivros";
import CarrinhoSidebar from "./CarrinhoSidebar";

function BiblioApp() {
    // 1. Estado Elevado: O carrinho vive aqui no Pai
    const [carrinho, setCarrinho] = useState([]);

    // 2. A função que altera o estado e será repassada (O Walkie-Talkie)
    const adicionarAoCarrinho = (livroClicado) => {
        // Pega tudo que já tinha no carrinho e acrescenta o livro novo
        setCarrinho([...carrinho, livroClicado]);
    };

    return (
        <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <header style={{ marginBottom: '30px', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
                <h1>🎓 Sistema Integrado IFSP - Biblioteca & Cantina</h1>
            </header>

            {/* Layout dividido em duas colunas (70% Vitrine / 30% Carrinho) */}
            <div style={{ display: 'flex', gap: '30px' }}>

                <main style={{ flex: 7 }}>
                    {/* Passamos a função pro filho 1 */}
                    <VitrineLivros funcaoAvisarPai={adicionarAoCarrinho} />
                </main>

                <aside style={{ flex: 3 }}>
                    {/* Passamos o estado (array) pro filho 2 */}
                    <CarrinhoSidebar itensNoCarrinho={carrinho} />
                </aside>

            </div>
        </div>
    );
}

export default BiblioApp;