import logo from './logo.svg';
import './App.css';
import Navigation from './components/Nav'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

import ProductDetail from './components/ProductDetail/ProductDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
     <Navigation/>
   
    <Switch>
        <Route path="/product-details" exact component={ProductDetail} />
        <Route path="/" exact component={Home} />
        
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
