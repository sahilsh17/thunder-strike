import React from 'react'
import './ProductDetail.css';
import { Link } from 'react-router-dom';
import ImageSliderNoAnimation from '../ImageSliderNoAnimation/ImageSliderNoAnimation';

function ProductDetail(props) {
  const SliderData = props.location.state.SliderData;
  const title = props.location.state.title;
  const price = props.location.state.price;
  const description = props.location.state.description; 
  const link = props.location.state.link;
  return (
    <>
    <div className="detail-section">
      <ImageSliderNoAnimation slides={SliderData}/>
      <div className="product-summary">
       <h1 className="product-name">{title}</h1>
       <p className= "product-price">{price}</p>
     

       <button className="add-to-cart">ADD TO CART</button>
       <a href={link}><button className="buy">Buy on Facebook Marketplace</button></a>
      
       <h6>Product Description</h6>
       <div className="product-description">{description}</div>
      </div>
    </div>
    <div className="back-home"> 
    <Link to='/' > <h4 className="back-to-home-link" > BACK TO HOME </h4></Link>
    </div>
    </>
  );
 
}

export default ProductDetail
