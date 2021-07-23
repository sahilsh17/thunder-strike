import logo from '../logo.svg';
import react from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Nav.css';

function Navigation() {
  return (
    <>
   
    
      <Navbar className="nav-bar" collapseOnSelect expand="lg" variant="dark">
      <img className="logo" src="logo.jpg"/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       
      </Navbar>
   
    
    </>
  );
}

export default Navigation;
