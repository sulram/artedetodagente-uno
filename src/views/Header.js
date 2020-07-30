import React from 'react'

import MenuDropdown from './MenuDropdown'
import HeaderLogo from './HeaderLogo'

function Header(props) {
  return (
    <>
      <HeaderLogo />
      <MenuDropdown title={props.title} url={props.url}/>
    </>
  )
}

export default Header
