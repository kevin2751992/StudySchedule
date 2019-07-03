let mongoose = require("mongoose");
let dbUri = "mongodb+srv://userOne:open@studyscheduledb-s6ye8.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbUri, { useNewUrlParser: true });

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

module.exports = mongoose.model("StudySchedule", StudyscheduleSchema);
