var $ = require("jquery");

class ChangeModuleView {
	constructor() {
		// Option Properties
		this.changedName = "";

		$(document).ready(() => {
			this.editView = $("#editView");
			this.closeButton = $("#changeModulClose");
			this.closeButton.click(()=>{ this.closeView(); });
			this.saveButton = $("#saveButton");
			this.saveButton.click(()=>{ this.save(); });
			this.modalContent = $("#modalContent");
		});
	}

	closeView() {
		this.editView.hide();
	}

	render() {
		this.editView.show();
	}

	save() {
		if (this.checkOptions()) {
			this.changedName = $("#changedNameInput").val();
			var request = require("request");
			var payload = {
				name: this.changedName,
			};
			var options = {
				method: "PUT",
				url: "http://localhost:8080/module/",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(payload)
			};
			request(options, function (error, response, body) {
				console.log(error);
				console.log(response);
				console.log(body);
			});
		}
	}
}
module.exports = ChangeModuleView;
window.render = this.render;
