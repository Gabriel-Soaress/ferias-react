import styles from '../modules/PlacaDeVideo.module.css'


function PlacaDeVideo(props) {
    return (
        <div className={styles.card}>
            <h2 className={styles.nome}>{props.nome}</h2>
            <p className={styles.marca}>{props.marca}</p>
            <p className={styles.desc}>{props.desc}</p>
            <p className={styles.preco}><span>R$:</span>{props.preco}</p>
        </div>
    )
}export default PlacaDeVideo;