"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsModule = void 0;
const core_1 = require("@expressots/core");
const locations_controller_1 = require("./locations.controller");
exports.LocationsModule = (0, core_1.CreateModule)([locations_controller_1.LocationsController]);
