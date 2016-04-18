var mongoose = require('mongoose');
var moment = require('moment');
var express = require('express');
var bodyParser = require('body-parser');

var trailConditions = require('./trailConditions');
var router = require('./router');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router(app);

mongoose.connect('mongodb://localhost/peakMapper');

/*trailConditions.reportsFor('Osceola').then((res) => {
	console.log(res);
});*/
//trailConditions.reportsFrom(moment().startOf('day').subtract(1, 'days').toDate());
//trailConditions.populateDatabase(trailConditions.states.NewHampshire, 50, 100);