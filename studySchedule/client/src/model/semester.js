let mongoose = require("mongoose");
let moduleModel = require("./module");

let Semester = new mongoose.Schema({
	module: [moduleModel]

});

module.exports = Semester;
