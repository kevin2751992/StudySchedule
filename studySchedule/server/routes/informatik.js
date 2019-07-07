const express = require("express");
// eslint-disable-next-line new-cap
let informaticRouter = express.Router();
//informaticRouter.use(require("body-parser").json());
let InformaticStudySchedule = require("../../client/src/model/studySchedule");
informaticRouter.get("/informatik", (req, res)=>{
	res.send("You requested Informatik");
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
	// let studySchedule = new InformaticStudySchedule(req.body);
	// studySchedule.save()
	// 	.then(doc=>{
	// 		if (!doc || doc.length === 0) {
	// 			return res.status(500).send(doc);
	// 		}
	// 		return res.status(201);
	// 	})
	// 	.catch(err=>{
	// 		return res.status(500).json(err);
	// 	});

	return res.status(201).send({data: "alles jut"});
});
module.exports = informaticRouter;
