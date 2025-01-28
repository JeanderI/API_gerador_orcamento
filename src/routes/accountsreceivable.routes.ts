import { createAccountsReceivableController, deleteAccountsReceivableController, findAccountsReceivableController, listAccountsReceivableController, updateAccountsReceivableController } from "controllers/accountsreceivable.controllers"
import { Router } from "express"

const accountsReceivableRoutes = Router()

accountsReceivableRoutes.post("", createAccountsReceivableController)
accountsReceivableRoutes.get("", listAccountsReceivableController)
accountsReceivableRoutes.get("/:id", findAccountsReceivableController)
accountsReceivableRoutes.patch("/:id", updateAccountsReceivableController)
accountsReceivableRoutes.delete("/:id", deleteAccountsReceivableController)

export { accountsReceivableRoutes }
