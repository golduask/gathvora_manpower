import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Hero() {
  return (
    <div className="hero-section text-center py-5">
      <Container>
        <h1 className="display-4">Reliable People. Remarkable Events.</h1>
        <p className="lead">Your trusted partner for professional event manpower across India</p>
        <div className="mt-4">
          <Button as="a" href="https://wa.me/911169296745" target="_blank" rel="noopener noreferrer" variant="primary" size="lg" className="me-3">📱 Call / WhatsApp Now</Button>
          <Button as="a" href="mailto:contact@gathvora.com" variant="outline-primary" size="lg">✉️ Contact via Email</Button>
        </div>
      </Container>
    </div>
  );
}

export default Hero;