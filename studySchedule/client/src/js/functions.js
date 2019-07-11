let View = require("./View");
let Modal = require("./Modal");
let ScheduleOverview = require("./ScheduleOverview");
let $ = require("jquery");

let view = new View();
let modal = new Modal();
var scheduleOverview = new ScheduleOverview();

function newSchedule() {
	scheduleOverview.render();
}

function openOptions() {
	modal.showModal();
}

window.openOptions = openOptions;
window.newSchedule = newSchedule;
