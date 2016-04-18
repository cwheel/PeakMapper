var mongoose = require('mongoose');
var moment = require('moment');

var trailConditions = require('./trailConditions');

mongoose.connect('mongodb://localhost/peakMapper');

trailConditions.reportsFor('Osceola').then((res) => {
	console.log(res);
});
//trailConditions.reportsUntil(moment().startOf('day').subtract(1, 'days').toDate());
//trailConditions.populateDatabase(trailConditions.states.NewHampshire, 50, 100);