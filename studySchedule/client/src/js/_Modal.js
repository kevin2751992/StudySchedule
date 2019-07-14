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
			this.closeButton.click(()=>{ this.closeModal(); });
			this.modalSafe = $("#modalSafe");
			this.modalSafe.click(()=>{ this.save(); });
			this.modalContent = $(".modalContent");
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
			var request = require("request");
			var payload = {
				minEcts: this.minEcts,
				numberOfSem: this.numberOfSem,
				ectsPerSem: this.ectsPerSem
			};
			var options = {
				method: "POST",
				url: "http://localhost:8080/option/",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(payload)
			};
			request(options, function (error, response, body) {
				console.log(error);
				console.log(response);
				console.log(body);
			});
			this.getCurentOptions();
		}
	}

	checkOptions() {
		let minEcts = $("#minEcts").val();
		let numberOfSem = $("#numberOfSem").val();
		let ectsPerSem = $("#ectsPerSem").val();

		console.log("minEcts;", $("#minEcts").val());
		if (minEcts > 0 && numberOfSem > 0 && ectsPerSem > 0 && (ectsPerSem % minEcts === 0)) {
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

