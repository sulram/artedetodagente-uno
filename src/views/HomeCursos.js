import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeCursos(props) {
  const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfHnheqwxh4D0sNNMyqMpgLRluoVH6zRLVZP0X4VpkXJi30xw/viewform`

  return (
    <section id="cursos" className="base cursos">
      <div className="title-box divider">
        <h2><Link to="/#cursos">Cursos Arte/Educação + Acessibilidade + Inclusão</Link></h2>
      </div>
      <div className="inside-content">
        <div>
          <p>
            Estão abertas as inscrições para o curso Artes Integradas + Educação + Acessibilidade, curso de capacitação para educadores oferecido pelo projeto Um Novo Olhar e que faz parte da série de cursos Arte/Educação + Acessibilidade + Inclusão.
          </p>
          <p>
            Por meio da conexão entre diferentes linguagens e práticas o curso irá investigar caminhos possíveis para a concepção de projetos educativos e artísticos acessíveis e inclusivos. Percorrendo a pesquisa e a obra de artistas com deficiência, o curso “Artes Integradas + Educação + Acessibilidade” propõe a reflexão sobre nossas condutas dentro e fora da sala de aula e quais são as transformações necessárias para passarmos a compreender o que é normalmente entendido como limitação, como potencialidade.
          </p>
          <p>
            O curso será realizado através do Ambiente Virtual de Aprendizagem da UFRJ, terá início em 08 de fevereiro e poderá ser concluído até 04 de abril de 2021. As aulas são assíncronas e haverá emissão de certificado, com carga horária de 48h, para os cursistas que obtiverem aprovação através de avaliação sobre o conteúdo apresentado.
          </p>
          <p>&nbsp;</p>
          <a 
            href={formUrl} 
            className="link-box" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            Faça sua inscrição
          </a>
          &nbsp;<Link className="link-box" to="/noticias/Inscricoes-para-nosso-segundo-curso!">Saiba mais</Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCursos;
