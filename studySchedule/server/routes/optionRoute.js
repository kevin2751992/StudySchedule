const express = require("express");
const mongoose = require("mongoose");
const CONFIG = require("../../config.json");
// eslint-disable-next-line new-cap
let optionRouter = express.Router();
let OptionModelSchema = require("../../client/src/model/optionModel");
let Options = OptionModelSchema.optionModelSchema("Options", "Options");

optionRouter.route("/option/")
	//Get Winter and Summer Informatik Schedule
	.get((req, res)=> {
		mongoose.createConnection(CONFIG.DBURI, CONFIG.OPTIONS)
			.then(()=>{
				Options.find().exec().then(resultOptions=> {
					console.log(resultOptions);
					return res.status(200).send(resultOptions);
				})
					.catch(err=>{
						return res.status(500).send("Option.find() failed", err);
					})
					.finally(()=> {
						mongoose.disconnect(msg=>{
							console.log("Closed Connection to DB ");
						});
					});
			})
			.catch(err=>{
				return res.status(500).send("Error with the ServerConnection", err);
			});
	})

	.post((req, res) => {
		if (!req.body) {
			return res.status(400).send("Body is missing");
		}
		/* ----Example Schema ----
			Option={
			minects:5 ,
			ectsPerSem: 30,
			numberOfSem: 6,
			}
			*/
		mongoose.createConnection(CONFIG.DBURI, CONFIG.OPTIONS)
			.then((conn) => {
				let newOptions = new Options(req.body);
				console.log(req);
				console.log("reqBody", req.body);
				newOptions.save()
					.then(doc=>{
						if (!doc || doc.length === 0) {
							return res.status(500).send(doc);
						}
						return res.status(201).send({ inserted: JSON.stringify(doc) });
					})
					.catch(err=>{
						return res.status(500).send({ data: JSON.stringify(err) });
					})
					.finally(() => {
						mongoose.disconnect((msg) => {
							console.log("All connections closed. ", msg);
						});
					});
			});
		return null;
	});

module.exports = optionRouter;
