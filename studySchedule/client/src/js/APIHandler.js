const CONFIG = require("../../../config.json");

const PATHS = {
	OPTIONS: "option/",
	MODULES: "module/",
	SCHEDULES: "informatik/",
	STATUS: "status/"
};

const HTTPMETHODS = {
	GET: "GET",
	POST: "POST",
	DELETE: "DELETE",
	PUT: "PUT",
	OPTIONS: "OPTIONS"
};

module.exports = class APIHandler {
	static call(method, path, data) {
		return fetch(`${CONFIG.PROTOKOLL}://${CONFIG.HOST}:${CONFIG.PORT}/${path}`, {
			method: method,
			cache: "no-cache",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json"
			},
			body: method !== HTTPMETHODS.GET ? JSON.stringify(data) : null
		})
			.then(response => response.json())
			.catch(error => { console.error("Unable to Fetch" + error); });
	}

	static getOptions() {
		return APIHandler.call(HTTPMETHODS.GET, PATHS.OPTIONS);
	}

	static setOptions(obj) {
		return APIHandler.call(HTTPMETHODS.POST, PATHS.OPTIONS, obj);
	}

	static getModules() {
		return APIHandler.call(HTTPMETHODS.GET, PATHS.MODULES);
	}
	static deleteModules(id) {
		return APIHandler.call(HTTPMETHODS.DELETE, PATHS.MODULES + id);
	}
	static checkOptionsStatus() {
		return APIHandler.call(HTTPMETHODS.GET, PATHS.STATUS);
	}
	static getSchedules() {
		return APIHandler.call(HTTPMETHODS.GET, PATHS.SCHEDULES);
	}
};
