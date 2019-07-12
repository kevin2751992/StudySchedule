let $ = require("jquery");
let modul = {
	name: String,
	ects: Number,
	Semester: Number,
	Modul: Number
};

let semester = {
	module: [modul]
};

let currentStudySchedule = {

	name: String,
	semester: Number,
	ectsPerSem: Number,
	minEctsPerSem: Number,
	semesterTiming: String,
	semesters: [semester],
	scheduleId: ""
};

class StudySchedule {
	constructor(options) {
		this.createTable(options);
	}

	createTable(options) {
		// Current Options
		console.log("passed Options:", options);
		let minEcts = options[0].minEcts;
		let ectsPerSem = options[0].ectsPerSem;
		let numberOfSem = options[0].numberOfSem;
		console.log(minEcts, ectsPerSem, numberOfSem);
		//get TableContainer
		let scheduleTileTable = $("#tileOverview");
		let rows = numberOfSem;
		let columns = ectsPerSem / minEcts;
		//One Loop for Each Row
		for (let i = 0; i < rows; i++) {
			//Loop for each ColumnCell in Row
			for (let j = 0; j < columns; j++) {
				//Create Cell Container and Cellcontent Div
				console.log("Created Div");
				let cellContainer = document.createElement("div");
				cellContainer.id = "row" + i + "cell" + j;
				cellContainer.setAttribute("data-posx", i);
				cellContainer.setAttribute("data-posy", j);
				cellContainer.classList.add("cellContainer");
				let cellContent = document.createElement("div");
				cellContent.classList.add("cellContent");
				//Set Data Attribute to locate which row and cellNumber
				cellContent.innerHTML = "Wahlpflichtfach";
				cellContainer.appendChild(cellContent);
				scheduleTileTable.append(cellContainer);
			}
		}
	}
}
module.exports = StudySchedule;
