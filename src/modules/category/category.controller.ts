import type { Request, Response } from "express";
import categoryService from "./category.service.js";

class CategoryController {
    public async create(req:Request,resp:Response) {
        /* let nome = req.body.name ?? "não enviado";
        let description = req.body.description ?? "não enviado";
        let active = req.body.active ?? "não enviado"; */

        const {name, description, active} = req.body ?? {};

        const categoria = categoryService.create();

        //console.log("o nome enviado é : ", nome);
    }
}

export default new CategoryController();