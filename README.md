# Crypto-Search
The server.js script is a microservice that receives requests to search coinmarketcap using the cryptocurrency symbol as a search parameter.  It will return a JSON file with the values of the coin below when using the curl command: curl http://localhost:PORT/get_coin/:symbol where PORT is 3001 or a .env PORT variable and :symbol is the user input for the cryptocurrency symbol.  

To run the code: 
 1. clone the repository from a command line or from the gui
 2. install the dependencies (npm install)
 3. create a .env file with the values PORT = (whichever port you'd like to use.) and KEY = (CoinMarketCap API key)
  3a.  Create a free basic plan from CoinMarketCap and copy the api key int the above variable  
 5. start the server with npm start
 6. Use curl requests to the localhost url or integrate the url request in existing code

Here is the return value of a 200 response request using the symbol BTC
{
    "data": {
        "1": {
            "id": 1,
            "name": "Bitcoin",
            "symbol": "BTC",
            "slug": "bitcoin",
            "is_active": 1,
            "is_fiat": 0,
            "circulating_supply": 17199862,
            "total_supply": 17199862,
            "max_supply": 21000000,
            "date_added": "2013-04-28T00:00:00.000Z",
            "num_market_pairs": 331,
            "cmc_rank": 1,
            "last_updated": "2018-08-09T21:56:28.000Z",
            "tags": [
                "mineable"
            ],
            "platform": null,
            "self_reported_circulating_supply": null,
            "self_reported_market_cap": null,
            "quote": {
                "USD": {
                    "price": 6602.60701122,
                    "volume_24h": 4314444687.5194,
                    "volume_change_24h": -0.152774,
                    "percent_change_1h": 0.988615,
                    "percent_change_24h": 4.37185,
                    "percent_change_7d": -12.1352,
                    "percent_change_30d": -12.1352,
                    "market_cap": 852164659250.2758,
                    "market_cap_dominance": 51,
                    "fully_diluted_market_cap": 952835089431.14,
                    "last_updated": "2018-08-09T21:56:28.000Z"
                }
            }
        }
    },
    "status": {
        "timestamp": "2023-11-15T04:13:25.498Z",
        "error_code": 0,
        "error_message": "",
        "elapsed": 10,
        "credit_count": 1,
        "notice": ""
    }

}  
