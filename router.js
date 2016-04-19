var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('./config.json')
module.exports = function(app) {
	router.use(function(req, res, next) {
		console.log(req.method.toUppercase() + " " + req.req.originalUrl);
	    next();
	});

	app.use('/api', router);

	app.get('/nominatim', function (req,res){
		console.log(req.query);
		var query = ""
		for(var key in req.query){
			query += key + "=" + req.query[key] + "&";
		}
		query = "?" + query + "key=" + config.mapquestKey;
		res.send(query);
	})

	router.route('/trailreport');
}
