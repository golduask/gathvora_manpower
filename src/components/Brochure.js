import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa'; // Placeholder icon

function Brochure() {
  return (
    <div className="brochure-section py-5">
      <Container className="text-center">
        <h2 className="mb-4">Company Brochure</h2>
        <p className="lead mb-4">Download our detailed brochure to learn more about our services, workforce capabilities, and how we can make your event successful.</p>
        <Button variant="primary" size="lg" href="/resources/gathvora.pdf" download>
          <FaFilePdf className="me-2" /> Download Brochure
        </Button>
        <p className="mt-3 text-muted">(Contact us to request our company brochure)</p>
      </Container>
    </div>
  );
}

export default Brochure;