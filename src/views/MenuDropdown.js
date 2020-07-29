import React, {useState} from 'react'

import { HashLink as Link } from 'react-router-hash-link'
import Menu from './Menu'

function MenuDropdown(props) {

  const {home, title} = props

  const [open,setOpen] = useState(false)

  return (
    <nav className="menu-dropdown-sticky">
      <div className={`logotipo`}>
        <Link to="/"><img src="/img/uno-logo.png" alt="um novo olhar"/></Link>
      </div>
      <div className={`menu-dropdown ${!title ? 'no-title' : ''}`}>
        <button
          className="menu-toggle"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpen(!open)}>
          <img src="/img/uno-menu.svg" alt="menu"/>
        </button>
        <div className={`menu-content ${open ? 'is-open' : '' }`}>
          <div onClick={() => setOpen(false)}  className="site-menu-1">
            <Menu home={home}/>
          </div>
        </div>
      </div>
      {title ? <h1 className="page-title"><span>&gt; {title}</span></h1> : <></>}
    </nav>
  );
}

export default MenuDropdown;
