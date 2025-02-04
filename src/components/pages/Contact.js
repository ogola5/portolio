import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="contact-info">
              <h2>Contact Me</h2>
              <p>Feel free to reach out to me for any inquiries or collaborations.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <FaEnvelope /> <span>Email: ogolaevance5@gmail.com</span>
                </div>
                <div className="contact-item">
                  <FaPhoneAlt /> <span>Phone: +254711695232</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt /> <span>Location: Malindi, Kenya</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8} lg={6}>
            <div className="contact-form">
              <h3>Send a Message</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-btn">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
