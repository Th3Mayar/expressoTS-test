import { CreateModule, ContainerModule } from "@expressots/core";
import { CharactersController } from "./characters.controller";

export const CharactersModule: ContainerModule = CreateModule([CharactersController]);
