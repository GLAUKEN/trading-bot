const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const req = new XMLHttpRequest();

req.open('GET', 'https://poloniex.com/public?command=returnTicker', false);
req.send(null);

if (req.status === 200) {
    let json = JSON.parse(req.responseText);

    //access to BTC/DASH
    json = json["BTC_DASH"];

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
