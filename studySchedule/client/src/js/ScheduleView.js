const View = require("./View");
const $ = require("jquery");
const HTMLTEMPLATES = require("./HTMLTemplates");
const APIHANDLER = require("./APIHandler");

module.exports = class ScheduleView extends View {
	constructor() {
		super($("main"));
		this.modules = [];
		this.modulesHTML = [];
		this.modulesHTMLString = "";
		this.schedule = null;

		this.isReady = new Promise((res, rej) => {
			APIHANDLER.getModules()
				.then((modules) => {
					modules.forEach(element => {
						this.modules.push(element);
					});

					this.modules.forEach((module) => {
						this.modulesHTML.push(HTMLTEMPLATES.module(module));
					});
					res();
				})
				.catch((error) => {
					console.log(error);
					rej(error);
				});
		});
	}

	init(ects, ectsSem, sem) {
		this.isReady.then(() => {
			let renderFunc = (view) => {
				console.log("CALL");

				let grows = "";
				let gcol = "";
				let htmlString = "";

				for (let i = 0; i < sem; i++) {
					grows += "1fr ";
				}

				for (let i = 0; i < (ectsSem / ects); i++) {
					gcol += "1fr ";
				}

				$("#breadcrumbs").text("Neuer Ablaufplan");
				view.schedule = $("#singleSchedule");
				view.schedule.css({ "grid-template-rows": grows });
				view.schedule.css({ "grid-template-columns": gcol });

				for (let i = 0; i < ectsSem; i++) {
					for (let j = 0; j < (ectsSem / ects); j++) {
						htmlString += HTMLTEMPLATES.scheduleCell(i, j);
					}
				}

				view.schedule.append(htmlString);
			};

			super.setRenderFunction(renderFunc);
			super.setHTMLTemplate(HTMLTEMPLATES.scheduleView(this.modulesHTML.join(" ")));
			super.render(this);
		}).catch(err => console.error(err));
	}

	newSchedule() {
		let ects = 5;
		let ectsSem = 30;
		let semester = 7;
		this.init(ects, ectsSem, semester);
	}
};
