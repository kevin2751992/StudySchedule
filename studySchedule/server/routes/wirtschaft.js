let express = require("express");
// eslint-disable-next-line new-cap
let wirtschaftsRouter = express.Router();
let MongoClient = require("mongodb").MongoClient;
let dbUri = "mongodb+srv://userOne:open@studyscheduledb-s6ye8.mongodb.net/test?retryWrites=true&w=majority";
const dbClient = new MongoClient(dbUri, { useNewUrlParser: true });

wirtschaftsRouter.get("/wirtschaft", (req, res)=>{
	res.send("You requested Wirtschaft");
});

wirtschaftsRouter.post("/wirtschaft", (req, res) => {
	if (req.body === null) {
		return res.status(400).send("Body is missing");
	}
	else {
		dbClient.connect((error, client) => {
			if (error) { console.error(error); process.exit(-1); }
			console.log("Connected to MongoDB.");
			try {
				let db = client.db("StudyScheduleDB");
				console.log("DB => ", db);
				let dbCollection = db.collection("Informatik");
				console.log("Collection => ", dbCollection);
				dbCollection.insertOne(req.body, (err, result)=>{
					if (err) {
						console.log(err);
						process.exit(0);
					}
					console.log(result);
				});
			}
			finally { client.close(); }
		});
	}
	return null;
});
module.exports = wirtschaftsRouter;
