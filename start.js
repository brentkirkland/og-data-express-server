var ogs = require('open-graph-scraper');
var express = require('express');
var app = express();

app.get('/*', function (req, res) {
  console.log("request", req.url);
  var data = {};
  ogs(
  	{
  		url: req.url.slice(1)
  	},
  	function(er, ress) {
  		data = ress;
  		res.send(data);
  	}
  );
});

app.listen(3000, function () {
  console.log('Oppy listening on port 3000!');
});
