import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-section bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} GATHVORA. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-1">
              <FaPhone className="me-2" /> Call / WhatsApp: +91-1169296745
            </p>
            <p className="mb-0">
              <FaEnvelope className="me-2" /> Email: contact@gathvora.com
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;