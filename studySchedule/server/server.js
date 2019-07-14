const CONFIG = require("../config.json");
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(CONFIG.DBURI, CONFIG.OPTIONS);
const mongoose = require("mongoose");
const parser = require("body-parser");

//Routes for Handling Http Req
const informatikRoutes = require("./routes/informatik");
const wirtschaftRoutes = require("./routes/wirtschaft");
const moduleRoutes = require("./routes/module");
const optionRoutes = require("./routes/optionRoute");
const statusRoutes = require("./routes/status");

// create server
let server = express();

//Connect to Database
client.connect((error, db) =>{
	if (error) { console.error(error); process.exit(-1); }
	console.info("test");
	console.info("Connected to MongoDB.");

	server.listen(CONFIG.PORT, ()=>console.info("Server started on Port", CONFIG.PORT));
	server.use(parser.urlencoded({ extended: true }));
	server.use(parser.json());
	server.use(express.static("./studySchedule/dist/"));
	server.use(informatikRoutes);
	server.use(wirtschaftRoutes);
	server.use(moduleRoutes);
	server.use(optionRoutes);
	server.use(statusRoutes);
});
