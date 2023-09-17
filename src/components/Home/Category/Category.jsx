import React from 'react'
import "./Category.scss"
import cat1 from "../../../images/react.png"
import cat2 from "../../../images/react.png"
import cat3 from "../../../images/react.png"
import cat4 from "../../../images/react.png"



const Category = () => {
  return (
    <div className='shop-by-category'>
      <div className="categories">
        <div className="category">
          <img src={cat1} alt="This is Cat 1" />
        </div>
        <div className="category">
          <img src={cat2} alt="This is Cat 2" />
        </div>
        <div className="category">
          <img src={cat3} alt="This is Cat 3" />
        </div>
        <div className="category">
          <img src={cat4} alt="This is Cat 4" />
        </div>
      </div>
    </div>
  )
}

export default Category