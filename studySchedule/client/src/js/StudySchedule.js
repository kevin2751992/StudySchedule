let jQuery = require("jquery");
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
		let scheduleTileTable = jQuery("#tileOverview");
		let rows = numberOfSem;
		let columns = ectsPerSem / minEcts;
	}
}
module.exports = StudySchedule;
