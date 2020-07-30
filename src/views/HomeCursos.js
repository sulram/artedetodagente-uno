import React from 'react'
import parse from 'html-react-parser'
import { HashLink as Link } from 'react-router-hash-link'

import store from '../store'

function HomeCursos() {

  const {cursos} = store.pages

  return (
    <section id="cursos" className="base cursos">
      <p>&nbsp;</p>
      <div className="inside-content">
        <div className="title-box">
          <h2><Link to="/#cursos">Cursos Arte/Educação + Acessibilidade</Link></h2>
        </div>
        <div>{parse(cursos.fulltext.split("\n").join("<br/>"))}</div>
        {/* <div>
          <p>&nbsp;</p>
          <span className="link-box">em breve</span>
        </div> */}
      </div>
    </section>
  );
}

export default HomeCursos;
