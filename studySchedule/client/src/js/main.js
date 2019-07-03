function hello() {
	console.log("hello du spast");
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

function tabelproduce() {
	// semesteranzahl angegeben= Zeilen
	// wieviele ECTS pro semester = Spalten
}

window.hello = hello;
window.speichern = speichern;
