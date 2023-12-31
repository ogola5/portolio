import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/about.css'; // Import the CSS from the styles folder

const AboutMe = () => {
  return (
    <Container className="about-me-section">
      <Row className="align-items-center">
        <Col md={6} className="mb-3">
          <Image src="path-to-your-image.jpg" roundedCircle />
        </Col>
        <Col md={6}>
          <h2>About Me</h2>
          <p>Hello! I'm Evance Ogola, an Electrical Engineer, Software, and Blockchain Developer based in Malindi, Kenya. With a passion for engineering and technology, I specialize in electrical installations, computer diagnostics, repair and maintenance, software development, and blockchain technology with over three years of experience in these fields. I thrive on challenging projects that require innovative solutions.</p>
          <p>When not engrossed in technology, I enjoy reading, walking along the beach, swimming, and storytelling.</p>
          <h3>Skills and Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>Solidity</li>
            <li>Rust</li>
          </ul>
          {/* Add any additional paragraphs or content here */}
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
