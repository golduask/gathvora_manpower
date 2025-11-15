import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTheaterMasks, FaRing, FaBuilding, FaUsers, FaTruck, FaTools } from 'react-icons/fa'; // Placeholder icons

function Services() {
  const serviceItems = [
    {
      icon: <FaTheaterMasks size={50} className="text-primary mb-3" />,
      title: 'Event Manpower Supply',
      description: 'Comprehensive staffing solutions for all types of events and gatherings',
    },
    {
      icon: <FaRing size={50} className="text-primary mb-3" />,
      title: 'Wedding Workforce',
      description: 'Skilled professionals for seamless wedding ceremonies and celebrations',
    },
    {
      icon: <FaBuilding size={50} className="text-primary mb-3" />,
      title: 'Corporate Event Staffing',
      description: 'Professional team for conferences, seminars, and corporate functions',
    },
    {
      icon: <FaUsers size={50} className="text-primary mb-3" />,
      title: 'On-Ground Operations Team',
      description: 'Dedicated staff for venue management and guest coordination',
    },
    {
      icon: <FaTruck size={50} className="text-primary mb-3" />,
      title: 'Logistics & Support Crew',
      description: 'Expert handling of equipment, setup, and event logistics',
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