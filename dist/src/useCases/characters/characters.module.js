"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersModule = void 0;
const core_1 = require("@expressots/core");
const characters_controller_1 = require("./characters.controller");
exports.CharactersModule = (0, core_1.CreateModule)([characters_controller_1.CharactersController]);
