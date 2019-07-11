let mongoose = require("mongoose");

let OptionModel = new mongoose.Schema({

	minEcts: Number,
	ectsPerSem: Number,
	numberOfSem: Number

});

module.exports = OptionModel;
module.exports.optionModelSchema = function (name, collection) {
	return mongoose.model(name, OptionModel, collection);
};
