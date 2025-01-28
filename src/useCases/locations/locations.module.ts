import { CreateModule, ContainerModule } from "@expressots/core";
import { LocationsController } from "./locations.controller";

export const LocationsModule: ContainerModule = CreateModule([LocationsController]);