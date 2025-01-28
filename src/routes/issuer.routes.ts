import { createIssuerController, deleteIssuerController, findIssuerController, listIssuerController, updateIssuerController } from "controllers/issuer.controllers"
import { Router } from "express"

const issuerRoutes = Router()

issuerRoutes.post("", createIssuerController)
issuerRoutes.get("", listIssuerController)
issuerRoutes.get("/:id", findIssuerController)
issuerRoutes.patch("/:id", updateIssuerController)
issuerRoutes.delete("/:id", deleteIssuerController)

export { issuerRoutes }
