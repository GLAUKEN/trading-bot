const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var arbitrage = function(limit) {
    for (let i = 0; i < limit; i++) {
        console.log("i : " + (i + 1));

        //request pair DASH/XBT
        const kraken_req = new XMLHttpRequest();
        kraken_req.open('GET', 'https://api.kraken.com/0/public/Ticker?pair=DASHXBT', false);
        kraken_req.send(null);
        //check the server response
        //req.status === 200 => server has responded
        if (kraken_req.status === 200) {
            //convert the object response into a json
            let json = JSON.parse(kraken_req.responseText);
    
            //access to DASH/XBT
            json = json["result"];
            json = json["DASHXBT"];
    
            //access to ask & bid
            var kraken_ask = json["a"];
            kraken_ask = kraken_ask[0];
            var kraken_bid = json["b"];
            kraken_bid = kraken_bid[0];
        } else {
            console.log("response status : %d (%s)", kraken_req.status, kraken_req.statusText);
        }
    
    //########################################################
    
        const poloniex_req = new XMLHttpRequest();
        poloniex_req.open('GET', 'https://poloniex.com/public?command=returnTicker', false);
        poloniex_req.send(null);
    
        if (poloniex_req.status === 200) {
            let json = JSON.parse(poloniex_req.responseText);
    
            //access to BTC/DASH
            json = json["BTC_DASH"];
    
            //access to ask & bid
            var poloniex_ask = json["lowestAsk"];
            var poloniex_bid = json["highestBid"]
        } else {
            console.log("response status: %d (%s)", poloniex_req.status, poloniex_req.statusText);
        }
    
        if (kraken_ask < poloniex_bid || poloniex_ask < kraken_bid) {
            console.log("Arbitrage found!");
        }
    }
}

arbitrage(1000);
