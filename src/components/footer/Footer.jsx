import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0', position: 'fixed', width: '100%', bottom: 0 }}>
      <Container>
        <Row className="text-center">
          <Col>
            <h5>StockSavy</h5>
            <p>&copy; {new Date().getFullYear()} StockSavy. All rights reserved.</p>
          </Col>
          <Col>
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:bams@usf.edu">bams@usf.edu</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;