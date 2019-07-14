// Main.js
// Only Requires Main modules and init HTML with functionality

const $ = require("jQuery");
const Modal = require("./Modal");
const MainView = require("./MainView");
const ScheduleView = require("./ScheduleView");
const APIHANDLER = require("./APIHandler");

//Inital Document Ready (Um sicherzugehen, dass alle Elemnte des DOM vorhanden sind)
$(document).ready(() => {
	//let mainView = new MainView();
	let modal = new Modal();
	$("#optionsButton").click(() => modal.renderOptions());
	modal.renderOptions();
	//$("#home").click(() => {
	//	mainView.initList();
	//});
	//let scheduleView = new ScheduleView();
	//scheduleView.newSchedule();
	//let optionsStatus = APIHANDLER.checkOptionsStatus().then(() => {
	//	modal.renderOptions();
	//}).catch(err => console.error(err));
});
