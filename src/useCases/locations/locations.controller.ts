import { controller, Get } from "@expressots/adapter-express";
import { Request } from "express";
import { inject } from "@expressots/core";
import { AppUseCase } from "./locations.usecase";

@controller("/locations")
export class LocationsController {
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