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
       
         <article class="card">
         <div class="card__media">
           <img src={product.image} alt="Card image" />
         </div>

         <div class="card__content">
           <header class="card__header">
             <h2 class="card__title">{product.name}</h2>
            
           </header>
           <p class="card__excerpt">{product.description}</p>
           <h2 class="card__title">{product.price}</h2>

           <a href ={product.link}> <button >Click to buy</button></a>
         </div>

        </article>
        
      </>
      )
      
    })}
   
    
  
  </div>
  </>
  )
 
}

export default Products
