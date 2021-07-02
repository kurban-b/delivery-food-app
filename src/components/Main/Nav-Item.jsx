import React from 'react'

function NavItem ({category}) {
  return (
    <li className={'navbar-item'}>
      <a >
        {category.name}
      </a>
    </li>
  )
}

export default NavItem