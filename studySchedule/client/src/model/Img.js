let mongoose = require("mongoose");

let Img = new mongoose.Schema({

	img: { data: Buffer, contentType: String }
});

module.exports = Img;
module.exports.imgModelSchema = function (name, collection) {
	return mongoose.model(name, Img, collection);
};
