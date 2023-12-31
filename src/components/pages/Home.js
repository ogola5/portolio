import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/home.css'; // Ensure the path to your CSS file is correct

const Home = () => {
  const [imageOpacity, setImageOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageOpacity(1);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-section" id="home">
      <Container fluid>
        <Row className="align-items-center justify-content-center min-vh-100">
          <Col md={6} className="home-image p-0">
            <img 
              src="/images/DSC_0149-2-2.jpg" 
              alt="Evance Ogola" 
              className="img-fluid" 
              style={{ opacity: imageOpacity, transition: 'opacity 0.5s ease' }} 
            />
          </Col>
          {/* ... Rest of your component */}
          <Col md={6} className="text-box">
            <div className="content">
              <h1>Welcome to My Portfolio</h1>
              <p className="intro-text">
                Hi, I'm Evance Ogola, an Electrical Engineer, Software, and Blockchain Developer based in Malindi, Kenya. Discover my projects, skills, and professional journey.
              </p>
              <Link to="/about">
                <Button variant="primary">Learn More About Me</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Footer component */}
    </div>
  );
}

export default Home;
