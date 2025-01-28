"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AppUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUseCase = void 0;
const core_1 = require("@expressots/core");
let AppUseCase = exports.AppUseCase = AppUseCase_1 = class AppUseCase {
    async execute() {
        const apiUrl = process.env.API_URL_rickandmortyapi + "character";
        const results = fetch(apiUrl).then(response => response.json());
        return await results;
    }
    async getOne(id) {
        try {
            const apiUrl = `${process.env.API_URL_rickandmortyapi}character/${id}`;
            const results = await fetch(apiUrl).then(response => response.json());
            return await results;
        }
        catch (error) {
            console.error(error);
            return error;
        }
    }
};
exports.AppUseCase = AppUseCase = AppUseCase_1 = __decorate([
    (0, core_1.provide)(AppUseCase_1)
], AppUseCase);
