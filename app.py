from flask import Flask, jsonify,request
import yfinance as yf
from flask_cors import CORS
import matplotlib
matplotlib.use('Agg')  # Using the Agg backend for rendering plots to files
import base64
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from keras.models import load_model
from sklearn.metrics import r2_score
from datetime import datetime, timedelta
import matplotlib.pyplot as plt
import io
import requests
from bs4 import BeautifulSoup
import os
import time






# Initializing Flask app
app = Flask(__name__)
CORS(app)


# Home route
@app.route('/', methods=['GET'])
def home():
    return "<h1>Home</h1>"

# Route to fetch stock data as JSON
@app.route('/stock/<ticker>', methods=['GET'])
def get_stock_data(ticker):
    today = datetime.now()
    yesterday = today - timedelta(days=1)
    formatted_yesterday = yesterday.strftime('%Y-%m-%d')

    # Fetching historical stock data
    df = yf.download(ticker, start="2010-01-01", end=formatted_yesterday)
    stock_json = df.to_json(orient='table')
    return stock_json

# Route to generate and return moving average plot
@app.route('/stock/<ticker>/graphma', methods=['GET'])
def get_stock_graph(ticker):
    today = datetime.now()
    yesterday = today - timedelta(days=1)

    # Fetching historical stock data
    df = yf.download(ticker, start="2010-01-01", end=yesterday.strftime('%Y-%m-%d'))
    df = df.reset_index().drop(["Date", "Adj Close"], axis=1)

    # Calculating moving averages
    ma100 = df['Close'].rolling(100).mean()
    ma200 = df['Close'].rolling(200).mean()

    # Plotting the data
    plt.figure(figsize=(12, 6))
    plt.plot(df['Close'], label='Close Price')
    plt.plot(ma100, "r", label='100-Day MA')
    plt.plot(ma200, "g", label='200-Day MA')
    plt.title(f'{ticker.upper()} Stock Price with 100 & 200 Day Moving Averages')
    plt.xlabel('Time')
    plt.ylabel('Price')
    plt.legend()

    # Saving plot to a bytes buffer
    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    plt.close()

    # Returning the image as a base64 string
    img_base64 = base64.b64encode(img.getvalue()).decode('utf-8')
    return jsonify({"image": img_base64})

@app.route('/stock/<ticker>/predict', methods=['GET'])
def get_stock_prediction(ticker):
    today = datetime.now()
    yesterday = today - timedelta(days=1)
    scaler = MinMaxScaler(feature_range=(0, 1))

    # Fetching historical stock data
    df = yf.download(ticker, start="2010-01-01", end=yesterday.strftime('%Y-%m-%d'))
    df = df.reset_index().drop(["Date", "Adj Close"], axis=1)

    # Preparing training data
    data_training = pd.DataFrame(df['Close'][:int(len(df) * 0.70)])
    data_testing = pd.DataFrame(df['Close'][int(len(df) * 0.30):])
    data_training_array=scaler.fit_transform(data_training)

    # Preparing training sequences
    x_train=[]
    y_train=[]
    for i in range (100,data_training_array.shape[0]):
        x_train.append(data_training_array[i-100:i])
        y_train.append(data_training_array[i,0])
    x_train,y_train=np.array(x_train),np.array(y_train)

    # Preparing test data
    past_100_days=data_training.tail(100)
    final_df = pd.concat([past_100_days, data_testing], ignore_index=True)
    input_data=scaler.fit_transform(final_df)

    # Loading the pre-trained model
    model=load_model("stock_predictor.h5")

    # Preparing test sequences               
    x_test=[]
    y_test=[]
    for i in range (100,input_data.shape[0]):
        x_test.append(input_data[i-100:i])
        y_test.append(input_data[i,0]) 
    x_test,y_test=np.array(x_test),np.array(y_test)

    # Predicting and unscaling the values
    y_predicted=model.predict(x_test)
    scaler.scale_
    scale_factor=1/0.00249755
    y_predicted_unscaled=y_predicted*scale_factor
    y_test_unscaled=y_test*scale_factor

    # Predicting today's closing price
    last_100_days = input_data[-100:]  # Get the last 100 days' data
    last_100_days = np.expand_dims(last_100_days, axis=0)
    predicted_price_today = model.predict(last_100_days)
    predicted_price_today_unscaled = predicted_price_today * scale_factor

    # Calculating accuracy metrics
    r2 = r2_score(y_test_unscaled, y_predicted_unscaled)

    plt.figure(figsize=(12, 6))
    plt.plot(y_test_unscaled, 'b', label='Original Price')
    plt.plot(y_predicted_unscaled, 'r', label='Predicted Price')
    plt.plot(y_predicted_unscaled, 'r', label=f'Accuracy (R² = {r2:.2f})')  # Include R² in the label
    plt.scatter([len(y_test_unscaled)], [predicted_price_today_unscaled], color='g', label=f"Today's Prediction: {predicted_price_today_unscaled[0][0]:.2f}")
    plt.xlabel('Time')
    plt.ylabel('Price')
    plt.title( "Stock Price Prediction")
    plt.legend()
    plt.grid(True)

    plt.show()

    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    plt.close()

    img_base64 = base64.b64encode(img.getvalue()).decode('utf-8')
    return jsonify({"image": img_base64})


# Route to scrape and return top news URLs related to a company
@app.route('/news/<company>', methods=['GET'])
def get_company_news(company):
    # Format the company name for the search query
    search_query = company.replace(' ', '+')

    # URL of the finance news search (using Economic Times in this example)
    url = f"https://economictimes.indiatimes.com/topic/{search_query}"

    # Set user agent to mimic a browser request
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }

    # Send the request to get the HTML content
    response = requests.get(url, headers=headers)

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all news articles in the search results
    news_articles = soup.find_all('div', class_='clr flt topicstry story_list')

    # List to store the extracted headlines and URLs
    news_list = []

    # Loop through the first 3 articles and extract the headline and URL
    for article in news_articles[:10]:  # Slicing to get only the top 10 results
        # Find the headline and URL
        headline_tag = article.find('a', class_='wrapLines l2')
        if headline_tag:
            headline = headline_tag.get_text(strip=True)
            url = headline_tag['href']

            # Append the headline and full URL to the news_list
            full_url = f"https://economictimes.indiatimes.com{url}"
            news_list.append({'headline': headline, 'url': full_url})

    # Return the list of headlines and URLs as a JSON response
    return jsonify({"news": news_list})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
