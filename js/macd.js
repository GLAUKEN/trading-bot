const ema = require('exponential-moving-average'); 
const historic_json = require('../historic-BTC_DASH.json');

var calculateMACD = function() {
    var prices = [];
    for (let i = 0; i < historic_json.length; i++) {
        prices.push(historic_json[i].close);
    }
    //step 1: calculate a 12-period EMA
    let ema_prices_12 = ema(prices, 12);
    //step 2: calculate a 26-period EMA
    let ema_prices_26 = ema(prices, 26);
    //step 3: subtract the 26-period EMA from the 12-period EMA
    let difference = [];
    for (let i = 0; i < ema_prices_12.length; i++) {
        difference.push(ema_prices_12[i] - ema_prices_26[i]);
    }
    //step 4: calculate a nine-period EMA of the result obtained from step 3.
    var macd = ema(difference, 9);
    return macd;
}

console.log(calculateMACD());