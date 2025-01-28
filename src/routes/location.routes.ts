import { createLocationController, deleteLocationController, findLocationController, listLocationController, updateLocationController } from "controllers/locations.controllers"
import { Router } from "express"

const locationRoutes = Router()

locationRoutes.post("", createLocationController)
locationRoutes.get("", listLocationController)
locationRoutes.get("/:id", findLocationController)
locationRoutes.patch("/:id", updateLocationController)
locationRoutes.delete("/:id", deleteLocationController)

export { locationRoutes }
