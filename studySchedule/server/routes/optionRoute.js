const express = require("express");
const mongoose = require("mongoose");
// eslint-disable-next-line new-cap
let optionRouter = express.Router();
let OptionModelSchema = require("../../client/src/model/optionModel");
let dbUri = "mongodb+srv://userOne:open@studyscheduledb-lkqir.mongodb.net/StudyScheduleDB?retryWrites=true&w=majority";
let Options = OptionModelSchema.modelSchema("Options", "Options");

optionRouter.route("/option/")
	//Get Winter and Summer Informatik Schedule
	.get((req, res)=>{
		mongoose.connect(dbUri, { useNewUrlParser: true })
			.then((conn)=>{
				Options.findOne({}).exec().then(resultOptions=>{
					console.log(resultOptions);
					return res.status(201).send(resultOptions);
				})
					.catch(err=>{
						return res.status(404).send("Query with no result (unresolved Promise). No Options found!", err);
					})
					.finally(()=>{
						mongoose.disconnect();
					});
			})
			.catch(err=>{
				return res.status(500).send("Error with the ServerConnection");
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

