"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@expressots/core");
const app_1 = require("app");
const env_1 = require("env");
core_1.AppFactory.create(app_1.App).then((app) => app.listen(env_1.env.App.Port, {
    appName: env_1.env.App.appName,
    appVersion: env_1.env.App.appVersion,
}));
