import { Router } from "express";
import { createTokenController } from "../controllers/login.controllers";

const loginRoutes = Router();

loginRoutes.post("", createTokenController);

export { loginRoutes };