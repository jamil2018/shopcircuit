import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="mb-4">
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Shop Circuit</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart" className="mx-3 px-0">
                <i className="fas fa-shopping-cart mr-1"></i>
                CART
              </Nav.Link>
              <Nav.Link href="/login" className="mx-3 px-0">
                <i className="fas fa-user mr-1"></i>
                SIGN IN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
