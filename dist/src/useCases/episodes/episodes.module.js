"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodesModule = void 0;
const core_1 = require("@expressots/core");
const episodes_controller_1 = require("./episodes.controller");
exports.EpisodesModule = (0, core_1.CreateModule)([episodes_controller_1.EpisodesController]);
