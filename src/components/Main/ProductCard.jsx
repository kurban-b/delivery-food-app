import React from 'react'
import Product from '../../assets/Burger.png'

function ProductCard ({product}) {
  return (
    <div className={'productCard'}>
      <div className="img">
        <img src={Product} alt=""/>
      </div>
      <div className={'name'}>
        {product.name}
      </div>
      <div className="price">
        {product.price} ₽
      </div>

    </div>
  )
}

export default ProductCard