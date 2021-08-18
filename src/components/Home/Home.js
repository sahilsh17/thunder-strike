import logo from '../../logo.svg';
import react from 'react';
import Navigation from '../Nav';
import ImageSlider from '../ImageSlider/ImageSlider';
import Main from '../Main/Main';
import Products from '../Products/Products';
import {SliderData} from '../ImageSlider/SliderData';


function Home() {
  return (
    <>
    <ImageSlider slides={SliderData}/>
    <Main /> 
    <Products />
    </>
   
  );
}

export default Home;
