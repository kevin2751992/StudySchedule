const express = require("express");
const mongoose = require("mongoose");
const CONFIG = require("../../config.json");
// eslint-disable-next-line new-cap
let optionRouter = express.Router();
let OptionModelSchema = require("../../client/src/model/optionModel");
let dbUri = "mongodb+srv://userOne:open@studyscheduledb-lkqir.mongodb.net/StudyScheduleDB?retryWrites=true&w=majority";
let Options = OptionModelSchema.optionModelSchema("Options", "Options");

optionRouter.route("/option")
	//Get Winter and Summer Informatik Schedule
	.get((req, res)=>{
		/*let state = mongoose.connection.readyState;
		let actualConnection;
		if (state === 2) {
			actualConnection = mongoose.connection;
		}*/
		mongoose.createConnection(dbUri, CONFIG.OPTIONS)
			.then(()=>{
				Options.find({}).exec().then(resultOptions=>{
					console.log(resultOptions);
					return res.status(201).send(resultOptions);
				})
					.catch(err=>{
						return res.status(500).send(err);
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
		mongoose.connect(dbUri, { useNewUrlParser: true })
			.then((conn) => {
				mongoose.connection.db.collection("Options").count(function (err, count) {
					if (err) {
						status(500).send("Error while Collection Count", err);
					}
					console.log("Current Entry Count for Options:", count);
					if (count === 0) {
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
					}
					else {
						console.log("Found Records : " + count);
						mongoose.disconnect((msg) => {
							console.log("All connections closed. ", msg);
						});
					}
				});
			});
		return null;
	});
module.exports = optionRouter;
