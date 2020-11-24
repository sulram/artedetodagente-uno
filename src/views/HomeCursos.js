import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeCursos(props) {

  const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSed_X76Il411qz_isWsDT_qN8tjJNfwAaDH6CvgvNShgUT63g/viewform`

  return (
    <section id="cursos" className="base cursos">
      <div className="title-box divider">
        <h2><Link to="/#cursos">Cursos Arte/Educação + Acessibilidade + Inclusão</Link></h2>
      </div>
      <div className="inside-content">
        <div>
          <p>Estão abertas as inscrições para uma nova turma do curso Arte/Educação, Tecnologia Assistiva e Deficiência, curso de capacitação para educadores oferecido pelo projeto Um Novo Olhar e que faz parte da série de cursos Arte/Educação + Acessibilidade + Inclusão.</p>
          <p>O curso irá abordar questões relacionadas à inclusão, através das artes, de alunos com deficiência no ambiente escolar, como: o modelo de educação inclusiva, a importância da arte/educação para promover a integração de alunos com e sem deficiência e a contribuição da tecnologia assistiva como facilitadora do processo de aprendizagem ou desenvolvimento de habilidades.</p>
          <p>O curso será realizado através do Ambiente Virtual de Aprendizagem da UFRJ, terá início em 07 de dezembro de 2020 e poderá ser concluído até 07 de fevereiro de 2021. As aulas são assíncronas e haverá emissão de certificado, com carga horária de 48h, para os cursistas que obtiverem aprovação através de avaliação sobre o conteúdo apresentado.</p>
          <p>&nbsp;</p>
          <a href={formUrl} className="link-box" rel="noopener noreferrer" target="_blank">Faça sua inscrição</a>
          &nbsp;<Link className="link-box" to="/noticias/PANORAMA-DA-ARTE-EDUCACAO-INCLUSIVA">Saiba mais</Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCursos;
