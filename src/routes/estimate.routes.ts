import { createEstimateController, deleteEstimateController, findEstimateController, listEstimateController, updateEstimateController } from "controllers/estimate.controllers"
import { Router } from "express"

const estimateRoutes = Router()

estimateRoutes.post("", createEstimateController)
estimateRoutes.get("", listEstimateController)
estimateRoutes.get("/:id", findEstimateController)
estimateRoutes.patch("/:id", updateEstimateController)
estimateRoutes.delete("/:id", deleteEstimateController)

export { estimateRoutes }
