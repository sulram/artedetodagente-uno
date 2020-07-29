import React from 'react'
import parse from 'html-react-parser'

import store from '../store'

function Cursos() {

  const {cursos} = store.pages

  return (
    <section id="cursos" className="base cursos">
      <p>&nbsp;</p>
      <div className="inside-content">
        <div className="title-box">
          <h2>Cursos Arte/Educação + Acessibilidade</h2>
        </div>
        <div>{parse(cursos.fulltext.split("\n").join("<br/>"))}</div>
        <div>
          <p>&nbsp;</p>
          <span className="link-box">em breve</span>
        </div>
      </div>
    </section>
  );
}

export default Cursos;
