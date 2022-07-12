// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { digimonRouter } from "./digimons";
export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter).merge("digimons.",digimonRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
