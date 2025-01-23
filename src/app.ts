import cors from "cors";
import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";


const app: Application = express();

app.use(cors());

app.use(express.json());


/* app.use(handleErrorMiddleware); */

export default app;