import React from 'react'
import parse from 'html-react-parser'
import { HashLink as Link } from 'react-router-hash-link'

import store from '../store'

function HomeCursos() {

  const {cursos} = store.pages

  return (
    <section id="cursos" className="base cursos">
      <div className="title-box divider">
        <h2><Link to="/#cursos">Cursos Arte/Educação + Acessibilidade</Link></h2>
      </div>
      <div className="inside-content">
        <div>{parse(cursos.fulltext)}</div>
        {/* <div>
          <p>&nbsp;</p>
          <span className="link-box">em breve</span>
        </div> */}
      </div>
    </section>
  );
}

export default HomeCursos;
