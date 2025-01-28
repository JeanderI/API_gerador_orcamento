
import { createCustomerController, deleteCustomerController, findCustomerController, listCustomerController, updateCustomerController } from "controllers/costumer.controllers"
import { Router } from "express"

const costumerRoutes = Router()

costumerRoutes.post("", createCustomerController)
costumerRoutes.get("", listCustomerController)
costumerRoutes.get("/:id", findCustomerController)
costumerRoutes.patch("/:id", updateCustomerController)
costumerRoutes.delete("/:id", deleteCustomerController)

export { costumerRoutes }
