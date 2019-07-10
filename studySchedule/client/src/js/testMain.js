function initAndPushDataSet() {
	console.log("in initAndkdhfkdshf");
	var request = require("request");
	var payload = {
		name: "Informatik",
		semester: 6,
		ectsPerSem: 30,
		semesterTiming: "Wintersemester",
		semesters: [{
			module: [{
				name: "Webentwicklung",
				ects: minEcts,
			}, {
				name: "Webtechnologien",
				ects: 5,
			}]
		}]
	};
	var options = {
		method: "POST",
		url: "http://localhost:8080/informatik",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(payload)
	};

	request(options, function (error, response, body) {
		console.log(error);
		console.log(response);
		console.log(body);
	});
}
//-------------Get Schedules---------------------//
//Get all Schedules
function getAllInformatikSchedules() {
	var request = require("request");
	var options = { method: "GET", url: "http://localhost:8080/informatik/" };

	request(options, function (error, response, body) {
		if (error) { throw new Error(error); }
		console.log(body);
	});
}

//Get only Infomatik Winteresemster
function getInfWinterSemester() {
	var request = require("request");
	var options = { method: "GET", url: "http://localhost:8080/informatik/Wintersemester" };

	request(options, function (error, response, body) {
		if (error) { throw new Error(error); }
		console.log(body);
	});
}
// Get only SommerSemester
function getInfSummerSemester() {
	var request = require("request");
	var options = { method: "GET", url: "http://localhost:8080/informatik/Sommersemester" };

	request(options, function (error, response, body) {
		if (error) { throw new Error(error); }
		console.log(body);
	});
}
//Get WinterSemesterModule of selected Schedule
function getInfWinterSemesterModules() {
	var request = require("request");
	var options = { method: "GET", url: "http://localhost:8080/informatik/Wintersemester/Modules" };

	request(options, function (error, response, body) {
		if (error) { throw new Error(error); }
		console.log(body);
	});
}
//Get SummerSemesterModule of selected Schedule
function getInfSummerSemesterModules() {
	var request = require("request");
	var options = { method: "GET", url: "http://localhost:8080/informatik/Sommersemester/Modules" };

	request(options, function (error, response, body) {
		if (error) { throw new Error(error); }
		console.log(body);
	});
}

//Update Schedule
function updateInfSchedule() {
	console.log("Update Function triggered");
	var request = require("request");
	var payload = {
		name: "UpdateInformatik",
		semester: 6,
		ectsPerSem: 30,
		semesterTiming: "Wintersemester",
		semesters: [{
			module: [{
				name: "Webentwicklung",
				ects: 5,
			}, {
				name: "Webtechnologien",
				ects: 5,
			}]
		}]
	};
	var options = {
		method: "PUT",
		url: "http://localhost:8080/informatik/5d248b99d3013b0cdcd45f57",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(payload)
	};
	request(options, function (error, response, body) {
		if (error) { throw new Error(error); }
		console.log(body);
	});
}

function deleteInfSchedule() {
	console.log("Delete Function triggered");
	var request = require("request");
	var options = {
		method: "DELETE",
		url: "http://localhost:8080/informatik/5d248b99d3013b0cdcd45f57",
		headers: { "content-type": "application/json" },
	};
	request(options, function (error, response, body) {
		if (error) { throw new Error(error); }
		console.log(body);
	});
}

function getAllModules() {
	var request = require("request");
	var options = { method: "GET", url: "http://localhost:8080/module/informatik" };

	request(options, function (error, response, body) {
		if (error) { throw new Error(error); }
		console.log(body);
	});
}
function getInfElective() {
	var request = require("request");
	var options = { method: "GET", url: "http://localhost:8080/module/informatik/wahlpflichtfach" };

	request(options, function (error, response, body) {
		if (error) { throw new Error(error); }
		console.log(body);
	});
}

function updateModule() {
	var request = require("request");
	var payload = {
		name: "updatedModule",
		ects: 5,
		fachschaft: "inf"
	};
	var options = {
		method: "PUT", url: "http://localhost:8080/module/5d244b6d1c9d440000dbfabb",
		body: JSON.stringify(payload)
	};

	request(options, function (error, response, body) {
		if (error) { throw new Error(error); }
		console.log(body);
	});
}

function createModule() {
	var request = require("request");
	let payload = {
		name: "newModule",
		ects: 10,
		fachschaft: "",
	};
	var options = {
		method: "POST",
		url: "http://localhost:8080/module",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(payload)
	};
	request(options, (err, res, body) => {
		console.log("response: ", res);
		console.log("body: ", body);
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
	let moduleColumns = (ectsPerSem / minEcts);
	//container
	let table = document.createElement("div");
	table.className = "divTable";
	//tablebody
	let tablebody = document.createElement("div");
	tablebody.className = "tableBody";
	table.appendChild(tablebody);

	let body = document.getElementById("tableId");
	for (let i = 0; i < moduleRows; i++) {
		let divRow = document.createElement("div");
		divRow.className = "divTableRow";
		tablebody.appendChild(divRow);
		for (let j = 0; j < moduleColumns; j++) {
			let widtcolumn = 100 / moduleColumns;
			let divColumn = document.createElement("div");
			divColumn.value = "column" + j;
			divColumn.addEventListener("click", getModule);
			divColumn.className = "divTableCell";
			divColumn.style.width = "50";
			divColumn.innerHTML = "Wahlpflichtfach";
			divRow.appendChild(divColumn);
		}
	}
	body.appendChild(table);
}

function getModule(event) {
	var source = event.target || event.srcElement;
	console.log(source.value);
	console.log("test");
	if (window.event) {
		// IE8 and earlier
		// doSomething
	}
}

//Property Methods
window.speichern = speichern;

//Informatik
//Get
//window.getAllInformatikSchedules = getAllInformatikSchedules;
window.getInfSummerSemester = getInfSummerSemester;
window.getInfWinterSemester = getInfWinterSemester;
window.getInfSummerSemesterModules = getInfSummerSemesterModules;
window.getInfWinterSemesterModules = getInfWinterSemesterModules;

//Get Modules
window.getAllModules = getAllModules;
window.getInfElective = getInfElective;
//Update
window.updateInfSchedule = updateInfSchedule;
//Delete
window.deleteInfSchedule = deleteInfSchedule;

window.initAndPushDataSet = initAndPushDataSet;
window.postWirtschaft = postWirtschaft;

