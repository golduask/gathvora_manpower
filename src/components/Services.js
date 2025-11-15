import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTheaterMasks, FaRing, FaBuilding, FaUsers, FaTruck, FaTools, FaBullhorn, FaPalette, FaClipboardCheck } from 'react-icons/fa'; // Placeholder icons

function Services() {
  const serviceItems = [
    {
      icon: <FaUsers size={50} className="text-primary mb-3" />,
      title: 'Event Staffing & On-Ground Operations',
      description: 'From hosts and ushers to security and bouncers, our trained professionals ensure smooth coordination, guest handling, and on- site efficiency at every event.',
    },
    {
      icon: <FaBullhorn size={50} className="text-primary mb-3" />,
      title: 'Brand Promotions & Marketing Support',
      description: 'Our promoters and brand ambassadors represent your brand with confidence, driving audience engagement and visibility at activations, launches, and campaigns.',
    },
    {
      icon: <FaPalette size={50} className="text-primary mb-3" />,
      title: 'Venue, Decor & Theme Setup',
      description: 'We handle venue arrangements, stage design, and decor execution — transforming spaces into experiences that reflect your event\'s style and purpose.',
    },
    {
      icon: <FaUsers size={50} className="text-primary mb-3" />,
      title: 'On-Ground Operations Team',
      description: 'Dedicated staff for venue management and guest coordination',
    },
    {
      icon: <FaClipboardCheck size={50} className="text-primary mb-3" />,
      title: 'Supervisory & Project Management',
      description: 'Experienced supervisors oversee every project, managing manpower, schedules, and quality — ensuring flawless, on-time execution.',
    },
    {
      icon: <FaTools size={50} className="text-primary mb-3" />,
      title: 'Custom Solutions',
      description: 'Tailored workforce solutions for your specific event requirements',
    },
  ];

  return (
    <div className="services-section py-5">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row className="g-4">
          {serviceItems.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100">
                <Card.Body className="text-center">
                  {service.icon}
                  <Card.Title as="h4" className="mt-3 mb-2">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Services;