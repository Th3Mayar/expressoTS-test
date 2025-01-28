import { controller, Get, params } from "@expressots/adapter-express";
import { Request } from "express";
import { AppUseCase } from "./episodes.usecase";
import { inject } from "@expressots/core";

@controller("/episodes")
export class EpisodesController {
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