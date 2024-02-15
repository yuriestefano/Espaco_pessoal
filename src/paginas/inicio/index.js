import Banner from "componentes/Banner";
import Styles from "./inicio.module.css";

import posts from 'json/posts.json';
import Post from "componentes/Post";


export default function Inicio(){
    return(
        <main>
            <Banner/>
            <ul className={Styles.posts}>
                {posts.map((post)=>(
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))}
            </ul>
            
        </main>
    )

}