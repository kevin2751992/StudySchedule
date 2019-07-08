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

var newModulvalue;

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
	minEcts = document.getElementById("minEcts").value;
	ectsPerSem = document.getElementById("ectsPerSem").value;
	numberOfSem = document.getElementById("numberOfSem").value;
	console.log("ECTS:", minEcts);
	console.log("ectsPerSem:", ectsPerSem);
	console.log("numberOfSem:", numberOfSem);
	checkInput();
	tabelproduce();
	if (minEcts === "") {
		alert("Sie müssen alle Felder ausfuellen!");
	}
	else {
		tabelproduce();
	}
}
function checkInput() {
	var regEx = /^[0-9]+$/;
	if (minEcts.match(regEx) && ectsPerSem.match(regEx) && numberOfSem.match(regEx)) {
		console.log("es sind alles zahlen");
		if (ectsPerSem % minEcts === 0) {
			console.log("ectspersem ist vielfaches von minects");
			return;
		}
		else {
			alert("Die zu erreichenden ECTS pro Semester sind nicht modular zu der minimales ECTS für ein Modul.");
		}
	}
	else {
		alert("Must input numbers");
	}
	return;
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

function modulGetsNemValue(value) {
	newModulvalue = value;
	console.log("ruft modulgetnewvalue auf");
}

var tmp;

function getModule(event) {
	var source = event.target || event.srcElement;
	tmp = source;
	console.log(source.value);
	let newline = document.createElement("br");
	source.appendChild(newline);
	//loeschen
	var buttonDelete = document.createElement("button");
	buttonDelete.value = "loeschen";
	buttonDelete.style.height = "50";
	buttonDelete.style.width = "50";
	source.appendChild(buttonDelete);
	buttonDelete.addEventListener("click", deleteModul);
	//neu erstellen
	var buttonNewModul = document.createElement("button");
	buttonNewModul.value = "Neues Modul erstellen";
	buttonNewModul.style.height = "50";
	buttonNewModul.style.width = "50";
	source.appendChild(buttonNewModul);
	buttonNewModul.addEventListener("click", createNewModul);
	// ändern
	var buttonchange = document.createElement("button");
	buttonchange.value = "Modul aendern";
	buttonchange.style.height = "50";
	buttonchange.style.width = "50";
	source.appendChild(buttonchange);
	buttonchange.addEventListener("click", changeModul);
	console.log("sollte button erstellt haben");
	if (window.event) {
		// IE8 and earlier
		// doSomething
	}
}

function deleteModul() {
	tmp.value = "Wahlpflichtfach (leer)";
}

function createNewModul() {
	tmp.value = "Wahlpflichtfach (leer)";
}

function changeModul() {
	tmp.value = "Wahlpflichtfach (leer)";
}

window.speichern = speichern;
window.getInformatik = getInformatik;
window.initAndPushDataSet = initAndPushDataSet;
window.postWirtschaft = postWirtschaft;
