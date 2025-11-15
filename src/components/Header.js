import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="#home" className="text-center">
          <img
            src="/resources/Gathvora_logo_b&w.png"
            width="150"
            className="d-block mx-auto"
            alt="Gathvora logo"
          />
          <h1 className="mt-2" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#929a9dff' }}>GATHVORA</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;