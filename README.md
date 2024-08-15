# StockSavvy - A Web Application for Stock Analysis and Prediction

**StockSavvy** is a comprehensive web application designed to empower users with tools for sophisticated stock analysis and prediction. The platform leverages modern web technologies and advanced machine learning techniques to offer predictions of stock closing prices, along with fetching and displaying trending news related to specific stock companies. StockSavvy aims to provide users with insightful data, making it easier for them to make informed decisions in the stock market.

The core functionality of StockSavvy revolves around predicting stock prices using Long Short-Term Memory (LSTM) neural networks. LSTM is a powerful type of recurrent neural network particularly well-suited for time series forecasting. By training the model on historical stock data, StockSavvy can generate predictions that help users anticipate future stock movements. The model's predictions are displayed alongside visualizations of historical data and moving averages, providing users with a comprehensive view of a stock's past performance and potential future trends.

In addition to stock prediction, StockSavvy includes a news fetching tool that scrapes the latest news articles related to specific stock companies. Users can input a company name, and the application will display relevant news headlines and links, all formatted in a responsive layout. This feature ensures that users stay informed about current events that might impact their investments, offering a well-rounded approach to stock analysis.

StockSavvy’s user interface is built with React.js, ensuring a dynamic and responsive experience. The design is both intuitive and aesthetically pleasing, with a homepage that introduces users to the key features of the application. Navigation is handled by React Router, making it easy to switch between the stock predictor, news fetcher, and other sections of the app. Bootstrap is used extensively for styling, ensuring that the application looks great on devices of all sizes.

The backend of StockSavvy is powered by Node.js and Express.js, which handle API requests and serve as the backbone for the frontend’s interactions. The machine learning model and web scraping functionalities are handled by a Python Flask server. This modular approach allows for easy maintenance and scalability, ensuring that the application can grow and adapt over time.

StockSavvy was developed with a focus on modularity and scalability. The project started with detailed planning and design, followed by the development of both the frontend and backend components. The integration process involved connecting the frontend with backend APIs, ensuring seamless communication between the different parts of the application. The application was tested extensively to ensure that all features function as expected across various devices.

One of the significant challenges faced during development was managing large datasets of historical stock prices. To overcome this, the application was optimized to fetch and process only relevant data slices. Another challenge was training the LSTM model to achieve accurate predictions. This required fine-tuning the model's hyperparameters and adjusting its architecture. Additionally, ensuring the application’s responsive design required extensive use of Bootstrap’s grid system and thorough testing across devices.

The deployment process involved containerizing the application using Docker, ensuring consistent environments between development and production. This allows StockSavvy to be easily deployed on cloud platforms like AWS or Heroku, or any platform that supports Docker, making it accessible to a wide audience.

Looking to the future, StockSavvy has the potential to evolve into a more comprehensive stock analysis tool. Planned enhancements include user authentication, allowing users to save their favorite stock predictions, and integrating more sophisticated machine learning models to improve prediction accuracy. There is also the possibility of adding real-time data fetching and a notification system to alert users of significant stock movements.

Overall, StockSavvy provides a robust foundation for stock analysis and prediction, combining modern web development practices with powerful machine learning techniques. Whether you are a seasoned trader or a beginner, StockSavvy offers valuable insights and tools to help you navigate the stock market with confidence.

<img width="1440" alt="Home" src="https://github.com/user-attachments/assets/40e579ec-3995-4905-9654-93dfe0f42e0f">

<img width="1440" alt="Pricechart" src="https://github.com/user-attachments/assets/ab5c4076-197b-4dfb-92af-f957f2945ed0">

<img width="737" alt="Graphs" src="https://github.com/user-attachments/assets/3cdb6788-19cc-4723-841a-74fb2150520c">

<img width="1440" alt="News" src="https://github.com/user-attachments/assets/8f465caf-57ab-4161-97cb-42950dc5a540">
