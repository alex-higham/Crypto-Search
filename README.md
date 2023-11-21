# Crypto-Search
The server.js script is a microservice that receives requests to search coinmarketcap using the cryptocurrency symbol as a search parameter.  It will return a JSON file with the values of the coin below when using the curl command: curl http://localhost:PORT/get_coin/:symbol where PORT is 3001 or a .env PORT variable and :symbol is the user input for the cryptocurrency symbol. It will also take request calls from other programs using a promise based http request service like axios.  This program has only been tested using node.js and curl console commands, so some tweaking may be necessary if you're using another service. 

To request data from this microservice, add the axios dependency or other variant that uses a promise-based HTTP library to fetch data.  In the get request, use the http://localhost:PORT/get_coin/:symbols, where PORT is either 3001, or another designated port of your choice, and symbols is the requested cryptocurrency you'd like to get info on.  The response.data will hold the JSON file with the cryptocurrency variables that can be parsed as needed.  
const axios = require('axios');

const query_coin = async (symbols) => {
  try {
    const response = await axios.get(`http://localhost:3001/get_coin', 
      params: {
        symbol: Array.isArray(symbols) ? symbols.join(',') : symbols,
      },
    });
    console.log('Response from Microservice:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error requesting data from Microservice:', error.message);
    throw error;
  }
};

// Example Call for Single Coin
const single_symbol = 'BTC';
query_coin([single_symbol]);

// Example Call for Multiple Coins
const multiple_symbols = ['BTC', 'ETH', 'LTC'];
query_coin(multiple_symbols);

To run the code and receive data from the microservice server: 
 1. clone the repository from a command line or from the gui
 2. install the dependencies (npm install)
 3. create a .env file with the values PORT = (whichever port you'd like to use.) and KEY = (CoinMarketCap API key)
   3a.  Create a free basic plan from CoinMarketCap and copy the api key int the above variable for KEY  
 5. start the server with npm start
 6. Use curl requests to the localhost url or integrate the get request above (or your own version of code) to request data. The server will post console.logs of the JSON values on successful returns and error messages when unsuccessful.  


Here is the return value of a 200 response request using the symbol BTC
Symbols: [ 'BTC' ]
Data: {
  "status": {
    "timestamp": "2023-11-20T21:31:58.633Z",
    "error_code": 0,
    "error_message": null,
    "elapsed": 59,
    "credit_count": 1,
    "notice": null
  },
  "data": {
    "BTC": [
      {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "slug": "bitcoin",
        "num_market_pairs": 10557,
        "date_added": "2010-07-13T00:00:00.000Z",
        "max_supply": 21000000,
        "circulating_supply": 19548118,
        "total_supply": 19548118,
        "is_active": 1,
        "infinite_supply": false,
        "platform": null,
        "cmc_rank": 1,
        "is_fiat": 0,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2023-11-20T21:30:00.000Z",
        "quote": {
          "USD": {
            "price": 37350.304908375445,
            "volume_24h": 21720549838.25659,
            "volume_change_24h": 91.8369,
            "percent_change_1h": -0.56586367,
            "percent_change_24h": 0.87971727,
            "percent_change_7d": 2.14221148,
            "percent_change_30d": 24.33151609,
            "percent_change_60d": 40.47979617,
            "percent_change_90d": 45.73527164,
            "market_cap": 730128167684.9023,
            "market_cap_dominance": 51.5389,
            "fully_diluted_market_cap": 784356403075.88,
            "tvl": null,
            "last_updated": "2023-11-20T21:30:00.000Z"
          }
        }
      }
    ]
  }
}

![image](https://github.com/alex-higham/Crypto-Search/assets/117798097/bf5cdc75-3a6f-4ef1-9342-1525d893afbf)


