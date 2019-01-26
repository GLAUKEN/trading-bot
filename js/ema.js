//import the ema library
const ema = require('exponential-moving-average');
//import the historical data 
const historic_json = require('../historic-BTC_DASH.json');

function calculateEma(days) {
    //retrieve the close prices and store it in an array
    var prices = [];
    for (let i = 0; i < historic_json.length; i++) {
        prices.push(historic_json[i].close);
    }
    //compute the ema value for each element
    return ema(prices, days);
}

console.log(calculateEma(50));

