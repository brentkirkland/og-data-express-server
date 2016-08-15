var ogs = require('open-graph-scraper');
var express = require('express');
var app = express();

app.get('/*', function (req, res) {
  console.log("request", req.url);
  ogs(
  	{
  		url: req.url.slice(1)
  	},
  	function(er, ress) {
  		res.send(ress);
  	}
  );
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
