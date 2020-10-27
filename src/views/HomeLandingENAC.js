import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeLandingENAC() {
  return (
    <section id="enac" className="base enac">

      <div className="title-box divider">
        <h2><Link to="/#enac">VIII Encontro Nacional de Acessibilidade Cultural - ENAC</Link></h2>
      </div>
      <div className="content">
        <div>
          <p>&nbsp;</p>
          <p><img src="/img/uno-enac.png" alt="VIII ENAC"/></p>
          <p>&nbsp;</p>
          <p>O projeto <strong>Um Novo Olhar</strong> é um dos realizadores do <strong>VIII Encontro Nacional de Acessibilidade Cultural – ENAC</strong>.</p>
          <p>O <strong>ENAC</strong> é uma iniciativa do Laboratório Arte, Cultura, Acessibilidade e Saúde - LACAS do Departamento de Terapia Ocupacional da Faculdade de Medicina da UFRJ.  O LACAS é parceiro do projeto Um Novo Olhar, da Escola de Música da UFRJ e FUNARTE.</p>
          <p>Neste <strong>VIII ENAC</strong>, mesmo realizado de forma virtual, mantemos suas características básicas que compõe a programação: oficinas, rodas de conversa, apresentação de trabalhos e a realização de um seminário central e apresentação artística com artistas com deficiência.</p>
          <p>O <strong>VIII ENAC</strong> ocorrerá entre os dias <strong>30 de novembro a 04 de dezembro de 2020</strong>, através de uma rede colaborativa entre as diferentes instituições parceiras.</p>
          <p>Participe e divulgue! Fique atento as notícias e cronogramas de apresentação de trabalhos!</p>
          <p>&nbsp;</p>
          <p>
            <a
              className="link-box"
              href="https://enac8.wordpress.com/"
              title="Acesse o site"
              rel="noopener noreferrer"
              target="_blank" >
                Acesse o site
            </a>
          </p>
          
        </div>
      </div>
    </section>
  );
}

export default HomeLandingENAC;
