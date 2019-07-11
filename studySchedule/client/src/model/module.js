let mongoose = require("mongoose");

let Modules = new mongoose.Schema({

	name: String,
	ects: Number,

});

module.exports = Modules;
module.exports.moduleModelSchema = function (name, collection) {
	return mongoose.model(name, Modules, collection);
};
