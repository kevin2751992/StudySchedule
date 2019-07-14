const express = require("express");
const mongoose = require("mongoose");
const CONFIG = require("../../config.json");
// eslint-disable-next-line new-cap
let statusRouter = express.Router();

statusRouter.route("/status").get(function (req, res) {
	console.log(CONFIG);
	mongoose.connect(CONFIG.DBURI, CONFIG.OPTIONS).then(() => {
		mongoose.connection.db.collection("Options").count().then((count)=> {
			if (count > 0) {
				console.info("The Collection holds already a Optionsfile", count);
				return res.send({ counts: count });
			}
			else {
				console.log("There are no Options saved yet");
				return res.send({ counts: 0 });
			}
		}).catch(err=>{
			return res.send(err);
		});
	}).catch(err=> {
		return res.send("Connection Error in statusRoute", err);
	})
		.finally(()=>{
			mongoose.disconnect(msg=>{
				console.log("Closed Connection to DB ");
			});
		});
	return null;
});
module.exports = statusRouter;
