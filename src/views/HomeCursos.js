import React from 'react'
import parse from 'html-react-parser'
import { HashLink as Link } from 'react-router-hash-link'

import store from '../store'

function HomeCursos(props) {

  const {cursos} = store.pages

  return (
    <section id="cursos" className="base cursos">
      <div className="title-box divider">
        <h2><Link to="/#cursos">Cursos Arte/Educação + Acessibilidade</Link></h2>
      </div>
      <div className="inside-content">
        <div>{parse(cursos.fulltext)}</div>
        <div>
          <p>&nbsp;</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSed_X76Il411qz_isWsDT_qN8tjJNfwAaDH6CvgvNShgUT63g/viewform" className="link-box" rel="noopener noreferrer" target="_blank">Faça sua inscrição</a>
        </div>
      </div>
    </section>
  );
}

export default HomeCursos;
