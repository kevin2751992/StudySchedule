var $ = require("jquery");
class Modal {
	constructor() {
		$(document).ready(() => {
			this.modal = $("#modal");
			this.closeButton = $("#modalClose");
			this.closeButton.click(this.closeModal);
			this.modalContent = $("#modalContent");
		});
	}

	closeModal() {
		this.modal.hide();
	}
}
module.exports = Modal;

