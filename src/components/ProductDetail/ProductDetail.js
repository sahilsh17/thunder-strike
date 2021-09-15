import {React, useState} from 'react'
import './ProductDetail.css';
import { Link } from 'react-router-dom';
import ImageSliderNoAnimation from '../ImageSliderNoAnimation/ImageSliderNoAnimation';
import StripeCheckout from 'react-stripe-checkout';

function ProductDetail(props) {
  
  const SliderData = props.location.state.SliderData;
  const title = props.location.state.title;
  const price = props.location.state.price;
  const description = props.location.state.description; 
  const link = props.location.state.link;
  const [Product, setProduct] = useState({
    name:title, 
    price:price, 
    description:description});
    const makePayment = token => {
      const body = {
        token,
        Product

      }
      const headers = {
        "Content-Type": "application/json",
      }

      return fetch(`http://localhost:8282/payment`,{
        method: "POST",
        headers,
        body: JSON.stringify(body)
      })
      .then(response => {
        console.log(response);
        const {status} = response;
        console.log(status);
      })
      .catch(error => console.log(error));
    }
  return (
    <>
    <div className="detail-section">
      <ImageSliderNoAnimation slides={SliderData}/>
      <div className="product-summary">
       <h1 className="product-name">{title}</h1>
       <p className= "product-price">{price}</p>
     

       
       <StripeCheckout 
       stripeKey="pk_test_51JRq1hLpFVTS9LnR6CrcpNiYImRKZHwkLot6xx66zycObaBzKQody2pmRVPExz2jkn3VpELlvXoztK3mzAA72ywr00LQrqKk7Z" 
       token={makePayment} 
       name="By React"
       amount={price * 100} >
       <button className="add-to-cart">ADD TO CART</button>
       </StripeCheckout>
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
