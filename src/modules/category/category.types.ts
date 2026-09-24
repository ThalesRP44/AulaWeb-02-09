export interface ICategory {
    name: string,
    description?: string,
    active: boolean;
}

export interface ICreateCategoryDTO {
    name: string
    description?: string,
    active: boolean;
}

export interface IUptadeCategoryDTO {
    name?: string
    description?: string,
    active?: boolean;
}