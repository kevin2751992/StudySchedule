let mongoose = require("mongoose");

let Module = new mongoose.Schema({

	name: String,
	ects: Number,
	id: mongoose.SchemaTypes.ObjectId,
});

let Semester = new mongoose.Schema({

	module: [Module]

});

let StudyscheduleSchema = new mongoose.Schema({

	name: String,
	semester: Number,
	ectsPerSem: Number,
	minEctsPerSem: Number,
	semesters: [Semester],
	scheduleId: mongoose.SchemaTypes.ObjectId

});

//module.exports = mongoose.model("StudySchedule", StudyscheduleSchema);
module.exports = StudyscheduleSchema;
module.exports.modelSchema = function (name, collection) {
	return mongoose.model(name, StudyscheduleSchema, collection);
};
