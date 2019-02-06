const ema = require('exponential-moving-average');
const historic_json = require('../historic-BTC_DASH.json');

function calculateEma(days) {
    var prices = [];
    for (let i = 0; i < historic_json.length; i++) {
        prices.push(historic_json[i].close);
    }
    return ema(prices, days);
}

console.log(calculateEma(50));

