//Import library
const RSI = require('technicalindicators').RSI;
//import the historical data 
const historic_json = require('../historic-BTC_DASH.json');

console.log(historic_json);

var calculateRSI = function(period) {
    var prices = [];
    for (let i = 0; i < historic_json.length; i++) {
        
        prices.push();
    }
}