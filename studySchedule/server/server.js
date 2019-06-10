const express = require( "express");
const http= require("http");
const path= require("path");
const mongoClient= require("mongodb").MongoClient;
const dbUri= "mongodb+srv://userOne:open@studyscheduledb-s6ye8.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongoClient(dbUri, { useNewUrlParser: true });

// create server
let server = express();

server.use(express.static("./studySchedule/client/prod/"));


let port = 8080;
if (process.argv[2] && process.argv[2] > 0) 
{
	port = process.argv[2];
};

// create Http Server on Port 8080*
http.createServer(server).listen(port, function () {
	console.log("Server listening on port " + port);
});


client.connect( (error, db) => { 

	if (error) {
		 console.error(error); process.exit(-1); 
	}
	console.log("Connected to MongoDB."); 
	
	try { 
		console.log("do stuff here");
	 }
	
	finally { client.close(); }
 });



