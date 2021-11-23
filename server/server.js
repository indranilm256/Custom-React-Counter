var express = require("express");
const request = require('request');

const app = express();
const cors = require("cors");

const options = {  
    url: 'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/indranilm.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
    }
};

app.use(cors());

var data = {"indranilm": 21};

app.put("/", (req, res, next) => {
    request({
        url:     'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json',
        headers: {'content-type' : 'application/json'},
        method: 'PUT',
        json:    data,
    }, function(error, response, body){
        console.log(body);
    });
});

app.get("/", (req, res, next) => {
    request(options, function(err, output, body) {  
        var json = JSON.parse(body);
        console.log(body);
        console.log(json); // Logging the output within the request function
        res.json(json) //then returning the response.. The request.json is empty over here
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});