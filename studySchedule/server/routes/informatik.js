const express = require("express");
const mongoose = require("mongoose");
// eslint-disable-next-line new-cap
let informaticRouter = express.Router();
//informaticRouter.use(require("body-parser").json());
let StudyScheduleSchema = require("../../client/src/model/studySchedule");
let dbUri = "mongodb+srv://userOne:open@studyscheduledb-lkqir.mongodb.net/StudyScheduleDB?retryWrites=true&w=majority";
let InformaticStudySchedule = StudyScheduleSchema.modelSchema("InformaticStudySchedule", "Informatik");

//Get all InformatikSchedules
informaticRouter.get("/informatik", (req, res)=>{
	mongoose.connect(dbUri, { useNewUrlParser: true })
		.then((conn)=>{
			InformaticStudySchedule.find({}).exec().then(schedules=>{
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
			return res.status(500).send("Error with the ServerConnection");
		});
});
//Get Infomatik Wintersemester
informaticRouter.get("/informatik/Wintersemester", (req, res)=>{
	mongoose.connect(dbUri, { useNewUrlParser: true })
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
			return res.status(500).send("Error with the ServerConnection");
		});
});
//Get Informatik Sommersemester
informaticRouter.get("/informatik/Sommersemester", (req, res)=>{
	mongoose.connect(dbUri, { useNewUrlParser: true })
		.then((conn)=>{
			InformaticStudySchedule.findOne({ semesterTiming: "Sommersemester" }).exec().then(schedules=>{
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
			return res.status(500).send("Error with the ServerConnection");
		});
});
//Get All Modules of Sommersemester
informaticRouter.get("/informatik/Sommersemester/modules", (req, res)=>{
	mongoose.connect(dbUri, { useNewUrlParser: true })
		.then((conn)=>{
			InformaticStudySchedule.findOne({ semesterTiming: "Sommersemester" }).exec().then(schedules=>{
				console.log(schedules.semesters);
				return res.status(201).send(schedules.semesters);
			})
				.catch(err=>{
					return res.status(500).send(err);
				})
				.finally(()=>{
					mongoose.disconnect();
				});
		})
		.catch(err=>{
			return res.status(500).send("Error with the ServerConnection");
		});
});

//Get all Modules of Wintersemster
informaticRouter.get("/informatik/Wintersemester/modules", (req, res)=>{
	mongoose.connect(dbUri, { useNewUrlParser: true })
		.then((conn)=>{
			InformaticStudySchedule.findOne({ semesterTiming: "Wintersemester" }).exec().then(schedules=>{
				console.log(schedules.semesters);
				return res.status(201).send(schedules.semesters);
			})
				.catch(err=>{
					return res.status(500).send(err);
				})
				.finally(()=>{
					mongoose.disconnect();
				});
		})
		.catch(err=>{
			return res.status(500).send("Error with the ServerConnection");
		});
});

informaticRouter.put("/informatik/:id", (req, res) =>{
	console.log("PutMethod Triggered");
	if (!req.body) {
		return res.status(400).send("Body is missing");
	}
	mongoose.connect(dbUri, { useNewUrlParser: true })
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
						return res.status(500).send({ data: JSON.stringify(err) });
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

informaticRouter.delete("/informatik/:id", (req, res) =>{
	console.log("DeleteMethod was triggered");
	if (!req.body) {
		return res.status(400).send("Body is missing");
	}
	mongoose.connect(dbUri, { useNewUrlParser: true })
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

//Create new Informatik StudySchedule
informaticRouter.post("/informatik", (req, res) =>{
	if (!req.body) {
		return res.status(400).send("Body is ");
	}

	/* ----Example Schema ----
		StudySchedule={
		name: "Informatik",
		semester: 6,
		ectsPerSem: 30,
		semsters : [SemesterOne, Two ...],
		scheduleId: someID
		}
		*/

	mongoose.connect(dbUri, { useNewUrlParser: true })
		.then((conn) => {
			let studySchedule = new InformaticStudySchedule(req.body);
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
module.exports = informaticRouter;
