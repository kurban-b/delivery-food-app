import React from 'react'
import Basket_icon from '../../assets/icons/Basket.svg'

function Basket (props) {
  return (
    <button className={'basket'}>
      <div className={'value'}>
        327 ₽
      </div>
      <div className={'icon'}>
        <img src={Basket_icon} alt='basket'/>
      </div>
    </button>
  )
}

export default Basket