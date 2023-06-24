import { errorMiddleware } from "@dumiorg/coursehouse-common";
import cors from "cors";
import express, { json } from "express";
import { mainRouter } from "./routes";

const app = express();

app.use(cors());
app.use(json());
app.use(errorMiddleware);
app.use(mainRouter);

export { app };
