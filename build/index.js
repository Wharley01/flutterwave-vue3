"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFlutterwave = void 0;
const Flutterwave_1 = __importDefault(require("./Flutterwave"));
const useFlutterwave_1 = __importDefault(require("./useFlutterwave"));
exports.useFlutterwave = useFlutterwave_1.default;
exports.default = Flutterwave_1.default;
