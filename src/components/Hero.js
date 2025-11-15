import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Hero() {
  return (
    <div className="hero-section text-center bg-primary text-white py-5">
      <Container>
        <h1 className="display-4">Reliable People. Remarkable Events.</h1>
        <p className="lead">Your trusted partner for professional event manpower across India</p>
        <div className="mt-4">
          <Button variant="light" size="lg" className="me-3">📱 Call / WhatsApp Now</Button>
          <Button variant="outline-light" size="lg">✉️ Contact via Email</Button>
        </div>
      </Container>
    </div>
  );
}

export default Hero;