const historic_json = require('../historic-BTC_DASH.json');

var calculateRSI = function(period) {
    //first we retrieve the close prices
    var prices = [];
    for (let i = 0; i < historic_json.length; i++) {
        prices.push(historic_json[i].close);
    }

    //calculate sumGain & sumLoss
    var sumGain = 0;
    var sumLoss = 0;
    var diff;
    for (let i = 1; i < prices.length; i++) {
        diff = prices[i] - prices[i - 1];
        if ( diff >= 0) {
            sumGain += diff;
        } else {
            sumLoss -= diff;
        }
    }
    
    if (sumGain === 0) return 0;
    
    let relativeStrength = sumGain / sumLoss;
    return 100 - (100 / (1 + relativeStrength));
}

console.log("RSI with period = 14");
console.log(calculateRSI(14));

