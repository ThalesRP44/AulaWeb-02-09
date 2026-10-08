/*
papel do category.service.ts

ele será responsavel por:
 - criar categorias por meio da model
 - listar categorias 
 - buscar categoria
 - atualizar 
 - excluir

ou seja, consentra as alterações e regras de negócios relacionadas ao modulo categoria 

*/

import { deflate } from "node:zlib";
import Category from "./category.models.js";
import type {
    ICreateCategoryDTO,
    IUptadeCategoryDTO
}from "./category.types.js";

class CategoryService {

    public async create(data:ICreateCategoryDTO){
        const category = Category.create({
            name: data.name,
            description: data.description ??"",
            active: data.active ?? true,
        });

        return category;
    }

    public async findAll(){
        return await Category.find();
    }

    public async findByIdService(id:string){
        return await Category.findById(id);
    }

    public async update(id:string, data:IUptadeCategoryDTO){
        return await Category.findByIdAndUpdate(id,data, {
            returnDocument: 'after',
            runValidators: true,
        });
    }

    public async delete(id:string){
        return await Category.findByIdAndUpdate(id);
    }

}

export default new CategoryService;