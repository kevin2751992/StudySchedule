const express = require("express");
const mongoose = require("mongoose");
const CONFIG = require("../../config.json");
// eslint-disable-next-line new-cap
let informaticRouter = express.Router();
//informaticRouter.use(require("body-parser").json());
let StudyScheduleSchema = require("../../client/src/model/studySchedule");
let InformaticStudySchedule = StudyScheduleSchema.modelSchema("InformaticStudySchedule", "Informatik");

informaticRouter.route("/informatik/")
	//Get Winter and Summer Informatik Schedule
	.get((req, res)=>{
		mongoose.createConnection(CONFIG.DBURI, CONFIG.OPTIONS)
			.then((conn)=>{
				InformaticStudySchedule.find({}).exec().then(schedules=>{
					console.log(schedules);
					return res.status(201).send(schedules);
				})
					.catch(err=>{
						return res.status(404).send("Query with no result (unresolved Promise)", err);
					})
					.finally(()=>{
						mongoose.disconnect();
					});
			})
			.catch(err=>{
				return res.status(500).send("Error with the ServerConnection");
			});
	})

	.post((req, res)=>{
		if (!req.body) {
			return res.status(400).send("Body is missing");
		}
		/* ----Example Schema ----
			StudySchedule={
			name: "Informatik",
			semester: 6,
			ectsPerSem: 30,
			semsters : [SemesterOne, Two ...],
			}
			*/
		mongoose.createConnection(CONFIG.DBURI, CONFIG.OPTIONS)
			.then((conn) => {
				let studySchedule = new InformaticStudySchedule(req.body);
				InformaticStudySchedule.find({ name: studySchedule.name }).exec().then(result=>{
					if (result) {
						res.status(403).send("Der Schedule mit dem Namen: " + studySchedule.name + "existiert bereits");
					}
				});
				//let buffer = Buffer.from(req.body.img.data, "base64");
				//studySchedule.img.data = buffer;
				studySchedule.save()
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

//Get all InformatikSchedules
informaticRouter.put("/informatik/:id", (req, res)=>{
	console.log("PutMethod Triggered");
	if (!req.body) {
		return res.status(400).send("Body is missing");
	}
	mongoose.createConnection(CONFIG.DBURI, CONFIG.OPTIONS)
		.then((conn)=>{
			InformaticStudySchedule.findById(req.params.id).exec().then(schedule=>{
				schedule.set(req.body);
				schedule.save().then(doc=>{
					if (!doc || doc.length === 0) {
						return res.status(500).send(doc);
					}
					return res.status(201).send({ inserted: JSON.stringify(doc) });
				})
					.catch(err=>{
						res.status(500).send({ data: JSON.stringify(err) });
					})
					.finally(() => {
						mongoose.disconnect((msg) => {
							console.log("All connections closed. ", msg);
						});
					});
			});
		});
	return null;
});

informaticRouter.delete("/informatik/:id", (req, res)=>{
	console.log("DeleteMethod was triggered");
	if (!req.body) {
		return res.status(400).send("Body is missing");
	}
	mongoose.createConnection(CONFIG.DBURI, CONFIG.OPTIONS)
		.then((conn)=>{
			InformaticStudySchedule.findByIdAndRemove(req.params.id).exec().then(result=> {
				return res.status(201).send(result);
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
//Get Infomatik Wintersemester
informaticRouter.get("/informatik/Wintersemester", (req, res)=>{
	mongoose.createConnection(CONFIG.DBURI, CONFIG.OPTIONS)
		.then((conn)=>{
			InformaticStudySchedule.findOne({ semesterTiming: "Wintersemester" }).exec().then(schedules=>{
				console.log(schedules);
				return res.status(201).send(schedules);
			})
				.catch(err=>{
					return res.status(500).send(err);
				})
				.finally(()=>{
					mongoose.disconnect();
				});
		})
		.catch(err=>{
			return res.status(500).send("Error with the ServerConnection", err);
		});
});

module.exports = informaticRouter;
