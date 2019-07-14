// Main.js
// Only Requires Main modules and init HTML with functionality

const $ = require("jQuery");
const Modal = require("./Modal");
const MainView = require("./MainView");

//Inital Document Ready (Um sicherzugehen, dass alle Elemnte des DOM vorhanden sind)
$(document).ready(() => {
	let mainView = new MainView();
	let modal = new Modal();
	$("#optionsButton").click(() => modal.renderOptions());
	$("#home").click(() => {
		mainView.initList();
	});

	//TODO Check if Options already set and only call modal.renderOptions if unset instead of every reload
	//modal.renderOptions();
});
