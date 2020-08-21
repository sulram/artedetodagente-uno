import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import useWindowSize from '../util/useWindowSize'



function Menu(props) {
  
  const size = useWindowSize()

  function scroll (el,w) {
    const offset = w > 1024 ? 150 : 95
    window.scrollTo({ top: el.offsetTop  - offset, left: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* {props.home ? <li><Link to="/">Home</Link></li> : <></>} */}
      <li><Link onBlur={props.onblur} onFocus={props.onfocus} to="/projeto">O Projeto</Link></li>
      <li><Link onBlur={props.onblur} onFocus={props.onfocus} to="/videos/apresentacoes">Apresentações</Link></li>
      <li><Link onBlur={props.onblur} onFocus={props.onfocus} to="/videos/palestras">Palestras</Link></li>
      <li><Link onBlur={props.onblur} onFocus={props.onfocus} smooth scroll={el => scroll(el,size.width)} to="/#cursos">Cursos</Link></li>
      <li><Link onBlur={props.onblur} onFocus={props.onfocus} to="/projetos/oficinasderegencia">Oficinas de Regência</Link></li>
      <li><Link onBlur={props.onblur} onFocus={props.onfocus} to="/projetos/repertorio-coral">Repertório Coral</Link></li>
      {/* <li><Link to="/publicacoes">Publicações</Link></li> */}
      <li><Link to="/noticias">Notícias</Link></li>
      {/* <li><Link to="/galeria">Galeria</Link></li> */}
      <li><Link onBlur={props.onblur} onFocus={props.onfocus} to="/parceiros">Parceiros</Link></li>
      <li><Link onBlur={props.onblur} onFocus={props.onfocus} to="/imprensa">Imprensa</Link></li>
    </>
  );
}

export default Menu;