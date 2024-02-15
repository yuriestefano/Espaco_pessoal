import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import fotoMinha from 'assets/IMG_1089.JPEG'



export default function Banner(){

    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá,Mundo!
                </h1>
                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Yuri Estefano, No momento estou estudando React e outras tecnologias na Alura.
                </p>
            </div>
            <div className={styles.imagens}>
                
                <img className={styles.fotoMinha}
                src={fotoMinha}
                alt='Foto do Yuri Estefano'
                />
            

            </div>

        </div>
    )
}
