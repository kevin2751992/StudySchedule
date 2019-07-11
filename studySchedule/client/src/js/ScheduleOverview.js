const jQuery = require("jquery");
const request = require("request");
const baseUri = "http://localhost:8080";
class ScheduleOverview {
	render() {
		//this.fetchOptions();
		this.fetchModules();
		jQuery("#newScheduleView").css("display", "flex");
	}
	fetchModules() {
		var options = { method: "GET", url: `${baseUri}/module` };

		request(options, function (error, response, body) {
			if (error) { throw new Error(error); }
			JSON.parse(body).forEach((module) => {
				// outer div
				let moduleContainer = document.createElement("div");
				// module name
				let moduleNameDiv = document.createElement("div");
				moduleNameDiv.append(module.name);
				// ects for module
				let ectsForModuleDiv = document.createElement("div");
				ectsForModuleDiv.append(module.ects);
				// buttons to delete/edit module
				let buttonsDiv = document.createElement("div");
				let deleteBtn = document.createElement("button");
				deleteBtn.append("Delete Module");
				let editBtn = document.createElement("button");
				editBtn.append("Edit Module");
				let addBtn = document.createElement("button");
				addBtn.append("Add Module");
				// append to containers
				buttonsDiv.append(editBtn);
				buttonsDiv.append(deleteBtn);
				buttonsDiv.append(addBtn);
				moduleContainer.append(moduleNameDiv);
				moduleContainer.append(ectsForModuleDiv);
				moduleContainer.append(buttonsDiv);
				// save module id in data attribute for later access
				moduleContainer.setAttribute("data-moduleId", module._id);
				// append to overview container
				jQuery("#moduleOverview").append(moduleContainer);
			});
		});
	}
	fetchOptions() {
		var options = { method: "GET", url: `${baseUri}/option` };

		request(options, function (error, response, body) {
			if (error) { throw new Error(error); }
			console.log(body);
		});
	}
}
module.exports = ScheduleOverview;
