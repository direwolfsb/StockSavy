

---

# StockSavvy - A Web Application for Stock Analysis and Prediction

**StockSavvy** is a comprehensive web application designed to empower users with tools for sophisticated stock analysis and prediction. The platform leverages modern web technologies, advanced machine learning techniques, and financial data from **yfinance** to offer predictions of stock closing prices, along with fetching and displaying trending news related to specific stock companies. StockSavvy aims to provide users with insightful data, making it easier for them to make informed decisions in the stock market.

## Core Features

### Stock Price Prediction
The core functionality of StockSavvy revolves around predicting stock prices using **Long Short-Term Memory (LSTM)** neural networks. LSTM is a powerful type of recurrent neural network particularly well-suited for time series forecasting. By training the model on historical stock data pulled from **yfinance**, StockSavvy can generate predictions that help users anticipate future stock movements. The model's predictions are displayed alongside visualizations of historical data and moving averages, providing users with a comprehensive view of a stock's past performance and potential future trends.

### News Fetching
In addition to stock prediction, StockSavvy includes a news fetching tool that scrapes the latest news articles related to specific stock companies. Users can input a company name, and the application will display relevant news headlines and links, all formatted in a responsive layout. This feature ensures that users stay informed about current events that might impact their investments, offering a well-rounded approach to stock analysis.

## User Interface and Experience

StockSavvy’s user interface is built with **React.js**, ensuring a dynamic and responsive experience. The design is both intuitive and aesthetically pleasing, with a homepage that introduces users to the key features of the application. **React Router** handles navigation, making it easy to switch between the stock predictor, news fetcher, and other sections of the app. **Bootstrap** is used extensively for styling, ensuring that the application looks great on devices of all sizes.

## Backend and API

The backend of StockSavvy is powered by **Node.js** and **Express.js**, which handle API requests and serve as the backbone for the frontend’s interactions. The **yfinance** library is used to fetch historical stock data, which is processed by the backend and provided to the LSTM model for training and prediction. The machine learning model and web scraping functionalities are handled by a **Python Flask server**. This modular approach allows for easy maintenance and scalability, ensuring that the application can grow and adapt over time.

## Development Process

StockSavvy was developed with a focus on modularity and scalability. The project started with detailed planning and design, followed by the development of both frontend and backend components. The integration process involved connecting the frontend with backend APIs, ensuring seamless communication between the different parts of the application. The application was tested extensively to ensure that all features function as expected across various devices.

### Challenges Faced
- **Large Datasets**: Managing large datasets of historical stock prices required optimization techniques to fetch and process only relevant data slices from **yfinance**.
- **LSTM Model Tuning**: Training the LSTM model to achieve accurate predictions required fine-tuning the model's hyperparameters and adjusting its architecture.
- **Responsive Design**: Ensuring the application's responsive design required extensive use of Bootstrap’s grid system and thorough testing across devices.

## Deployment

The deployment process involved containerizing the application using **Docker**, ensuring consistent environments between development and production. This allows StockSavvy to be easily deployed on cloud platforms like **AWS** or **Heroku**, or any platform that supports Docker, making it accessible to a wide audience.

## Future Enhancements

Looking to the future, StockSavvy has the potential to evolve into a more comprehensive stock analysis tool. Planned enhancements include:
- **User Authentication**: Allowing users to save their favorite stock predictions.
- **Improved Prediction Models**: Integrating more sophisticated machine learning models to improve prediction accuracy.
- **Real-Time Data Fetching**: Adding real-time stock data fetching and notifications to alert users of significant stock movements.
- **Integration with Health Apps**: Integration with Apple Health or MyFitnessPal to provide more comprehensive health management.

## Screenshots

### Home
<img width="737" alt="Home" src="https://github.com/user-attachments/assets/40e579ec-3995-4905-9654-93dfe0f42e0f">

### Stock Price Predictions and Charts
<img width="737" alt="Pricechart" src="https://github.com/user-attachments/assets/ab5c4076-197b-4dfb-92af-f957f2945ed0">

### Graphs and Data Visualizations
<img width="737" alt="Graphs" src="https://github.com/user-attachments/assets/3cdb6788-19cc-4723-841a-74fb2150520c">

### Trending News
<img width="737" alt="News" src="https://github.com/user-attachments/assets/8f465caf-57ab-4161-97cb-42950dc5a540">

---

