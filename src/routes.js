import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/paginaPadrao";
import Post from "paginas/Post";





function AppRoutes() {
return (
  <BrowserRouter>
  <Menu/> 

  <Routes>
    <Route path="/" element={<PaginaPadrao/>}>
       <Route index element={<Inicio/>}/>
       {/* o atributo index quer dizer que é o mesmo caminho 'path' do route pai */}
        <Route path="sobremim" element={<SobreMim/>}/>
        <Route path="posts/:id" element={<Post/>}/>

    </Route>
  
  <Route path="*" element={<div>pagina não encontrada</div>}/>

  </Routes>
  <Rodape/>
  </BrowserRouter>
);
}

export default AppRoutes;
