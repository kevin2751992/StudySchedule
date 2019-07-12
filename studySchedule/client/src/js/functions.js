let View = require("./View");
let Modal = require("./Modal");
let ChangeModuleView = require("./ChangeModuleView");
let ScheduleOverview = require("./ScheduleOverview");
let $ = require("jquery");

let view = new View();
let modal = new Modal();
let changeModuleView = new ChangeModuleView();
var scheduleOverview = new ScheduleOverview(view, modal, changeModuleView);

function newSchedule() {
	scheduleOverview.render();
}

function openOptions() {
	modal.showModal();
}

function openChangeModuleView() {
	changeModuleView.render();
}

window.openChangeModuleView = openChangeModuleView;
window.openOptions = openOptions;
window.newSchedule = newSchedule;
