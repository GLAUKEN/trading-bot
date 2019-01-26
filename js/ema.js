//import the ema library
const ema = require('exponential-moving-average');
//import the historical data 
const historic_json = require('../historic-BTC_DASH.json');

function calculateEma(days) {
    //retrieve the close value and store it in an array
    var arr = [];
    
    for (let i = 0; i < historic_json.length; i++) {
        let data = historic_json[i];
        arr.push(data["close"]);
    }

    //compute the ema value for each element
    var res = ema(arr, days);
    //print ema values (values are rounded at 10^(-2))
    for (let i = 0; i < res.length; i++) {
        console.log(res[i]);
    }
}

calculateEma(50);