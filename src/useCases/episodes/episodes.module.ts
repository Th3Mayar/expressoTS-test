import { CreateModule, ContainerModule } from "@expressots/core";
import { EpisodesController } from "./episodes.controller";

export const EpisodesModule: ContainerModule = CreateModule([EpisodesController]);