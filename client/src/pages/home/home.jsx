import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
      <CustomNavbar />
      
      <div style={{ position: 'relative', textAlign: 'center' }}>
        {/* Bootstrap Carousel */}
        <Carousel style={{ height: '40vh' }}>  {/* Set carousel height to 40% of viewport height */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpapers.com/images/high/stock-market-world-map-3pkfoe2j58b9lkfo.webp"
              alt="First slide"
              style={{ 
                height: '40vh',  
                objectFit: 'cover',  
                filter: 'brightness(50%)'  
              }} 
            />
            <Carousel.Caption>
              <h3>Welcome to StockSavy</h3>
              <p>Predicting stock prices with cutting-edge technology.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpapers.com/images/high/digital-stock-tracker-h0r5ceeaptrwqk30.webp"
              alt="Second slide"
              style={{ 
                height: '40vh',  // Ensure the image takes up the full height of the carousel
                objectFit: 'cover',  // Cover the carousel area without distortion
                filter: 'brightness(50%)' 
              }} 
            />
            <Carousel.Caption>
              <h3>Stay Informed with Trending News</h3>
              <p>Search and display trending news related to stock companies.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
        {/* Description Card */}
        <Container style={{ marginTop: '-40px' }}>
          <Row className="justify-content-center">
            <Col md="8">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>About StockSavy</Card.Title>
                  <Card.Text>
                    Welcome to StockSavy! We leverage the power of LSTM neural networks to predict the closing prices of stocks with remarkable accuracy. In addition to our prediction tools, we provide a robust web scraper that searches and displays the latest trending news related to stock companies, keeping you informed and ahead of the curve in the dynamic world of stock trading.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
    
  );
}

export default Home;
