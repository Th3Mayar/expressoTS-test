"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersController = void 0;
const adapter_express_1 = require("@expressots/adapter-express");
const core_1 = require("@expressots/core");
const characters_usecase_1 = require("./characters.usecase");
let CharactersController = exports.CharactersController = class CharactersController {
    execute() {
        return this.appUseCase.execute();
    }
    getEpisodeById(req) {
        return this.appUseCase.getOne(req.params.id);
    }
};
__decorate([
    (0, core_1.inject)(characters_usecase_1.AppUseCase),
    __metadata("design:type", characters_usecase_1.AppUseCase)
], CharactersController.prototype, "appUseCase", void 0);
__decorate([
    (0, adapter_express_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "execute", null);
__decorate([
    (0, adapter_express_1.Get)("/:id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "getEpisodeById", null);
exports.CharactersController = CharactersController = __decorate([
    (0, adapter_express_1.controller)("/characters")
], CharactersController);
