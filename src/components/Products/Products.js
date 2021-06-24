import React from 'react'
import {ProductList} from './ProductList';
import './Products.css';

function Products() {

  return (
    <div>
      <hi>Featured Products</hi>
      {ProductList.map((product, index)=> {
        return(<div class="card" key={index}>
<>
<div class="card__media">
  <img src={product.image} alt="product image"/>
</div>

<div class="card__content">
  <header class="card__header">
    <h2 class="card__title">{product.name}</h2>
  </header>
  <p class="card__excerpt">{product.description}</p>
</div>
</>
</div>
)
        
      })}
    </div>
  )
}

export default Products
