//poloniex API
//import xmlhttprequest library
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//request Poloniex API
const req = new XMLHttpRequest();
req.open('GET', 'https://poloniex.com/public?command=returnTicker', false);
req.send(null);

//check the server response
//req.status === 200 => server has responded
if (req.status === 200) {
    //convert the object response into a json
    let json = JSON.parse(req.responseText);

    //access to BTC/DASH
    json = json["BTC_DASH"];

    //access to ask & bid
    let ask = json["lowestAsk"];
    let bid = json["highestBid"]
    
    console.log("DASH/XBT ask");
    console.log(ask);
    console.log("---------------");
    console.log("DASH/XBT bid")
    console.log(bid);
} else {
    console.log("response status: %d (%s)", req.status, req.statusText);
}
