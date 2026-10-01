import { response, type Request, type Response } from "express";
import categoryService from "./category.service.js";

class CategoryController {
    public async create(req:Request,resp:Response) {

        const {name, description, active} = req.body ?? {};

        const categoria = await categoryService.create({
            name,description,active
        });

        return resp.status(201).json(categoria);

    }

    public async findAll(req:Request, resp:Response){
        const categorias = await categoryService.findAll();

        return resp.status(200).json(categorias);
    }

    public async findById(req:Request, resp:Response){
        const {id} = req.params ??{};

        if(!id || typeof id !== "string"){
            return resp.status(400).json({
                message: "id invalido"
            });
        }

        const category = await categoryService.findAll(id);

        return resp.status(200).json(category);
    }
}

export default new CategoryController();