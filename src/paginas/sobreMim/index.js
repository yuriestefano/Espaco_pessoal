import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from './sobreMim.module.css'
import fotoSobreMim from "assets/sobre_mim_foto.png"


export default function SobreMim() {
    return (

        <PostModelo fotoCapa={fotoCapa}
            titulo={"Sobre Mim"}


        >
            <h3 className={styles.subtitulo}>
                Olá, Eu sou Yuri

            </h3>

            <img
                src={fotoSobreMim}
                alt='foto Yuri'
                className={styles.fotoSobreMim}

            />
            <p className={styles.paragrafo} >Oi, tudo bem? Eu sou instrutor de Front-end na Alura e estou feliz de te ver por aqui.</p>

            <p className={styles.paragrafo}>Minha história com programação começou no Instituto Federal do Piauí (IFPI), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.</p>
            <p className={styles.paragrafo}>
    
                No ensino superior, escolhi cursar Engenharia Elétrica na Universidade Federal do Piauí (UFPI). Lá eu consegui entrar no PET (Programa de Educação Tutorial), um grupo acadêmico que contribui de diversas formas para o curso. Lá eu tive a oportunidade de estudar desenvolvimento web para ser um dos mantenedores do site deles.
            </p>





        </PostModelo>
    )
}