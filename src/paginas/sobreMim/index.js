import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from './sobreMim.module.css'
import fotoSobremim from "assets/sobre_mim_foto.png"


export default function SobreMim(){
    return(
        
        <PostModelo fotoCapa={fotoCapa} 
        titulo={"Sobre Mim"}
        
        
        >
            <h3 className={styles.subtitulo}>
                Olá, Eu sou Yuri

            </h3>

            <img 
            src={fotoSobremim}
            alt
            
            />
            
           

            
        </PostModelo>
    )
}