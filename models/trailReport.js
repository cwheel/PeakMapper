var mongoose = require('mongoose');

module.exports = mongoose.model('trailReport', {
    peaks: {type : String, default: ''},
	trails: {type : String, default: ''},
	date: {type : Date, default: ''},
	parking: {type : String, default: ''},
	surface: {type : String, default: ''},
	equipment: {type : String, default: ''},
	waterCrossing: {type : String, default: ''},
	maintenance: {type : String, default: ''},
	dog: {type : String, default: ''},
	bugs: {type : String, default: ''},
	lostFound: {type : String, default: ''},
	comments: {type : String, default: ''},
	poster: {type : String, default: ''},
	posterEmail: {type : String, default: ''},
	submitted: {type : String, default: ''},
	link: {type : String, default: ''},
	reportID: {type : Number, default: 0},
});