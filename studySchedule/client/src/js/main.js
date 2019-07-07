const mongoose = require("mongoose");
function initAndPushDataSet() {
	console.log("in initAndkdhfkdshf");
	var request = require("request");
	var payload = {
		name: "Informatik",
		semester: 6,
		ectsPerSem: 30,
		semesters: [{
			module: [{
				name: "Webentwicklung",
				ects: 5,
				id: new mongoose.Types.ObjectId()
			}, {
				name: "Webtechnologien",
				ects: 5,
				id: new mongoose.Types.ObjectId()
			}]
		}]
	};
	var options = {
		method: "POST",
		url: "http://localhost:8080/informatik",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(payload)
	};
	// let l = JSON.stringify({ name: "Informatik", semester: 6, ectsPerSem: 30, semesters: [{ module: [{ name: "Webentwicklung", ects: 5, id: 1, unique: { unique: true } }, { }] }] }).length;
	// console.log("length: ", l);
	// fetch("http://localhost:8080/informatik", {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/json"
	// 	},
	// 	body: JSON.stringify({ name: "Informatik", semester: 6, ectsPerSem: 30, semesters: [{ module: [{ name: "Webentwicklung", ects: 5, id: 1, unique: { unique: true } }, { }] }] })
	// }).then((response) => {
	// 	response.json().then((jsonData) => {
	// 		console.log("response: ", jsonData);
	// 	});
	// });
	request(options, function (error, response, body) {
		console.log(error);
		console.log(response);
		console.log(body);
	});
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
	let payload = {
		name: "Informatik",
		semester: 6,
		ectsPerSem: 30,
	};
	var options = {
		method: "POST",
		url: "http://localhost:8080/wirtschaft",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(payload)
	};
	request(options, (err, res, body) => {
		console.log("response: ", res);
		console.log("body: ", body);
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
		tabelproduce();
	}
}

// eslint-disable-next-line no-unused-vars
function tabelproduce() {
	// semesteranzahl angegeben= Zeilen
	// wieviele ECTS pro semester = Spalten
	let moduleRows = numberOfSem;
	let moduleColumns = ectsPerSem / minEcts;
	let matrix = moduleColumns * moduleRows;
	let table = [];
	let body = document.getElementsByTagName("body")[0];
	for (let i = 0; i < moduleRows; i++) {
		for (let j = 0; j < moduleColumns; j++) {
			let div = document.createElement("div");
			div.className = `table_${i}`;
			body.appendChild(div);
		}
	}
}
window.speichern = speichern;
window.getInformatik = getInformatik;
window.initAndPushDataSet = initAndPushDataSet;
window.postWirtschaft = postWirtschaft;
