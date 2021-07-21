import logo from './logo.svg';
import './App.css';
import Navigation from './components/Nav'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ImageSlider from './components/ImageSlider/ImageSlider';
import {SliderData} from './components/ImageSlider/SliderData';
import Products from './components/Products/Products';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <ImageSlider slides={SliderData}/>
     <Main />
     <Products />
     <Footer />
    </div>
  );
}

export default App;
