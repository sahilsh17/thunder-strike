import React from 'react'
import {ProductList} from './ProductList';
import './Products.css';
import {Card} from 'react-bootstrap';
function Products() {

  return (
    <>
    <h1>Products</h1>
    <div className="row card-container">
   
    {ProductList.map(product => {
      
      return (
        <>
        <Card className="card col-sm-4" style={{ width: '24rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.description}
      </Card.Text>
     
      </Card.Body>
      </Card>
      </>
      )
      
    })}
   
    
  
  </div>
  </>
  )
 
}

export default Products
