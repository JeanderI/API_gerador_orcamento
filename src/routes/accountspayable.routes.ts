import { createAccountsPayableController, deleteAccountsPayableController, findAccountsPayableController, listAccountsPayableController, updateAccountsPayableController } from "controllers/accountspayable.controllers"
import { Router } from "express"

const accountsPayableRoutes = Router()

accountsPayableRoutes.post("", createAccountsPayableController)
accountsPayableRoutes.get("", listAccountsPayableController)
accountsPayableRoutes.get("/:id", findAccountsPayableController)
accountsPayableRoutes.patch("/:id", updateAccountsPayableController)
accountsPayableRoutes.delete("/:id", deleteAccountsPayableController)


export {accountsPayableRoutes}