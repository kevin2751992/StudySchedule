let mongoose = require("mongoose");

let Module = new mongoose.Schema({

	name: String,
	ects: Number,
	fachschaft: String
});

module.exports = Module;
