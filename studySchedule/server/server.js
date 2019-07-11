const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const dbUri = "mongodb+srv://userOne:open@studyscheduledb-s6ye8.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(dbUri, { useNewUrlParser: true });
const port = 8080;
const parser = require("body-parser");

//Routes for Handling Http Req
const informatikRoutes = require("./routes/informatik");
const wirtschaftRoutes = require("./routes/wirtschaft");
const moduleRoutes = require("./routes/module");
const optionRoutes = require("./routes/optionRoute");

// create server
let server = express();

let database;

//Connect to Database
client.connect((error, db) =>{
	if (error) { console.error(error); process.exit(-1); }

	console.log("Connected to MongoDB.");

	database = db;
	server.use(parser.urlencoded({ extended: true }));
	server.use(parser.json());
	server.use(express.static("./studySchedule/client/prod/"));
	server.listen(port, ()=>console.log("Server started on Port", port));
	server.use(informatikRoutes);
	server.use(wirtschaftRoutes);
	server.use(moduleRoutes);
	server.use(optionRoutes);
});
