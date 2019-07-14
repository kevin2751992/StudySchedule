const View = require("./View");
const $ = require("jquery");
const HTMLTEMPLATES = require("./HTMLTemplates");
const APIHANDLER = require("./APIHandler");
const Pagination = require("./Pagination");

module.exports = class MainView extends View {
	constructor() {
		super($("main"));
		super.setHTMLTemplate(HTMLTEMPLATES.SCHEDULELIST);
		this.pagination = new Pagination(this);
		this.newScheduleButton = $("#newScheduleButton");
		this.newScheduleButton.click(() => this.newSchedule());
		this.init = true;
		this.initList();
	}

	initList() {
		if (!this.init) { return; }
		APIHANDLER.getSchedules().then((schedules) => {
			this.pagination.clearSchedules();
			Object.keys(schedules).forEach(key => {
				this.pagination.addSchedule((schedules[key]));
			});
			let card = HTMLTEMPLATES.schedulecard(this.pagination.getSchedule(0));

			let renderFunc = (view) => {
				$(".pagNum").text(this.pagination.getPosition());

				$(".pagBack").click(() => {
					console.log("Trigger");
					this.pagination.prevPage();
					this.setHTMLTemplate(HTMLTEMPLATES.schedulelist(this.pagination.getCardsHTML()));
					this.render(this);
				});

				$(".pagNext").click(() => {
					this.pagination.nextPage();
					this.setHTMLTemplate(HTMLTEMPLATES.schedulelist(this.pagination.getCardsHTML()));
					this.render(this);
				});

				$("#breadcrumbs").text("Übersicht");
				if (view.init) {
					console.info(this.pagination.schedules);
					view.pagination.updateHeight($(".scheduleCard").height(), $(".scheduleList").height());
					view.setHTMLTemplate(HTMLTEMPLATES.schedulelist(view.pagination.getCardsHTML()));
					view.init = false;
					view.render(view);
				}
			};

			super.setRenderFunction(renderFunc);
			super.setHTMLTemplate(HTMLTEMPLATES.schedulelist(card));
			super.render(this);
		}).catch(err => console.error(err));
	}

	generatePagination() {
		//
	}

	newSchedule() {
		// TODO
	}
};
