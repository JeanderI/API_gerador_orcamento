import { createClientController, 
    deleteClientController, 
    findClientController, 
    listClientController, 
    updateClientController 
} from "../controllers/client.controllers"

import { Router } from "express"

const clientRoutes = Router()

clientRoutes.post("", createClientController)
clientRoutes.get("", listClientController)
clientRoutes.get("/:id", findClientController)
clientRoutes.patch("/:id", updateClientController)
clientRoutes.delete("/:id", deleteClientController)

export { clientRoutes }
