import styles from '../modules/CardAnime.module.css'


function CardAnime(props) {
    const classe = props.novo
    const eps = props.eps > 100 ? '99+' : props.eps

    return (
        <div className={styles.cardAnime}>
            <h2>{props.titulo}</h2>
            <p>{eps}</p>

            {classe && (//se a const for true ele continua, senão ele para
                <p className={styles.novoAnime}>Novo</p>
            )}
        </div>
    )
}export default CardAnime;
