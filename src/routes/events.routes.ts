import { createEventController, 
    deleteEventController, 
    findEventController, 
    listEventController, 
    updateEventController 
} from "../controllers/events.controllers"

import { Router } from "express"

const eventRoutes = Router()

eventRoutes.post("", createEventController)
eventRoutes.get("", listEventController)
eventRoutes.get("/:id", findEventController)
eventRoutes.patch("/:id", updateEventController)
eventRoutes.delete("/:id", deleteEventController)

export { eventRoutes }
