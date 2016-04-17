var phantom = require('phantom');
var q = require('q');

getEntries(0,50).then((result) => {
	console.log(result);
});

function getEntries(from,to) {
	var page = null;
	var instance = null;
	var def = q.defer();

	phantom.create(['--load-images=no']).then(_instance => {
		instance = _instance;
	    return instance.createPage();
	})
	.then(_page => {
		page = _page;
		return _page.open('http://www.newenglandtrailconditions.com/nh/index.php?limit1=' + from + '&limit2=' + to);
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
}