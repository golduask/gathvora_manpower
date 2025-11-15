import React from 'react';
import { Container } from 'react-bootstrap';

function AboutUs() {
  return (
    <div className="about-us-section py-5">
      <Container>
        <h2 className="text-center mb-4">About Us</h2>
        <p className="text-center lead">
          GATHVORA is a leading manpower solutions provider specializing in event staffing across India. With a network of over 10,000+ verified professionals, we deliver excellence in workforce management for events of all scales.
        </p>
        <p className="text-center lead">
          Our commitment to reliability, professionalism, and timely deployment has made us the preferred choice for event organizers, wedding planners, and corporate event managers nationwide.
        </p>
      </Container>
    </div>
  );
}

export default AboutUs;