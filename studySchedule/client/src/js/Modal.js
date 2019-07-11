var $ = require("jquery");
class Modal {
	constructor() {
		// Option Properties
		this.minEcts = 0;
		this.numberOfSem = 0;
		this.ectsPerSem = 0;

		$(document).ready(() => {
			this.modal = $("#modal");
			this.closeButton = $("#modalClose");
			this.closeButton.click(this.closeModal);
			this.saveButton = $("#saveButton");
			this.saveButton.click(()=>{ this.save(); });
			this.modalContent = $("#modalContent");
		});
	}

	closeModal() {
		this.modal.hide();
	}

	showModal() {
		this.modal.show();
	}

	save() {
		if (this.checkOptions()) {
			this.minEcts = $("#minEcts").val();
			this.numberOfSem = $("#numberOfSem").val();
			this.ectsPerSem = $("#ectsPerSem").val();
			this.getCurentOptions();
		}
	}

	checkOptions() {
		console.log("minEcts;", $("#minEcts").val());
		if ($("#minEcts").val() > 0 && $("#numberOfSem").val() > 0 && $("#ectsPerSem").val() > 0) {
			return true;
		}
		alert("Bitte überprüfe deine Eingabe. Eingaben müssen Werte größer Null sein");
		return false;
	}

	getCurentOptions() {
		console.log("Current StudySchedule Options:", "\n", "MinEcts: ", this.minEcts, "\n", "Ects per Semester: ", this.ectsPerSem, "\n", "Number of Semsters: ", this.numberOfSem);
		return [{ minEcts: this.minEcts }, { numberOfSem: this.numberOfSem }, { ectsPerSem: this.ectsPerSem }];
	}
}
module.exports = Modal;

