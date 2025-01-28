import { controller, Get } from "@expressots/adapter-express";
import { inject } from "@expressots/core";
import { Request } from "express";
import { AppUseCase } from "./characters.usecase";

@controller("/characters")
export class CharactersController {
    @inject(AppUseCase) private appUseCase: AppUseCase;

    @Get("/")
    execute() {
        return this.appUseCase.execute();
    }

    @Get("/:id")
    getEpisodeById(req: Request) {
        return this.appUseCase.getOne(req.params.id);
    }
}
