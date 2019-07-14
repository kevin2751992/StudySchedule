const View = require("./View");
const $ = require("jquery");
const HTMLTEMPLATES = require("./HTMLTemplates");
const APIHANDLER = require("./APIHandler");

module.exports = class MainView extends View {
	constructor() {
		super($("main"));
		this.newScheduleButton = $("#newScheduleButton");
		this.newScheduleButton.click(() => this.newSchedule());
		this.modules = [];

		APIHANDLER.getModules().then((modules) => {
			Object.keys(modules).forEach(key => {
				this.modules.push((modules[key]));
			});
			console.log(this.modules);
		});
	}

	initList() {
		super.render();
	}

	newSchedule() {
		// TODO
	}
};
