import React from 'react'
import {ProductList} from './ProductList';
import './Products.css';
import {Card} from 'react-bootstrap';
function Products() {

  return (
    <>
    <div className="product-section">
     <h1 className="product-title">Products</h1>
    <div className="row card-container">
   
    {ProductList.map(product => {
      
      return (
       
        <>
         <div className="wrapper">
         <article className="card">
         <div className="card__media">
           <img src={product.image} alt="Card image" />
         </div>

         <div className="card__content">
           <header className="card__header">
             <h2 className="card__title">{product.name}</h2>
            
           </header>
           {/* <p class="card__excerpt">{product.description}</p> */}
           <h2 className="card__title">{product.price}</h2>
           <div className="overlay">
           <a href ={product.link}> <button >Click to buy</button></a>
           </div>
         </div>
         
        </article>
        </div>
      </>
      )
      
    })}
   
    
  
  </div>
  </div>
  </>
  )
 
}

export default Products
