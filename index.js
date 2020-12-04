var express = require('express');
var app = express();

const NAME = "khanovds";
const port = process.env.PORT || 80;

app.get('/', function(req, res) {
    res.send(NAME);
});

app.post('/result4/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'x-test,Content-Type,Accept,Access-Control-Allow-Headers');
    get_post(req).then(post => {
        res.send(JSON.stringify({
            "message": NAME,
            "x-result": req.headers["x-test"],
            "x-body": post
        }));
    });

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

function get_post(req) {
    return new Promise(r => {
        let data = "";
        req.on("data", chunk => data += chunk);
        req.on("end", () => r(data))
    });
}