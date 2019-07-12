// Variablen deklarieren

// Wichtig! import Statements durch modules.export und require in Nodejs ersetzen und durch Weppack in eine JS packen
let ChangeModuleView = require("./js/ChangeModuleView");
let Modal = require("./js/Modal");
let View = require("/js/View");
//import View from "./View.js";

module.exports = ChangeModuleView;
module.exports = Modal;
module.exports = View;
