"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LocationGetterProvider_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationGetterProvider = void 0;
const core_1 = require("@expressots/core");
let LocationGetterProvider = exports.LocationGetterProvider = LocationGetterProvider_1 = class LocationGetterProvider {
};
exports.LocationGetterProvider = LocationGetterProvider = LocationGetterProvider_1 = __decorate([
    (0, core_1.provide)(LocationGetterProvider_1)
], LocationGetterProvider);
