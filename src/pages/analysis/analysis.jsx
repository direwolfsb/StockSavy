import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../../components/navbar/Navbar';
import Search from '../../components/search/search';
import Footer from '../../components/footer/Footer';

function Analysis() {
  return (
    <div>
      <CustomNavbar />
      <Container fluid className="my-3">
        <Row>
          {/* Left column for Search component */}
          <Col md={4}>
            <Search />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Analysis;
