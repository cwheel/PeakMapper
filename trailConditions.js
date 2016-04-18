var phantom = require('phantom');
var q = require('q');
var moment = require('moment');

var trailReport = require('./models/trailReport'); 

module.exports = {
	states: {
		Maine: 'me',
		Massachusetts: 'ma',
		NewHampshire: 'nh',
		RhodeIslandConnecticut: 'ri-ct',
		Vermont: 'vt'
	},
	getReport: (state, id) => {
		var page = null;
		var instance = null;
		var def = q.defer();

		phantom.create(['--load-images=no']).then(_instance => {
			instance = _instance;
		    return instance.createPage();
		})
		.then(_page => {
			page = _page;
			return _page.open('http://www.newenglandtrailconditions.com/' + state + '/viewreport.php?entryid=' + id);
		})
		.then(status => {
			page.includeJs('https://code.jquery.com/jquery-2.2.3.min.js').then(function() {
				page.evaluate(function() {
					var report = {}
					var reportItems = {peaks: 'Peaks',
					 					trails: 'Trails:',
					  					date: 'Date of Hike:', 
					  					parking: 'Parking/Access Road Notes:',
					  					surface: 'Surface Conditions:',
					 					equipment: 'Recommended Equipment:',
					 					waterCrossing: 'Water Crossing Notes:',
					 					maintenance: 'Trail Maintenance Notes:',
					 					dog: 'Dog-Related Notes:',
					 					bugs: 'Bugs:',
					 					lostFound: 'Lost and Found:',
					 					comments: 'Comments:',
					 					poster: 'Name:',
					 					posterEmail: 'E-Mail:',
					 					submitted: 'Date Submitted:',
					 					link: 'Link:'};

					for (key in reportItems) {
						var row = $('tr:contains("' + reportItems[key] + '")');
						report[key] = $($(row[row.length - 1]).children()[2]).text().trim();
					}

					return report;
				}).then(function(result) {
					result.reportID = id;
					result.date = moment(result.date).toDate();
					def.resolve(result);

					page.close();
					instance.exit();
				});
			});
		})
		.catch(error => {
		    instance.exit();
		});

		return def.promise;
	},
	getReports: (state, from,to) => {
		var page = null;
		var instance = null;
		var def = q.defer();

		phantom.create(['--load-images=no']).then(_instance => {
			instance = _instance;
		    return instance.createPage();
		})
		.then(_page => {
			page = _page;
			return _page.open('http://www.newenglandtrailconditions.com/' + state + '/index.php?limit1=' + from + '&limit2=' + to);
		})
		.then(status => {
			page.includeJs('https://code.jquery.com/jquery-2.2.3.min.js').then(function() {
				page.evaluate(function() {
					var reports = [];

					//Dig through nested tables to the deepest
					var tables = $('tbody:contains("Peaks and Trails")');
					var reportsTable = $(tables[tables.length - 1]).children();

					reportsTable.each(function(i, element) {
						element = $(element);

						//Not a row seperator and we're not on the header or footer row
						if (!element.attr('height') && i > 0 && i < reportsTable.length - 1) {
							var reportElements = element.children();

							//Grab the report URL
							var id = $($(reportElements[0]).children()[0]).attr('href').replace('viewreport.php?entryid=','');
							id = parseInt(id, 10);

							//Grab the report location
							var location = $($($(reportElements[1]).children()[0]).children()[0]).text();

							//Grab the date
							var date = $($(reportElements[2]).children()[0]).text() + " " + $(reportElements.contents()[7]).text();

							//Save the report
							reports.push({id: id, location: location, date: date});
						}
					});

					return reports;
				}).then(function(result) {
					def.resolve(result);

					page.close();
					instance.exit();
				});
			});
		})
		.catch(error => {
		    instance.exit();
		});

		return def.promise;
	},
	populateDatabase: (state, from, to) => {
		this.getReports(state, from, to).then((reports) => {
			for (var i = 0; i < reports.length; i++) {
				var id = reports[i].id;

				this.getReport(state, id).then((report) => {
					if (report.peaks == '') {
						console.log("[Error] Retrying " + report.reportID);

						this.getReport(state, id).then((report) => {
							var saveReport = new trailReport(report);
							saveReport.save();

							console.log("Saved report " + report.reportID + ": " + report.peaks);
						});
					} else {
						var saveReport = new trailReport(report);
						saveReport.save();

						console.log("Saved report " + report.reportID + ": " + report.peaks);
					}
				});
			}
		});
	},
	reportsFrom: (from) => {
		var def = q.defer();

		trailReport.find({date: {$gte: from}}, function(err, reports) {
			def.resolve(reports);
		});

		return def.promise;
	},
	reportsFor: (peak) => {
		var re = new RegExp(peak, "g");
		var def = q.defer();

		trailReport.find({peaks: re}, function(err, reports) {
			def.resolve(reports);
		});

		return def.promise;
	}
}