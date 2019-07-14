let mongoose = require("mongoose");

let Img = new mongoose.Schema({

	filename: {
		type: String,
		required: true
	},
	originalname: {
		type: String,
		required: true
	}

});

module.exports = Img;
module.exports.imgModelSchema = function (name, collection) {
	return mongoose.model(name, Img, collection);
};
