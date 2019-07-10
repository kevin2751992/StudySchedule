var $ = require("jquery");
class View {
	constructor() {
		$(document).ready(() => {
			this.breadcrumbs = $("#breadcrumbs");
		});
	}

	initView() {
		const br = "> übersicht";
		this.render(br);
	}

	render(breadcrumbs) {
		this.breadcrumbs = breadcrumbs;
	}
}
module.exports = View;
