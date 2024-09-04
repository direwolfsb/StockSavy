

---

# StockSavvy - A Web Application for Stock Analysis and Prediction

![Home](https://github.com/user-attachments/assets/40e579ec-3995-4905-9654-93dfe0f42e0f)

**StockSavvy** is a comprehensive web application designed to empower users with tools for sophisticated stock analysis and prediction. The platform leverages modern web technologies, advanced machine learning techniques, and financial data from **yfinance** to offer predictions of stock closing prices, along with fetching and displaying trending news related to specific stock companies. StockSavvy aims to provide users with insightful data, making it easier for them to make informed decisions in the stock market.

## 🚀 Live Demo
Check out the live demo here: [StockSavvy Live Demo](https://drive.google.com/file/d/1GW23PHWYup-qjIBFhOSOos02vbE2_Mmk/view?usp=drive_link)

## 📈 Core Features

### Stock Price Prediction
StockSavvy predicts stock prices using **Long Short-Term Memory (LSTM)** neural networks. By training the model on historical stock data pulled from **yfinance**, it helps users anticipate future stock movements. The predictions are displayed alongside visualizations of historical data and moving averages.

### News Fetching
StockSavvy also includes a news fetching tool that scrapes the latest news articles related to specific stock companies, ensuring that users stay informed about current events that might impact their investments.

## 💻 Tech Stack

- **Frontend**: React.js, Bootstrap, React Router
- **Backend**: Node.js, Express.js
- **Data**: yfinance (for stock data), web scraping (for news fetching)
- **Machine Learning**: LSTM neural networks implemented in Python (Flask server)
- **Deployment**: Docker, AWS/Heroku compatible

## 🛠 Development Process

The development of StockSavvy focused on modularity and scalability, integrating the frontend with backend APIs and testing extensively across devices. The LSTM model was tuned for optimal prediction performance, and large datasets were handled efficiently using **yfinance**.

## 📊 Graphs and Data Visualizations

![Price Chart](https://github.com/user-attachments/assets/ab5c4076-197b-4dfb-92af-f957f2945ed0)

## 📰 Trending News

![News](https://github.com/user-attachments/assets/8f465caf-57ab-4161-97cb-42950dc5a540)

## 🚀 Deployment

StockSavvy is containerized using **Docker**, allowing for easy deployment on cloud platforms like **AWS** or **Heroku**, or any platform that supports Docker.

## 🌟 Future Enhancements

- **User Authentication**: Save favorite stock predictions.
- **Improved Prediction Models**: Incorporate more sophisticated ML models.
- **Real-Time Data Fetching**: Fetch real-time stock data and provide notifications.
- **Additional Integrations**: Health app integrations for comprehensive management.

## 💡 Challenges

- **Large Datasets**: Handling large datasets efficiently.
- **LSTM Model Tuning**: Adjusting hyperparameters for accuracy.
- **Responsive Design**: Ensuring cross-device compatibility.

---

