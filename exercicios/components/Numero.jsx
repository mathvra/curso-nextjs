import styles from '../styles/Numero.module.css'

export default function Numero(props){
    return(
        <div className={styles.numero}>
            <span className={styles.numeroTexto}>{props.numero}</span>
        </div>
    )
}