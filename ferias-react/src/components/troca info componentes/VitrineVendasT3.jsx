
function VitrineVendasT3(props) {
    return (
        <div>
            <h2>{props.nomeP}</h2>
            <p> <span>R$:</span>{props.valorP}</p>
            <button onClick={()=> props.RegVenda(props.valorP)}>Venda</button>
        </div>
    )
}export default VitrineVendasT3;