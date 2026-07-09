


function VitrineCardsT4(props) {
    const lista = props.produtosParaExibir.length === 0 ? true : false;

    return (
        <div>
            {lista &&(
                <p>Nenhum item foi adicionado!</p>
            )}

            {props.produtosParaExibir.map((calcado) => (
                <div key={calcado.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
                    <h3>{calcado.nome}</h3>
                    <p>Preço: R$ {calcado.preco}</p>
                </div>
            ))}


        </div>

    )
}export default VitrineCardsT4;