import {Router} from "express";
import CategoryRoutes from "./modules/category/category.routes.js";
import authRouter from "./modules/auth/auth.routes.js";

const routes = Router();

routes.get("/test", (request,response) => {
    console.log("chamando o endpoint teste");
    return response.status(200).json({
        message:"endpoint de teste funcionando",
    });
});

routes.use("/categorias",CategoryRoutes);
routes.use("/auth",authRouter);

export default routes;