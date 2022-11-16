"use strict";
// class component
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class HelloCC extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.name = (!(props === null || props === void 0 ? void 0 : props.name)) ? '-->>' : props === null || props === void 0 ? void 0 : props.name;
        this.lastname = (!(props === null || props === void 0 ? void 0 : props.lastname)) ? '...' : props === null || props === void 0 ? void 0 : props.lastname;
    }
    render() {
        return react_1.default.createElement("h1", null,
            "Hola ",
            this.name,
            " ",
            this.lastname,
            " desde CC");
    }
}
exports.default = HelloCC;
