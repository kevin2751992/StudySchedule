let mongoose = require("mongoose");

let Options = new mongoose.Schema({

	minEcts: Number,
	ectsPerSem: Number,
	numberOfSem: Number

});

module.exports = Options;
module.exports.optionModelSchema = function (name, collection) {
	return mongoose.model(name, Options, collection);
};
