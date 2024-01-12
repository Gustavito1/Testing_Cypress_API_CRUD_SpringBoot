
import { Model } from "./model.interface"
import { SubCategory } from "./subcategory.interface"
import { Marca } from "./marca.interface"

export interface Hardware {
    serie: string
    estado: string;
  //equipo: Equipo;
    modelo: Model
    subcategory: SubCategory
    
  }