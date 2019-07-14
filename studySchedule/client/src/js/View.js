let $ = require("jquery");
const emptyFunction = () => { console.info("Called empty Render/Update - Function"); };

// Render Function ---> Function um HTML im entsprechenden Container (erneut) zu "Rendern"
// Update Function ---> Function um Content-Elemente der View nach änderung von Informationen durch entsprechende Methoden zu aktualisieren

module.exports = class View {
	constructor(contentContainerJQObject) {
		this.contentContainer = contentContainerJQObject;
		this.htmlTemplate = "<div class='emptyElement'> </div>";
		this.updateFunc = emptyFunction;
		this.renderFunc = emptyFunction;
	}

	render(renderARGS) {
		this.contentContainer.html(this.htmlTemplate);
		this.renderFunc(renderARGS);
	}

	update() {
		this.updateFunc();
	}

	setHTMLTemplate(htmlTemplateLiteral) {
		this.htmlTemplate = htmlTemplateLiteral;
	}

	setUpdateFunction(updateFunction) {
		this.updateFunc = View.checkFunction(updateFunction) ? updateFunction : emptyFunction;
	}

	setRenderFunction(renderFunction) {
		this.renderFunc = View.checkFunction(renderFunction) ? renderFunction : emptyFunction;
	}

	static checkFunction(func) {
		return func !== undefined && func !== null && typeof func === "function";
	}
};
