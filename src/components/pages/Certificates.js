import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/certificates.css';
// Update these paths to the actual paths of your certificate logos and images
const certificates = [
  {
    title: "Certified Electrical and Electronics Engineer",
    issuer: "Technical University of Mombasa",
    date: "2023",
    description: "Bachelor of Science in Electrical and Electronics Engineering",
    logo: "path-to-technical-university-logo.jpg", // replace with your image path
    link: "https://drive.google.com/file/d/1TTP6S_1JYh0WEWaHMdi3UneiV_c4_506/view?usp=sharing"
  },
  {
    title: "TypeScript Smart Contract 101",
    issuer: "Dacade",
    date: "Date of Completion",
    description: "Completed the TypeScript Smart Contract 101 course on Dacade.",
    logo: "path-to-dacade-logo.jpg", // replace with your image path
    link: "https://drive.google.com/file/d/1VqeMqpBXiUPgiu6elZTMuZcoz_iFD0Ir/view?usp=sharing" // replace with a link to your certificate
  },
  {
    title: "AI Web App Development 101",
    issuer: "Dacade",
    date: "2023",
    description: "Completed the AI Web App Development 101 course on Dacade.",
    logo: "path-to-dacade-logo.jpg", // replace with your image path
    link: "https://drive.google.com/file/d/1OLKg1bV4vIpR3D7ym61KkN9105loTK8p/view?usp=sharing" // replace with a link to your certificate
  },
  {
    title: "Rust Smart Contract 101",
    issuer: "Dacade",
    date: "2023",
    description: "Completed the Rust Smart Contract 101 course on Dacade.",
    logo: "path-to-dacade-logo.jpg", // replace with your image path
    link: "https://drive.google.com/file/d/1zuWxlMMjj5gSBrJ11-_d8teVybKrXrUh/view?usp=sharing" // replace with a link to your certificate
  },
  // ... Add more certificates as needed
];

const Certificates = () => {
  return (
    <Container className="my-5">
      <h2>Certifications</h2>
      <Row>
        {certificates.map((cert, index) => (
          <Col md={4} key={index} className="mb-3">
            <Card>
              <Card.Img variant="top" src={cert.logo} />
              <Card.Body>
                <Card.Title>{cert.title}</Card.Title>
                <Card.Text>
                  Issued by: {cert.issuer} <br />
                  Date: {cert.date} <br />
                  {cert.description}
                </Card.Text>
                <Card.Link href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Certificates;
