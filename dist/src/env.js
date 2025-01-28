"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const package_json_1 = __importDefault(require("../package.json"));
exports.env = {
    App: {
        appName: package_json_1.default.name,
        appVersion: package_json_1.default.version,
        get Port() {
            return process.env.PORT || 3000;
        }
    },
};
