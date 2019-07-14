const $ = require("jquery");
const View = require("./View");
const HTMLTEMPLATES = require("./HTMLTemplates");
const APIHANDLER = require("./APIHandler");

module.exports = class Modal extends View {
	constructor() {
		super($(".modalContent"));
		this.modal = $("#modal");
		this.closeButton = $("#modalClose");
		this.modalSafe = $("#modalSafe");
		this.modalContainer = $("#modalContainer");
		this.closeButton.click(() => { this.closeModal(); });
	}

	renderOptions() {
		APIHANDLER.getOptions().then((response) => {
			let initF = function (modal) {
				let op1 = $("#op1");
				let op2 = $("#op2");
				let op3 = $("#op3");
				console.log("Options", response);
				if (Array.isArray(response) && response.lenght > 0 && response[0].numberOfSem !== undefined) {
					op1.val(response[0].numberOfSem);
					op2.val(response[0].minEcts);
					op3.val(response[0].ectsPerSem);
				}
				op2.change(() => {
					op3.val(op2.val());
				});

				op3.attr("step", op2.val());
				op2.change(() => {
					op3.attr("step", op2.val());
				});

				modal.modalSafe.click(() => {
					if (op1.val() <= 0 || op2.val() <= 0 || op3.val() <= 0) {
						if (op1.val() <= 0) { op1.get(0).setCustomValidity("Anzahl Semester muss größer 0 sein."); }
						if (op2.val() <= 0) { op1.get(0).setCustomValidity("Minimale Anzahl ECTS muss größer 0 sein."); }
						if (op3.val() <= 0) { op1.get(0).setCustomValidity("Minimale ECTS pro Semester muss größer 0 sein."); }
						op1.get(0).reportValidity();
						op2.get(0).reportValidity();
						op3.get(0).reportValidity();
					}
					else if (op3.val() % op2.val() !== 0) {
						op3.get(0).reportValidity();
					}
					else {
						op1.get(0).setCustomValidity("");
						op2.get(0).setCustomValidity("");
						op3.get(0).setCustomValidity("");
						APIHANDLER.setOptions({
							numberOfSem: op1.val(),
							minEcts: op2.val(),
							ectsPerSem: op3.val()
						}).then((info) => {
							console.info(info);
							modal.closeModal();
							//TODO Speichern Datenbank implementieren
						}).catch(err => console.error(err));
					}
				});
			};

			super.setHTMLTemplate(HTMLTEMPLATES.MODALOPTIONS);
			super.setRenderFunction(initF);
			this.showModal();
			super.render(this);
		});
	}

	closeModal() {
		this.modal.hide();
	}

	showModal() {
		this.modal.show();
	}
};
