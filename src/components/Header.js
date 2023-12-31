import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import './styles/header.css';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        {/* ... other components */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
