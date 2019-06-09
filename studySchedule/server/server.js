const express = require( "express");
const http= require("http");
const path= require("path");
const dbClient= require("mongodb").MongoClient;

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



