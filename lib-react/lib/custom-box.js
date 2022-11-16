"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBox = void 0;
const react_1 = __importDefault(require("react"));
const CustomBox = (props) => {
    const { width, height, bgColor, content, color } = props;
    const showText = !content ? 'Texto de ejemplo' : content;
    return (react_1.default.createElement("div", { style: {
            width: width || 200,
            height: height || 200,
            background: bgColor || 'green',
            color: color || 'white'
        } }, showText));
};
exports.CustomBox = CustomBox;
exports.default = exports.CustomBox;
