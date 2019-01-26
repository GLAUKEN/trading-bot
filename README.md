# Trading Bot - Bitcoin/Dash

#### Kraken API:

https://api.kraken.com/public

#### Poloniex API:

https://poloniex.com/public`

## Common Indicators:

Bid : The most someone is willing to pay for an asset

Ask : The least someone is willing to receive

Candles : Bundles of transactions

    - Duration : Length in time of the candle

    - Open     : First tx in the candle

    - Close    : Last tx

    - High/Low : Extreme price values of the candle

## Arbitrage

#### Kraken XBT/DASH:

https://api.kraken.com/0/public/Ticker?pair=DASHXBT

#### Poloniex XBT/DASH:

https://poloniex.com/public?command=returnTicker

We retrieve the ask & bid at each timestamp of the XBT/DASH pair on both platforms
and then compare them.

    if (kraken_ask < poloniex-bid || poloniex_ask < kraken_bid) {
        //arbitrage opportunity detected
    }

## Data analysis

Retrieve XBT/DASH historical data of Poloniex from 1 year ago.

#### Historical Data:

https://poloniex.com/public?command=returnChartData&currencyPair=BTC_DASH&start=1485302400&end=1548437192&period=300

    start=1485302400 : Unix timestamp 1 year ago

    end=1548437192   : Unix timestamp when we did it

    period=300       : Time resolution (5 min)

#### Unix timestamp:

https://www.unixtimestamp.com/index.php

### Exponential Moving Average - Y-EMA

#### Formula:

    EMA = (P - EMAp) * K + EMAp

    where:
        - P = Price of the current period
        - EMAp = Exponential Moving Average of the previous period
        - K = Smoothing constant 2 / (n + 1)
        - n = Number of periods in a simple moving average roughly approximated by the EMA

#### Install dependencies:

    npm i --save exponential-moving-average

#### Use it:

    const ema = require('exponential-moving-average');

    ema(data, period);

### Relative Strength Index - RSI

Momentum oscillator that measures the speed and change of price movements

RSI oscillates between 0 and 100:

    - Above 70: overbought
    - Below 30: oversold

#### Formula:

    RSI = 100 - 100 / (1 + RS) where RS = Average Gain / Average Loss

### Moving Average Convergence Divergence - MACD

Momentum indicator calculated to assess the power of price movement in a market

#### Procedure:

    - Calculate 12-period EMA of price
    - Calculate 26-period EMA of price
    - Subtract 26-period EMA from the 12-period EMA
    - Calculate 9-period EMA of the result obtained from step 3

This 9-period is called the MACD line