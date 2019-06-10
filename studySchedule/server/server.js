const express = require( "express");
const http= require("http");
const path= require("path");
//const dbClient= require("mongodb").MongoClient;

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


/*dbClient.connect("mongodb://localhost:27017/Library", (error, db) => { 

	if (error) {
		 console.error(error); process.exit(-1); 
	}
	console.log("Connected to MongoDB."); 
	
	try { 
		console.log("do stuff here");
	 }
	
	finally { db.close(); }
 });*/



