import React from 'react'
import "./Product.scss";
import prod from "../../../images/products/react.png"

const Product = () => {
  return (
    <div className='product-card'>
      <div className="thumbnail">
        <img src={prod} alt="This is Product" />
      </div>
      <div className="prod-details">
        <span className="name">Product Name</span>
        <span className="price"> &#8377; Product Price</span>
      </div>
    </div>
  )
}

export default Product