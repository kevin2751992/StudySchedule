const express = require("express");
const mongoose = require("mongoose");
// eslint-disable-next-line new-cap
let informaticRouter = express.Router();
//informaticRouter.use(require("body-parser").json());
let StudyScheduleSchema = require("../../client/src/model/studySchedule");

informaticRouter.get("/informatik", (req, res)=>{
	res.send("You requested Informatik");
});
let dbUri = "mongodb+srv://userOne:open@studyscheduledb-lkqir.mongodb.net/StudyScheduleDB?retryWrites=true&w=majority";
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

	let InformaticStudySchedule = StudyScheduleSchema.modelSchema("InformaticStudySchedule", "Informatik");
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
});
module.exports = informaticRouter;