import { AppExpress } from "@expressots/adapter-express";
import { AppContainer, Env } from "@expressots/core";
import { AppModule } from "@useCases/app/app.module";
import { CharactersModule } from "@useCases/characters/characters.module";
import { LocationsModule } from "@useCases/locations/locations.module";
import { EpisodesModule } from "@useCases/episodes/episodes.module";

export class App extends AppExpress {
    private config: AppContainer = this.configContainer([AppModule]);
    private characters: AppContainer = this.configContainer([CharactersModule]);
    private locations: AppContainer = this.configContainer([LocationsModule]);
    private episodes: AppContainer = this.configContainer([EpisodesModule]);

    async globalConfiguration(): Promise<void> {
        this.setGlobalRoutePrefix("/");

        this.initEnvironment("development", {
            env: {
                development: ".env.development",
                production: ".env.production",
            },
        });
    }

    async configureServices(): Promise<void> {
        this.Provider.register(Env);

        this.Middleware.addBodyParser();
        this.Middleware.setErrorHandler({ showStackTrace: true });
    }

    async postServerInitialization(): Promise<void> {
        if (await this.isDevelopment()) {
            this.Provider.get(Env).checkFile(".env.development");
        }
    }

    async serverShutdown(): Promise<void> {}
}
