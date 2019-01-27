# Trading Bot - Bitcoin/Dash


<div>
    &nbsp
    <img src="image\kraken.jpg" alt="kraken-logo" width="24"/>
    <b>Kraken API &nbsp&nbsp:</b>
    <a href="https://api.kraken.com/public"> https://api.kraken.com/public
    </a>
    <br/><br/>
</div>

<div>
    <img src="image\poloniex.jpg" alt="poloniex-logo" width="33"/>
    <b>Poloniex API: </b>
    <a href="https://api.kraken.com/public"> https://poloniex.com/public
    </a>
    <br/><br/>
</div>


## Common Indicators:

**Bid** : The most someone is willing to pay for an asset

**Ask** : The least someone is willing to receive

**Candles** : Bundles of transactions

    - Duration : Length in time of the candle

    - Open     : First transaction in the candle

    - Close    : Last transaction

    - High/Low : Extreme price values of the candle

## Arbitrage:

**Kraken XBT/DASH:**

https://api.kraken.com/0/public/Ticker?pair=DASHXBT

**Poloniex XBT/DASH:**

https://poloniex.com/public?command=returnTicker

We retrieve the ask & bid at each timestamp of the XBT/DASH pair on both platforms and then compare them.

    if (kraken_ask < poloniex-bid || poloniex_ask < kraken_bid) {
        //arbitrage opportunity detected
    }

## Data analysis:

Retrieve XBT/DASH historical data of Poloniex from 1 year ago.

**Historical Data:**

https://poloniex.com/public?command=returnChartData&currencyPair=BTC_DASH&start=1485302400&end=1548437192&period=300

    start=1485302400 : Unix timestamp 1 year ago

    end=1548437192   : Unix timestamp Friday 25 January at 5:26pm

    period=300       : Time resolution (5 min)

**Unix timestamp:**

https://www.unixtimestamp.com/index.php

## Indicators:

### Simple Moving Average - X-SMA:

The Simple Moving Average (SMA) is calculated by adding the price of an instrument over a number of time periods and then dividing the sum by the number of time periods. The SMA is basically the average price of the given time period, with equal weighting given to the price of each period.

**Formula:**

    SMA = sum(prices) / n, where n = Time period

### Exponential Moving Average - Y-EMA:

The Exponential Moving Average (EMA) represents an average of prices, but places more weight on recent prices. The weighting applied to the most recent price depends on the selected period of the moving average. The shorter the period for the EMA, the more weight that will be applied to the most recent price.

**Formula:**

    EMA = (P - EMAp) * K + EMAp

    where:
        - P = Price of the current period
        - EMAp = Exponential Moving Average of the previous period
        - K = Smoothing constant 2 / (n + 1)
        - n = Number of periods in a simple moving average roughly approximated by the EMA

**Install dependencies:**

    npm i --save exponential-moving-average

**Use it:**

    const ema = require('exponential-moving-average');

    ema(data, period);

### Relative Strength Index - RSI:

Momentum oscillator that measures the speed and change of price movements.

**RSI oscillates between 0 and 100:**

    - Above 70: overbought
    - Below 30: oversold

**Formula:**

    RSI = 100 - 100 / (1 + RS) where RS = Average Gain / Average Loss

### Moving Average Convergence Divergence - MACD:

Momentum indicator calculated to assess the power of price movement in a market.

**Procedure:**

    - Calculate 12-period EMA of price
    - Calculate 26-period EMA of price
    - Subtract  26-period EMA from the 12-period EMA
    - Calculate 9-period EMA of the result obtained from step 3

This 9-period is called the MACD line.
