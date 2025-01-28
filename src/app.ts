import cors from "cors";
import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";

import { accountsReceivableRoutes } from "routes/accountsreceivable.routes";
import { costumerRoutes } from "routes/costumer.routes";
import { estimateRoutes } from "routes/estimate.routes";
import { eventRoutes } from "routes/events.routes";
import { flavorRoutes } from "routes/flavor.routes";
import { issuerRoutes } from "routes/issuer.routes";
import { locationRoutes } from "routes/location.routes";
import { handleErrorMiddleware } from "middlewares/handleError.middleware";
import { accountsPayableRoutes } from "routes/accountspayable.routes";


const app: Application = express();

app.use(cors());

app.use(express.json());

app.use("/accountsPayable", accountsPayableRoutes)
app.use("/accountsReceivable", accountsReceivableRoutes)
app.use("/costumer", costumerRoutes)
app.use("/estimate", estimateRoutes)
app.use("/events", eventRoutes)
app.use("/flavor", flavorRoutes)
app.use("/issuer", issuerRoutes)
app.use("/location", locationRoutes)

app.use(handleErrorMiddleware);

export default app;