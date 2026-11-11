import AuthController from "./auth.controller.js";
import {Router} from "express";

const authRouter = Router();

authRouter.post("/",AuthController.login);

export default authRouter;