let mongoose = require("mongoose");
let moduleModel = require("./module");

let ModuleWrapper = new mongoose.Schema({

	modul: moduleModel,
	posx: Number,
	posy: Number,
});

module.exports = ModuleWrapper;
module.exports.moduleWrapperSchema = function (name, collection) {
	return mongoose.model(name, Modules, collection);
};
