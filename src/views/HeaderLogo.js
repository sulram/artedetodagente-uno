import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HeaderLogo(props) {
  return (
    <header className="mobile-header">
      <section className="logotipo">
        <Link to="/"><img src="/img/uno-logo.png" alt="um novo olhar"/></Link>
      </section>
    </header>
  )
}

export default HeaderLogo
