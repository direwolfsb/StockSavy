import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';  // Importing Link from React Router for navigation

function CustomNavbar() {
  return (
    <>
      {/* Navbar component with a dark theme */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* Brand name linking to the home page */}
          <Navbar.Brand as={Link} to="/">StockSavvy</Navbar.Brand>

          {/* Navigation links */}
          <Nav className="me-auto">
            {/* Link to Home page */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {/* Link to Stock Predictor page */}
            <Nav.Link as={Link} to="/stockpredictor">Stock Predictor</Nav.Link>

            {/* Link to news scrapper */}
            <Nav.Link as={Link} to="/analysistool">NewsFetcher</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
