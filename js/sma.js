const historic_json = require('../historic-BTC_DASH.json');

function CalculateSMAPoints(movingAveragePeriod) {
  var smaPoints = [];
  var sum = 0.0;
  var limit = historic_json.length;
  var length = Math.round(movingAveragePeriod);
  for (var i = 0; i < length; i++) {
    smaPoints[i] = { "X": historic_json[i].date, "Y": historic_json[i].close };
  }
  for (var i = 0; i < limit; ++i) {
    if (i >= length - 1 && i < limit) {
      if (i - movingAveragePeriod >= 0) {
        sum += historic_json[i].close - historic_json[i - length].close; 
      } else {
        sum += historic_json[i].close;
      }
      smaPoints[i] = { "X": historic_json[i].date, "Y": sum / movingAveragePeriod 
      };
    } else {
      if (i < movingAveragePeriod - 1) {
        sum += historic_json[i].close;
      }
    }
  }
  return smaPoints;
}

var smaPoints = CalculateSMAPoints(20);
console.log(smaPoints);