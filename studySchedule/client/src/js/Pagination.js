const $ = require("jquery");
const HTMLTEMPLATES = require("./HTMLTemplates");

module.exports = class {
	constructor(view) {
		this.ParentView = view;
		this.schedules = [];
		this.current = 0;
		this.elementHeight = 0;
		this.containerHeight = 0;
		this.numberOfCards = 1;
	}

	getCardsHTML() {
		let cards = [];
		let schedules = this.schedules.slice(this.current, this.current + this.numberOfCards);
		schedules.forEach(schedule => {
			cards.push(HTMLTEMPLATES.schedulecard(schedule));
		});

		return cards.join(" ");
	}

	updateHeight(elementHeight, containerHeight) {
		this.elementHeight = elementHeight;
		this.containerHeight = containerHeight;
		this.calcRange();
	}

	getPosition() {
		return (Math.floor(this.current / this.numberOfCards) + 1) + " / " + Math.ceil(this.schedules.length / this.numberOfCards);
	}

	getSchedule(pos) {
		return this.schedules[pos];
	}

	updateParentView() {
		this.view.super.render(this.view);
	}

	addSchedule(schedule) {
		this.schedules.push(schedule);
	}

	clearSchedules() {
		this.schedules = [];
	}

	calcRange() {
		this.numberOfCards = (Math.floor(this.containerHeight / this.elementHeight) - 1) === 0 ? 1 : (Math.floor(this.containerHeight / this.elementHeight) - 1);
		console.log(this.numberOfCards);
	}
	prevPage() {
		console.log(this.numberOfCards);
		console.log(this.schedules.length);
		console.log(this.current);
		if (this.current - this.numberOfCards >= 0) { this.current -= this.numberOfCards; }
		console.log(this.current);
	}

	nextPage() {
		console.log(this.current);
		console.log(this.numberOfCards);
		console.log(this.schedules.length);
		if (this.current + this.numberOfCards <= this.schedules.length) { this.current += this.numberOfCards; }
		console.log(this.current);
	}
}
;
