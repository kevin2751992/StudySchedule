let View = require("./View");
let Modal = require("./Modal");
let $ = require("jquery");

let view = new View();
let modal = new Modal();

function newSchedule() {
	return null;
}

function openOptions() {
	modal.showModal();
}

window.openOptions = openOptions;
