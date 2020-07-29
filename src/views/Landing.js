import React from 'react'


function Landing() {
  return (
    <section className="base landing">

      <div className="title-box">
        <h2>Encontro um novo olhar de arte/educação + acessibilidade</h2>
      </div>

      <div className="title">
        <h3>5 e 6 de agosto de 2020</h3>
      </div>

      <div className="cols">
        <div>
          <p>Transmissão ao vivo:</p>
          <ul>
            <li>
              <a href="https://www.facebook.com/Um-Novo-Olhar-100828528394867/" rel="noopener noreferrer" target="_blank" title="facebook">
                <span><img src="/img/icons/facebook.svg" width="24px" alt="facebook" /></span>
                <span>facebook.com/Um-Novo-Olhar</span>
              </a>
            </li>
            <li>
              <a href="https://youtube.com/artedetodagente" rel="noopener noreferrer" target="_blank" title="youtube">
                <span><img src="/img/icons/youtube.svg" width="24px" alt="youtube" /></span>
                <span>youtube.com/artedetodagente</span>
              </a>
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <a
              className="link-box"
              href="https://forms.gle/knLRKvuzuqezeG6s5"
              title="Faça a sua inscrição"
              rel="noopener noreferrer"
              target="_blank" >
                Faça a sua inscrição
            </a>
          </p>
        </div>
        <div>
          <p><img src="/img/landing-libras.png" width="60" alt="libras" /></p>
        </div>
      </div>

      <p>&nbsp;</p>

      <div className="cols">
        <div>
          <p>Acompanhe:</p>
          <ul>
            <li>
              <a href="https://instagram.com/umnovoolhar.art.br" rel="noopener noreferrer" target="_blank" title="facebook">
                <span><img src="/img/icons/instagram.svg" width="24px" alt="instagram" /></span>
                <span>instagram.com/umnovoolhar.art.br</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>Realização:</p>
          <p><img src="/img/uno-marcas-amarelo.jpg" alt="UFRJ 100 anos, Escola de Música da UFRJ, Fundação Universitária José Bonifácio, FUNARTE, Ministério do Turismo, Governo Federal" /></p>
        </div>
      </div>

    </section>
  );
}

export default Landing;
