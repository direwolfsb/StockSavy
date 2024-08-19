import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Search() {
    const [company, setCompany] = useState('');
    const [news, setNews] = useState([]); // State to store the news data

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (company.trim() === '') return;

        try {
            // Call the API to fetch news
            const response = await fetch(`http://localhost:5001/news/${company}`);
            const data = await response.json();
            setNews(data.news); // Update the state with the fetched news data
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="companyInput" className="mb-2">Search for Company News:</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        id="companyInput"
                        placeholder="Enter company name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-secondary mt-3">Search</button>
            </form>

            <div className="mt-4">
                {news.map((item, index) => (
                    <Card key={index} className="mb-3">
                        <Card.Body>
                            <Card.Title>{item.headline}</Card.Title>
                            <Button variant="secondary" href={item.url} target="_blank" rel="noopener noreferrer">
                                Read more
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Search;
