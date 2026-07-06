import styles from "../modules/FilmeCard.module.css"

function FilmeCard(props) {
    let classe,qld;
    if(props.nota >= 80){
        classe = styles.bom
        qld = 'Bom'
    }else if(props.nota <= 50){
        classe = styles.ruim
        qld = 'Ruim'
    }else{
        classe = styles.medio
        qld = 'Medio'
    }

    return (
        <div>
            <h3 className={styles.qld}>{props.nome}</h3>
            <p className={classe}>{props.nota} ({qld})</p>
        </div>
    )
}export default FilmeCard;