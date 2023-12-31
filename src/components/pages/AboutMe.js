import React from 'react';
import { Container, Row, Col, Image, } from 'react-bootstrap';
import '../styles/about.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';
const AboutMe = () => {
  return (
    <Container className="about-me-section">
      <Row className="align-items-center">
        <Col md={6} className="mb-3 image-col">
          <Image src="images/DSC_0149-2-2.jpg" roundedCircle className="profile-image"/>
        </Col>
        <Col md={6} className="text-col">
          <h2>About Me</h2>
          <p>Hello! I'm Evance Ogola, an Electrical Engineer, Software, and Blockchain Developer based in Malindi, Kenya. With a passion for engineering and technology, I specialize in electrical installations, computer diagnostics, repair and maintenance, software development, and blockchain technology with over three years of experience in these fields. I thrive on challenging projects that require innovative solutions.</p>
          <p>When not engrossed in technology, I enjoy reading, walking along the beach, swimming, and storytelling.</p>
          {/* ... rest of your paragraph ... */}
          <h3>Skills and Languages</h3>
          <ul>
          <li>JavaScript</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>Solidity</li>
            <li>Rust</li>
          </ul>
          {/* Additional content */}
          <div className="mt-4">
            <Link to="/certificates" className="btn btn-primary mr-2">Certificates</Link>
            <Link to="/education" className="btn btn-secondary">Education</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
