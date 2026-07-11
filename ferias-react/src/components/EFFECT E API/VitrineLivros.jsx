import {useState, useEffect} from "react";

function VitrineLivros(props){
    const [livros, setLivros] = useState([]);
    const [carregando, setCarregando] = useState(true);

    // useEffect para buscar os dados assim que a vitrine nasce
    useEffect(() => {
        const buscaDados = async () => {
            try{
                const resposta = await fetch('https://gutendex.com/books/?ids=11,12,13,16,17,20');
                const dados = await resposta.json();
                setLivros(dados.results);
            } catch(erro) {
                console.log("Erro na busca: ", erro);
            } finally {
                setCarregando(false);
            }
        }
        buscaDados();
    }, []);

    return (
        <div>
            {carregando && (
                <h2>Carregando acervo do IFSP... 📚</h2>
            )}

            {/* Grid layout para deixar os livros lado a lado */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {livros.map(livro => (
                    <div key={livro.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '15px', width: '220px', textAlign: 'center' }}>

                        {/* Bônus: Puxando a imagem do objeto da API */}
                        <img
                            src={livro.formats['image/jpeg']}
                            alt={livro.title}
                            style={{ height: '200px', objectFit: 'cover', borderRadius: '5px' }}
                        />

                        <h3 style={{ fontSize: '1.1rem', margin: '15px 0 5px 0' }}>{livro.title}</h3>
                        <p style={{ color: '#28a745', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            R$ {livro.download_count}
                        </p>

                        {/*
                            A MÁGICA ACONTECE AQUI:
                            A função de walkie-talkie enviando o objeto 'livro' inteiro pro Pai
                        */}
                        <button
                            onClick={() => props.funcaoAvisarPai(livro)}
                            style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', width: '100%' }}
                        >
                            Comprar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}export default VitrineLivros;