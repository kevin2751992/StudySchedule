const $ = require("jquery");
const request = require("request-promise");
const baseUri = "http://localhost:8080";
const functions = require("./functions");

let StudySchedule = require("./StudySchedule");

class ScheduleOverview {
	constructor(view, modal, changeModuleView) {
		this.changeModuleView = changeModuleView;
		this.modal = modal;
		this.view = view;
		this.fetchOptions().then(options=>{
			this.StudySchedule = new StudySchedule(options);
		}).catch(err=>{
			console.error(err);
		});
	}
	render() {
		this.fetchModules();

		$("#newScheduleView").css("display", "grid");
	}
	fetchModules() {
		return new Promise((resolve, rej)=> {
			var options = { method: "GET", url: `${baseUri}/module` };

			request(options).then(function (body) {
				resolve(JSON.parse(body).forEach((module) => {
					let moduleContainer
					= `<div> 
					<p> ${ module.name } </p> 
					<p> ${ module.ects } </p> 
					<div class="moduletasks"> 
					<button data-moduleid=${module._id} class="editModule-${module._id}" value="Edit Module" name="Edit Module"> Edit Module </button>
					<button data-moduleid=${module._id} class="deleteModule-${module._id}" value="Delete Module" name="Delete Module"> Delete Module </button> 
					</div>
					</div>`;
					$("#moduleInnerScroll").append(moduleContainer);
					$(".editModule-" + module._id).click(() => {
						console.log(event.target.dataset.moduleid);
						window.openChangeModuleView(event.target.dataset.moduleid);
					});
				}));
			}).catch(function (err) {
				rej(err);
			});
		});
	}
	fetchOptions() {
		return new Promise((res, rej)=> {
			var options = { method: "GET", url: `${baseUri}/option` };

			request(options).then(function (body) {
				console.log(body);
				res(JSON.parse(body));
			}).catch(function (err) {
				rej(err);
			});
		});
	}
}
module.exports = ScheduleOverview;
window.renderEdit = this.renderEdit;

