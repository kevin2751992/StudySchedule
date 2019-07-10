const express = require("express");
const mongoose = require("mongoose");
// eslint-disable-next-line new-cap
let moduleRouter = express.Router();
//informaticRouter.use(require("body-parser").json());
let moduleModel = require("../../client/src/model/module");
let dbUri = "mongodb+srv://userOne:open@studyscheduledb-lkqir.mongodb.net/StudyScheduleDB?retryWrites=true&w=majority";
let modules = moduleModel.moduleModelSchema("Module", "Module");

//Get all InformatikSchedules
moduleRouter.get("/module", (req, res)=>{
	mongoose.connect(dbUri, { useNewUrlParser: true })
		.then((conn)=>{
			modules.find({}).exec().then(allModules=>{
				console.log(allModules);
				return res.status(201).send(allModules);
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
moduleRouter.get("/module/informatik", (req, res)=>{
	mongoose.connect(dbUri, { useNewUrlParser: true })
		.then((conn)=>{
			modules.find({ fachschaft: "Inf" }).exec().then(infModules=>{
				console.log(infModules);
				return res.status(201).send(infModules);
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

moduleRouter.get("/module/informatik/wahlpflichtfach", (req, res)=>{
	mongoose.connect(dbUri, { useNewUrlParser: true })
		.then((conn)=>{
			modules.find({ fachschaft: "Inf" }, { wahlpflicht: "true" }).exec().then(infElective=>{
				console.log(infElective);
				return res.status(201).send(infElective);
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
moduleRouter.get("/module/wirtschaft", (req, res)=>{
	mongoose.connect(dbUri, { useNewUrlParser: true })
		.then((conn)=>{
			modules.find({ fachschaft: "Wirtschaft" }).exec().then(bwlModules=>{
				console.log(bwlModules);
				return res.status(201).send(bwlModules);
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

moduleRouter.get("/module/wirtschaft/wahlpflicht", (req, res)=>{
	mongoose.connect(dbUri, { useNewUrlParser: true })
		.then((conn)=>{
			modules.find({ fachschaft: "Wirtschaft" }, { wahlpflicht: "true" }).exec().then(bwlElective=>{
				console.log(bwlElective);
				return res.status(201).send(bwlElective);
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

moduleRouter.put("/module/:id", (req, res) =>{
	console.log("update Module trigered");
	if (!req.body) {
		return res.status(400).send("Body is missing");
	}
	mongoose.connect(dbUri, { useNewUrlParser: true })
		.then((conn)=>{
			modules.findById(req.params.id).exec().then(toUpdateModule=>{
				toUpdateModule.set(req.body);
				toUpdateModule.save().then(doc=>{
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

moduleRouter.delete("/module/:id", (req, res) =>{
	console.log("DeleteMethod was triggered");
	if (!req.body) {
		return res.status(400).send("Body is missing");
	}
	mongoose.connect(dbUri, { useNewUrlParser: true })
		.then((conn)=>{
			modules.findByIdAndRemove(req.params.id).exec().then(result=> {
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
moduleRouter.post("/module", (req, res) =>{
	if (!req.body) {
		return res.status(400).send("Body is missing ");
	}

	/* ----Example Schema ----
		Module={
		name: "Theoretische Informatik",
		ects: 30,
		fachschaft : "Inf"
		}
		*/

	mongoose.connect(dbUri, { useNewUrlParser: true })
		.then((conn) => {
			// eslint-disable-next-line new-cap
			let newModule = new modules(req.body);
			newModule.save()
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
module.exports = moduleRouter;
