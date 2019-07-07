function initAndPushDataSet() {
	console.log("in initAndkdhfkdshf");
	// var request = require("request");

	// var options = {
	// 	method: "POST",
	// 	url: "http://localhost:8080/informatik",
	// 	headers: { "content-type": "application/json" },
	// 	body: JSON.stringify("{name: \"Informatik\",semester: 6,ectsPerSem: 30,semesters: [{module: [{name: \"Webentwicklung\",ects: 5,id: 1,unique: {unique: true}},{}]}]}")
	// };
	let l = JSON.stringify({ name: "Informatik", semester: 6, ectsPerSem: 30, semesters: [{ module: [{ name: "Webentwicklung", ects: 5, id: 1, unique: { unique: true } }, { }] }] }).length;
	console.log("length: ", l);
	fetch("http://localhost:8080/informatik", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ name: "Informatik", semester: 6, ectsPerSem: 30, semesters: [{ module: [{ name: "Webentwicklung", ects: 5, id: 1, unique: { unique: true } }, { }] }] })
	}).then((response) => {
		response.json().then((jsonData) => {
			console.log("response: ", jsonData);
		});
	});
	// request(options, function (error, response, body) {
	// 	console.log(error);
	// 	console.log(response);
	// 	console.log(body);
	// });
}

function getInformatik() {
	var request = require("request");
	var options = { method: "GET", url: "http://localhost:8080/informatik" };

	request(options, function (error, response, body) {
		if (error) { throw new Error(error); }
		console.log(body);
	});
}

function postWirtschaft() {
	var request = require("request");
	// var options = {
	// 	method: "POST",
	// 	url: "http://localhost:8080/wirtschaft",
	// 	headers: { "content-type": "application/json" },
	// 	body: {
	// 		name: "Informatik",
	// 		semester: 6,
	// 		ectsPerSem: 30,
	// 	},
	// 	json: true,
	// };
	// request.post(options, function (error, response, body) {
	// 	if (error) { throw new Error(error); }

	// 	console.log(body);
	// });
	fetch("http://localhost:8080/wirtschaft", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ name: "Informatik" })
	});
}

let minEcts = "";
let ectsPerSem = "";
let numberOfSem = "";

function speichern() {
	//checkFormular() // auf number überprüfen, validieren der userdaten
	minEcts = document.getElementById("minEcts").value;
	ectsPerSem = document.getElementById("ectsPerSem").value;
	numberOfSem = document.getElementById("numberOfSem").value;
	console.log("ECTS:", minEcts);
	console.log("ectsPerSem:", ectsPerSem);
	console.log("numberOfSem:", numberOfSem);
	if (minEcts === "") {
		alert("Sie müssen alle Felder ausfuellen!");
	}
	else {
		return;
	}
}

// eslint-disable-next-line no-unused-vars
function tabelproduce() {
	// semesteranzahl angegeben= Zeilen
	// wieviele ECTS pro semester = Spalten
}
window.speichern = speichern;
window.getInformatik = getInformatik;
window.initAndPushDataSet = initAndPushDataSet;
window.postWirtschaft = postWirtschaft;
