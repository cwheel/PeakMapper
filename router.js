var express = require('express');
var router = express.Router();

module.exports = function(app) {
	router.use(function(req, res, next) {
		console.log(req.method.toUppercase() + " " + req.req.originalUrl);
	    next();
	});

	app.use('/api', router);

	router.route('/trailreport');
}