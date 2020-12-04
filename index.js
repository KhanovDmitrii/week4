var express = require('express');
var app = express();

const NAME = "khanovds";
// respond with "hello world" when a GET request is made to the homepage
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'x-test,Content-Type,Accept,Access-Control-Allow-Headers');
  next();
});

app.get('/', function(req, res) {
  res.send(NAME); 
});

app.post('/result4/', function(req, res) {
res.setHeader('Content-Type','application/json')	
//console.log(JSON.stringify(Object.keys(req)));
get_post(req).then(post => {
//	console.log(JSON.stringify(req.res));
  res.send(JSON.stringify({
  	"message": NAME,
  	"x-result": req.headers["x-test"],
  	"x-body": post 
  })); 
});

});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})

function get_post(req) {
return new Promise(r => {
	let data = "";
	req.on("data", chunk => data += chunk);
	req.on("end", ()=> r(data))
	});
}