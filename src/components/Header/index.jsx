import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMain from './HeaderMain'

function Header () {
  return (
    <div className={'header'}>
      <HeaderTop />
      <HeaderMain />
    </div>
  )
}

export default Header;