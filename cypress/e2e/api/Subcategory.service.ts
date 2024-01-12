  import { default as api } from "./ApiHelper";
  import { SubCategory } from "../../interfaces/subcategory.interface"

  class SubCategoryService {
    private SubCategoriaId: number;
    private nombre: String;
    
    private url = `${Cypress.env("URL")}/sistema_inventarios_unfv/api/subcategorias`;

    public getSubCategoriaId(): number {
      return this.SubCategoriaId;
    }

    public setSubCategoriaId(SubCategoriaId: number): void {
      this.SubCategoriaId = SubCategoriaId;
    }

    public getSubCategoriaById() {
      api.get(`${this.url}/${this.SubCategoriaId}`);
    }

    public createSubCategoria(subcategory: SubCategory) {
      api.post(this.url, subcategory ).then(response => this.setSubCategoriaId(response.body.id));
    }

    public updateSubCategoria(body: SubCategory) {
      const url = this.url+ "/" +this.nombre;
      api.put(url,body)
    }

    public deleteSubCategoria() {
      const url = this.url+ "/" +this.nombre;
      api.delete(url);
    }

    public getAllSubCategorias() {
      api.get(this.url);
    }

    public setSubCategoriasFilterByName(nombre: string): void {
      this.nombre = nombre;
    }

    public getSubCategoriasFilterByName(): Cypress.Chainable<Cypress.Response<any>> {
      return api.get(this.url+ "/" +this.nombre);
    }

    public ExcelReport(): Cypress.Chainable<Cypress.Response<any>> {
      return api.downloadExcelReport(`${this.url}/descargar-excel`)
    }
  }

  export default new SubCategoryService();