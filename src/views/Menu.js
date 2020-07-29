import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Menu(props) {
  return (
    <>
      {/* {props.home ? <li><Link to="/">Home</Link></li> : <></>} */}
      <li><Link to="/projeto">O Projeto</Link></li>
      <li><Link smooth to="/videos/apresentacoes">Apresentações</Link></li>
      <li><Link smooth to="/videos/palestras">Palestras</Link></li>
      <li><Link smooth to="/#cursos">Cursos</Link></li>
      {/* <li><Link smooth to="/videos/oficinasderegencia">Oficinas de Regência</Link></li> */}
      <li><Link smooth to="/videos/repertorio-coral">Repertório Coral</Link></li>
      {/* <li><Link smooth to="/publicacoes">Publicações</Link></li> */}
      {/* <li><Link smooth to="/noticias">Notícias</Link></li> */}
      {/* <li><Link smooth to="/galeria">Galeria</Link></li> */}
      <li><Link smooth to="/parceiros">Parceiros</Link></li>
      <li><Link smooth to="/imprensa">Imprensa</Link></li>
    </>
  );
}

export default Menu;