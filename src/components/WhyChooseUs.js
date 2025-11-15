import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa'; // Placeholder icon

function WhyChooseUs() {
  const reasons = [
    'Verified Workforce: All professionals are background-checked and skill-verified',
    'Fast Deployment: Quick turnaround with staff available across multiple cities',
    'Affordable Pricing: Competitive rates without compromising on quality or service',
    'Professional Behaviour: Trained staff ensuring courteous and efficient service delivery',
    'Trusted by Leading Organizers: Serving both large-scale events and intimate gatherings with equal dedication',
  ];

  return (
    <div className="why-choose-us-section py-5">
      <Container>
        <h2 className="text-center mb-5">Why Choose GATHVORA</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <ul className="list-unstyled">
              {reasons.map((reason, index) => (
                <li key={index} className="d-flex align-items-start mb-3">
                  <FaCheckCircle size={24} className="text-success me-3 mt-1" />
                  <p className="lead text-start mb-0">{reason}</p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhyChooseUs;