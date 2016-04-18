var mongoose = require('mongoose');
var moment = require('moment');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var trailConditions = require('./trailConditions');
var router = require('./router');

var app = express();
mongoose.connect('mongodb://localhost/peakMapper');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, 'client/dist')));
app.use('/node_modules', express.static(path.resolve(__dirname, 'client/node_modules')));
router(app);

app.listen(3000);

/*trailConditions.reportsFor('Osceola').then((res) => {
	console.log(res);
});*/
//trailConditions.reportsFrom(moment().startOf('day').subtract(1, 'days').toDate());
//trailConditions.populateDatabase(trailConditions.states.NewHampshire, 50, 100);