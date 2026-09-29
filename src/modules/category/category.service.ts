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
        const category = Category.create();
    }

}

export default new CategoryService;