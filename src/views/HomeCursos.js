import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeCursos(props) {
  const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSe18DtIuh1zA3PPLFJ1IvOfiWupqvmwlza8Yo32TDjV5upfiA/viewform`

  return (
    <section id="cursos" className="base cursos">
      <div className="title-box divider">
        <h2><Link to="/#cursos">Artes Visuais + Educação + Acessibilidade + Decolonialismo</Link></h2>
      </div>
      <div className="inside-content">
        <div>
          <p>
            Estão abertas as inscrições para o curso Artes Integradas + Educação + Decolonialismo, destinado à capacitação de educadores. A atividade é oferecida pelo projeto Um Novo Olhar e faz parte da série de cursos Arte/Educação + Acessibilidade + Inclusão.
          </p>
          <p>
            Em seus seis módulos, o curso trata das relações entre a Acessibilidade Cultural e o Ensino das Artes Visuais no Brasil a partir de uma perspectiva não linear e não hegemônica. O conteúdo inclui questões como formação de públicos, acesso aos bens culturais, espaços de criação e protagonismo. O objetivo é tornar possível uma abordagem acessível e abrangente das concepções de educação formal, não formal e suas implicações no ensino das artes visuais na perspectiva decolonial. O foco estará nas implicações políticas da luta para a consolidação do ensino da arte na educação básica, valorização da arte como área de conhecimento e ampliação da acessibilidade cultural no Brasil.
          </p>
          <p>
            O curso será realizado através do Ambiente Virtual de Aprendizagem da UFRJ, terá início em 29 de março e poderá ser concluído até 23 de maio de 2021. As aulas são assíncronas e haverá emissão de certificado, com carga horária de 48h, para os cursistas que obtiverem aprovação através de avaliação sobre o conteúdo apresentado.
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
