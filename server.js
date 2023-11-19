const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

// Midleware
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const key = process.env.KEY;
app.use(express.json());


// API from CoinMarketCap
app.get('/get_coin/:symbol', async (req, res) => {
  const { symbol } = req.params;
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest', {
    params: {
      symbol: symbol,
    },  
    headers: {
        'X-CMC_PRO_API_KEY': key,
      },
    });

    // Check if the response contains an error
    if (response.data.status && response.data.status.error_code) {
      const error = response.data.status;
      switch (error.error_code) {
        case 400:
          res.status(400).json({ status: 400, message: `Bad Request: ${error.error_message}` });
          break;
        case 401:
          res.status(401).json({ status: 401, message: `Unauthorized: ${error.error_message}` });
          break;
        case 403:
          res.status(403).json({ status: 403, message: `Forbidden: ${error.error_message}` });
          break;
        case 429:
          res.status(429).json({ status: 429, message: `Rate Limit Exceeded: ${error.error_message}` });
          break;
        case 500:
          res.status(500).json({ status: 500, message: `Internal Server Error: ${error.error_message}` });
          break;
        default:
          res.status(500).json({ status: 500, message: `Unhandled error: ${error.error_message}` });
      }
    } else {
      // success
      const coin_data = response.data
      console.log('Symbol:', symbol);
      console.log('Data:', coin_data.data)
      console.log(coin_data);
      res.status(200).json(coin_data);
    }
  } catch (error) {
    response = null;
    // handle other errors
    console.error(error);
    res.status(500).json({ status: 500, message: `Internal Server Error: ${error.message}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});