//Arbitrage

//import xmlhttprequest library
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var arbitrage = function(day) {
    for (let i = 0; i < day; i++) {
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
            console.log(json);
    
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
    
        //check the server response
        //req.status === 200: server has responded
        if (poloniex_req.status === 200) {
            //convert the object response into a json
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
            let serviceId = 'serviceId';

            var info = {
                from: 'knj.lau@gmail.com',
                to: 'kenji.lau@devinci.fr',
                subject: 'subject',
                message: 'Arbitrage opportunity detected!'
            };

            emailjs.send(serviceId, info);
        }
    }
}

arbitrage(1000);
