"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@expressots/core");
const app_controller_1 = require("./app.controller");
exports.AppModule = (0, core_1.CreateModule)([app_controller_1.AppController]);
