var $ = require("jquery");

class ChangeModuleView {
	constructor() {
		// Option Properties
		this.changedName = "";
		this.moduleId = "";

		$(document).ready(() => {
			this.editView = $("#editView");
			this.closeButton = $("#changeModulClose");
			this.closeButton.click(()=>{ this.closeView(); });
			this.saveButton = $("#saveModuleButton");
			this.saveButton.click(()=> {
				this.save();
			});
			this.changedName = $("#changedNameInput").value;
		});
	}

	closeView() {
		console.log("closet");
		this.editView.hide();
	}

	render() {
		this.editView.show();
	}
	setSourceId(id) {
		this.moduleId = id;
	}

	save() {
		console.log("save triggered", this.moduleId, "name");
		this.changedName = $("#changedNameInput").val();
		console.log(this.changedName);
		this.updateModule(this.changedName, this.moduleId);
	}

	updateModule(changedName, id) {
		console.log(changedName);
		var request = require("request");
		var payload = {
			name: changedName,
			ects: 6,
			fachschaft: "inf"
		};
		var options = {
			method: "PUT", url: "http://localhost:8080/module/" + id,
			body: JSON.stringify(payload)
		};
		request(options, function (error, response, body) {
			if (error) { throw new Error(error); }
			console.log(body);
		});
	}
}
module.exports = ChangeModuleView;
window.render = this.render;

