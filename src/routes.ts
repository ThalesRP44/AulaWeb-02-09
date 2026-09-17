import {Router} from "express";

const routes = Router();

routes.get("/test", (request,response) => {
    console.log("chamando o endpoint teste");
    return response.status(200).json({
        message:"endpoint de teste funcionando",
    });
});

export default routes;