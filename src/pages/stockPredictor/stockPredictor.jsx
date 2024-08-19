import React, { useState } from 'react';
import CustomNavbar from '../../components/navbar/Navbar.jsx';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Table, Card } from 'react-bootstrap';
import Footer from '../../components/footer/Footer.jsx';

function StockPredictor() {
    // Using state hooks to manage the ticker input, stock data, and images
    const [ticker, setTicker] = useState('AAPL');
    const [stockData, setStockData] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [predictionSrc, setPredictionSrc] = useState(null);

    // Handling form submission to fetch stock data
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5001/stock/${ticker}`);
            setStockData(response.data.data);  // Setting stock data in state
        } catch (error) {
            console.error("There was an error fetching the stock data!", error);
        }
    }

    // Handling the generation of the moving average plot
    const handleGeneratePlot = async () => {
        try {
            const response = await axios.get(`http://localhost:5001/stock/${ticker}/graphma`);
            setImageSrc(`data:image/png;base64,${response.data.image}`);  // Setting image source in state
        } catch (error) {
            console.error("There was an error generating the plot!", error);
        }
    };

    // Handling the generation of the prediction plot
    const handleGeneratePrediction = async () => {
        try {
            const response = await axios.get(`http://localhost:5001/stock/${ticker}/predict`);
            setPredictionSrc(`data:image/png;base64,${response.data.image}`);  // Setting prediction image source in state
        } catch (error) {
            console.error("There was an error generating the prediction plot!", error);
        }
    };

    return (
        <div>
            <CustomNavbar />  {/* Including custom navbar */}
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="8">
                        <h1 className="text-center">Stock Trend Prediction</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formTicker">
                                <Form.Label>Enter Stock Ticker</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={ticker} 
                                    onChange={(e) => setTicker(e.target.value)}  // Updating ticker state
                                    placeholder="AAPL" 
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3">
                                Fetch Data  {/* Submitting form to fetch stock data */}
                            </Button>
                        </Form>
                        
                        {stockData && (
                            <div className="mt-4">
                                <h2>Data from 2010 - {new Date().getFullYear()}</h2>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Open</th>
                                            <th>High</th>
                                            <th>Low</th>
                                            <th>Close</th>
                                            <th>Adj Close</th>
                                            <th>Volume</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Displaying a few rows of stock data */}
                                        {stockData.slice(0, 5).map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.Date}</td>
                                                <td>{row.Open}</td>
                                                <td>{row.High}</td>
                                                <td>{row.Low}</td>
                                                <td>{row.Close}</td>
                                                <td>{row['Adj Close']}</td>
                                                <td>{row.Volume}</td>
                                            </tr>
                                        ))}
                                        {stockData.length > 10 && (
                                            <tr>
                                                <td colSpan="7" className="text-center">... (skipping rows) ...</td>
                                            </tr>
                                        )}
                                        {stockData.slice(-5).map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.Date}</td>
                                                <td>{row.Open}</td>
                                                <td>{row.High}</td>
                                                <td>{row.Low}</td>
                                                <td>{row.Close}</td>
                                                <td>{row['Adj Close']}</td>
                                                <td>{row.Volume}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        )}
                        
                        <div className="mt-4 d-flex flex-column align-items-start">
                            {/* Button to generate moving average plot */}
                            {stockData && (
                                <Button 
                                    variant="primary" 
                                    className="mt-3"
                                    onClick={handleGeneratePlot}
                                >
                                    Generate Moving Average Plot
                                </Button>
                            )}

                            {/* Button to generate prediction plot */}
                            {stockData && (
                                <Button 
                                    variant="primary" 
                                    className="mt-3"
                                    onClick={handleGeneratePrediction}
                                >
                                    Generate Predictions
                                </Button>
                            )}
                        </div>

                        {/* Displaying the moving average plot if available */}
                        {imageSrc && (
                            <Card className="mt-4">
                                <Card.Body>
                                    <Card.Title>{ticker} Moving Average Plot</Card.Title>
                                    <img src={imageSrc} alt="Moving Average Plot" className="img-fluid" />
                                </Card.Body>
                            </Card>
                        )}

                        {/* Displaying the prediction plot if available */}
                        {predictionSrc && (
                            <Card className="mt-4">
                                <Card.Body>
                                    <Card.Title>{ticker} Predicted Plot</Card.Title>
                                    <img src={predictionSrc} alt="Predicted Plot" className="img-fluid" />
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}

export default StockPredictor;
