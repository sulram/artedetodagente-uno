import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Footer(props) {

  return (
    <footer className="footer">
      <div className="footer-1">
        <div className="footer-col social">
          <h3>Social</h3>
          <a href="https://instagram.com/umnovoolhar.art.br" rel="noopener noreferrer" target="_blank" title="Instagram">
            <img width="20" src="/img/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://facebook.com/umnovoolhar" rel="noopener noreferrer" target="_blank" title="Facebook">
            <img width="20" src="/img/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://www.youtube.com/artedetodagente" rel="noopener noreferrer" target="_blank" title="Youtube">
            <img width="20" src="/img/icons/youtube.svg" alt="Youtube" />
          </a>
        </div>
        <div className="spacer md:flex-grow"></div>
        <div className="footer-col">
          <h3>Contatos</h3>
          <nav>
            <li><Link to="mailto:contato@umnovoolhar.art.br">contato@umnovoolhar.art.br</Link></li>
          </nav>
        </div>
      </div>
      <div className="footer-2">
        <div className="col copyright">
          © 2020 Um Novo Olhar - todos os direitos reservados
        </div>
        <div className="col marcas">
          <img src="/img/uno-marcas.png" alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
