const express = require("express");
const mongoose = require("mongoose");
// eslint-disable-next-line new-cap
let informaticRouter = express.Router();
//informaticRouter.use(require("body-parser").json());
let StudyScheduleSchema = require("../../client/src/model/studySchedule");
let dbUri = "mongodb+srv://userOne:open@studyscheduledb-lkqir.mongodb.net/StudyScheduleDB?retryWrites=true&w=majority";
let InformaticStudySchedule = StudyScheduleSchema.modelSchema("InformaticStudySchedule", "Informatik");

informaticRouter.get("/informatik", (req, res)=>{
	mongoose.connect(dbUri, { useNewUrlParser: true })
		.then((conn)=>{
			let scheduleQuery = InformaticStudySchedule.find({}).exec().then(schedules=>{

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
