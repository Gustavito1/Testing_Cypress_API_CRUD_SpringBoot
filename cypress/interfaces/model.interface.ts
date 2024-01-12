import { SubCategory } from "./subcategory.interface"
import { Marca } from "./marca.interface"
export interface Model {
    nombre: string;
    descripcion: string;
    subcategoria: SubCategory
    marca: Marca 
  }