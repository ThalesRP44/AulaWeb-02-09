import {Router} from "express";
import CategoryController from "./category.controller.js";

const CategoryRoutes = Router();

CategoryRoutes .post('/', CategoryController.create);

CategoryRoutes.get('/',CategoryController.findAll);

CategoryRoutes.get('/:id',CategoryController.findById);

CategoryRoutes.put('/:id', CategoryController.update);

CategoryRoutes.delete('/:id', CategoryController.delete);

export default CategoryRoutes;
