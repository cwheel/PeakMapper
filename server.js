var Spooky = require('spooky');

var spooky = new Spooky({child: {
            transport: 'stdio',
            "ignore-ssl-errors": true,
            "ssl-protocol": 'tlsv1'

        }}, function (err) {
        	spooky.start('http://www.newenglandtrailconditions.com/nh/');

        	spooky.then(function () {
        		this.emit('hello', 'Hello, from ' + this.evaluate(function () {
        			return document.title;
        		}));
        	});

        	spooky.run();
       	});

spooky.on('hello', function (greeting) {
    console.log(greeting);
});