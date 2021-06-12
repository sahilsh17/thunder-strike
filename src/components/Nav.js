import logo from '../logo.svg';
import react from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Nav.css';

function Navigation() {
  return (
    <>
    <div className="bg-img">
    <div class="container">
      <Navbar className="nav-bar" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <img className="logo" src="logo.jpg"/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      </div>
      </div>
    </>
  );
}

export default Navigation;
