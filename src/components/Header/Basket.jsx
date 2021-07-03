import React from 'react'
import Basket_icon from '../../assets/icons/Basket.svg'
import { useSelector } from 'react-redux'
import { basketArrPricesSelector, basketSelector } from '../../redux/selectors/products'

function Basket () {
  const basket = useSelector(basketSelector)
  const pricesArr = useSelector(basketArrPricesSelector)
  let sum = pricesArr.length > 0 ? pricesArr.reduce((sum, price) => sum + price) : 0

  console.log(basket)
  console.log(sum)
  console.log(pricesArr)

  return (
    <button className={'basket'}>
      <div className={'value'}>
        {sum} ₽
      </div>
      <div className={'icon'}>
        <img src={Basket_icon} alt='basket'/>
      </div>
    </button>
  )
}

export default Basket