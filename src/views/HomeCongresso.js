import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeCongresso() {
  return (
    <section id="congresso" className="base congresso">

      <div className="title-box divider">
        <h2><Link to="/#congresso">I Congresso Internacional de Música Coral Infantojuvenil</Link></h2>
      </div>
      {/* 
      <div className="title">
        <h3>5 e 6 de agosto de 2020</h3>
      </div>
      */}
      <div className="content">
        <div>
          <p>Nos dias 15, 16, 17 e 18 de outubro, será realizado o <strong>I CONGRESSO INTERNACIONAL DE MÚSICA CORAL INFANTOJUVENIL UM NOVO OLHAR - CIMUCI</strong>.</p>
          <p>Seus principais objetivos são: incentivar as reflexões sobre os caminhos plurais da atividade coral, voltada para o público infantojuvenil; dar a oportunidade de divulgação de trabalhos e pesquisas que vem sendo desenvolvidas; ampliar o intercâmbio entre as diferentes instituições que desenvolvem trabalhos voltados para esse público, em âmbito nacional e internacional.</p>
          <p>&nbsp;</p>
          <p>
            <Link
              className="link-box"
              to="/congresso-internacional">
                Saiba mais
            </Link>
            &nbsp; 
            <a
              className="link-box"
              href="https://www.e-inscricao.com/cimuci/2020/"
              title="Faça sua inscrição"
              rel="noopener noreferrer"
              target="_blank" >
                Faça sua inscrição
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeCongresso;
