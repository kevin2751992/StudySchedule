const express = require("express");
const mongoose = require("mongoose");
const CONFIG = require("../../config.json");
// eslint-disable-next-line new-cap
let statusRouter = express.Router();

statusRouter.route("/status").get(function (req, res) {
	mongoose.createConnection(CONFIG.DBURI, CONFIG.OPTIONS).then(() => {
		mongoose.connection.db.collection("Options").count(function (err, count) {
			if (count > 0) {
				console.info("The Collection holds already a Optionsfile", count);
				return res.status(201).send({ counts: count });
			}
			console.log("There are no Options saved yet");
			return res.status(201).send({ counts: 0 });
		});
	}).catch(err=> {
		return res.status(500).send("Connection Error", err);
	})
		.finally(()=>{
			mongoose.disconnect(msg=>{
				console.log("Closed Connection to DB ");
			});
		});
});
