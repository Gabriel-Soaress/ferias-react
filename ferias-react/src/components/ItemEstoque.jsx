import styles from '../modules/ItemEstoque.module.css'

function ItemEstoque(props) {

    //recebe um bool, se verdadeiro a classe vira disponivel, senao fica esgotada
    const classe = props.emEstoque ? styles.disponivel : styles.esgotado

    return (
        //{props.nome} puxa o nome do produto e dps verifica se tem estoque faz nada, senao adiciona o esgotado
        <p className={classe}>{props.nome} {!props.emEstoque && (<span> (Esgotado)</span>)}</p>

    )
}

export default ItemEstoque