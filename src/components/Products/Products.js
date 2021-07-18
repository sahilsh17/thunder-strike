import React from 'react'
import {ProductList} from './ProductList';
import './Products.css';
import {Card, Icon} from 'semantic-ui-react';

function Products() {

  return (
    <div className="card-section">
      <hi className="section-products">Featured Products</hi>
      <div className="container row">
      {ProductList.map((product, index)=> {
        return(<div className="card col-sm-4" key={index}>

<div className="card__media container">
  <img className="card-image" src={product.image} alt="product image"/>
</div>

<div className="card__content">
  <header className="card__header">
    <h2 className="card__title">{product.name}</h2>
  </header>
  <p className="card__excerpt">{product.description}</p>
</div>
</div>


)
        
      })}
      </div>
    </div>
  )
}

export default Products
