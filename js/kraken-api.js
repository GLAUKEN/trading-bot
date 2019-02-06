const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const req = new XMLHttpRequest();
req.open('GET', 'https://api.kraken.com/0/public/Ticker?pair=DASHXBT', false);
req.send(null);

if (req.status === 200) {
    let json = JSON.parse(req.responseText);

    //access to DASH/XBT
    json = json["result"];
    json = json["DASHXBT"];

    //access to ask & bid
    let ask = json["a"];
    let bid = json["b"];

    console.log("DASH/XBT ask");
    console.log(ask[0]);
    console.log("---------------");
    console.log("DASH/XBT bid")
    console.log(bid[0]);
} else {
    console.log("response status: %d (%s)", req.status, req.statusText);
}
