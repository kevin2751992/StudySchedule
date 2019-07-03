function getInformatik() {
	var request = require("request");
	var options = { method: "GET", url: "http://localhost:8080/informatik" };

	request(options, function (error, response, body) {
		if (error) { throw new Error(error); }
		console.log(body);
	});
}

window.getInformatik = getInformatik;
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

function tabelproduce() {
	// semesteranzahl angegeben= Zeilen
	// wieviele ECTS pro semester = Spalten
}
window.speichern = speichern;
