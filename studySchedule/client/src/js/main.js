function getInformatik() {
	var request = require("request");
	var options = { method: "GET", url: "http://localhost:8080/informatik" };

	request(options, function (error, response, body) {
		if (error) { throw new Error(error); }
		console.log(body);
	});
}

window.getInformatik = getInformatik;
