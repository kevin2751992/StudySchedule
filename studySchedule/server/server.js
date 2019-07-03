const express = require("express");

const mongoClient = require("mongodb").MongoClient;
const dbUri = "mongodb+srv://userOne:open@studyscheduledb-s6ye8.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongoClient(dbUri, { useNewUrlParser: true });
const port= process.env.Port || 8080

//Routes for Handling Http Req
const informatikRoutes= require("./routes/informatik")

// create server
let server = express();

let database;

//Connect to Database
client.connect((error, db) => {

	if (error) { console.error(error); process.exit(-1); }

	console.log("Connected to MongoDB.");

	database = db;
	server.use(express.static("./studySchedule/client/prod/"));
	server.listen(port, ()=>console.log('Server started on Port', port));
	server.use(informatikRoutes);


});

