import "reflect-metadata";
import { Container } from "inversify";
import type { interfaces } from "inversify";

const SINGLETON_OPTIONS: interfaces.ContainerOptions = {
  defaultScope: "Singleton",
  autoBindInjectable: true,
};

export const diContainer = new Container(SINGLETON_OPTIONS);
