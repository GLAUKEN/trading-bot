# Trading Bot - Bitcoin/Dash

Kraken API   : https://api.kraken.com/public

Poloniex API : https://poloniex.com/public`

## Common Indicators

Bid : The most someone is willing to pay for an asset

Ask : The least someone is willing to receive

Candles : Bundles of transactions

    - Duration : Length in time of the candle

    - Open     : First tx in the candle

    - Close    : Last tx

    - High/Low : Extreme price values of the candle

## Arbitrage

Kraken XBT/DASH   : https://api.kraken.com/0/public/Ticker?pair=DASHXBT

Poloniex XBT/DASH : https://poloniex.com/public?command=returnTicker

We retrieve the ask & bid at each timestamp of the XBT/DASH pair on both platforms
and then compare them.

    if (kraken_ask < poloniex-bid || poloniex_ask < kraken_bid) {
        //arbitrage opportunity detected
    }

## Data analysis

Retrieve XBT/DASH historical data on poloniex from 1 year ago.

Historical Data :

https://poloniex.com/public?command=returnChartData&currencyPair=BTC_DASH&start=1485302400&end=1548437192&period=300

    start=1485302400 : Unix timestamp 1 year ago

    end=1548437192   : Unix timestamp when we did

    period=300       : Time resolution (5 min)

Unix timestamp : https://www.unixtimestamp.com/index.php

### Y-EMA

Install dependencies :

    npm i --save exponential-moving-average

Use it :

    const ema = require('exponential-moving-average');

    ema(data, period);