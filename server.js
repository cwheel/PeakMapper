var trailConditions = require('./trailConditions'); 

trailConditions.getReport(trailConditions.states.NewHampshire, 25531).then((result) => {
	console.log(result);
});