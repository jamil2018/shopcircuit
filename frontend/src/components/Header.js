import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="mb-4">
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Shop Circuit</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link className="mx-3 px-0">
                  <i className="fas fa-shopping-cart mr-1"></i>
                  CART
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link className="mx-3 px-0">
                  <i className="fas fa-user mr-1"></i>
                  SIGN IN
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
