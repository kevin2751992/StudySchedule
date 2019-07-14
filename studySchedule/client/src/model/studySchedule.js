let mongoose = require("mongoose");
let semesterModel = require("./semester");
let optionsModel = require("./optionModel");

let StudyscheduleSchema = new mongoose.Schema({

	name: String,
	semester: Number,
	ectsPerSem: Number,
	minEctsPerSem: Number,
	semesterTiming: String,
	options: optionsModel,
	semesters: [semesterModel],
	scheduleId: mongoose.SchemaTypes.ObjectId

});

//module.exports = mongoose.model("StudySchedule", StudyscheduleSchema);
module.exports = StudyscheduleSchema;
module.exports.modelSchema = function (name, collection) {
	return mongoose.model(name, StudyscheduleSchema, collection);
};
