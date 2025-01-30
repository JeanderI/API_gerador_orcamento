import { createFlavorController, 
    deleteFlavorController, 
    findFlavorController, 
    listFlavorController, 
    updateFlavorController 
} from "../controllers/flavor.controllers"

import { Router } from "express"

const flavorRoutes = Router()

flavorRoutes.post("", createFlavorController)
flavorRoutes.get("", listFlavorController)
flavorRoutes.get("/:id", findFlavorController)
flavorRoutes.patch("/:id", updateFlavorController)
flavorRoutes.delete("/:id", deleteFlavorController)

export { flavorRoutes }
