"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const adapter_express_1 = require("@expressots/adapter-express");
const core_1 = require("@expressots/core");
const app_module_1 = require("@useCases/app/app.module");
const characters_module_1 = require("@useCases/characters/characters.module");
const locations_module_1 = require("@useCases/locations/locations.module");
const episodes_module_1 = require("@useCases/episodes/episodes.module");
class App extends adapter_express_1.AppExpress {
    constructor() {
        super(...arguments);
        this.config = this.configContainer([app_module_1.AppModule]);
        this.characters = this.configContainer([characters_module_1.CharactersModule]);
        this.locations = this.configContainer([locations_module_1.LocationsModule]);
        this.episodes = this.configContainer([episodes_module_1.EpisodesModule]);
    }
    async globalConfiguration() {
        this.setGlobalRoutePrefix("/");
        this.initEnvironment("development", {
            env: {
                development: ".env.development",
                production: ".env.production",
            },
        });
    }
    async configureServices() {
        this.Provider.register(core_1.Env);
        this.Middleware.addBodyParser();
        this.Middleware.setErrorHandler({ showStackTrace: true });
    }
    async postServerInitialization() {
        if (await this.isDevelopment()) {
            this.Provider.get(core_1.Env).checkFile(".env.development");
        }
    }
    async serverShutdown() { }
}
exports.App = App;
