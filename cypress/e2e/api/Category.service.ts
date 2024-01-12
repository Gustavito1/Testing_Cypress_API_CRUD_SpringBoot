import { default as api } from "./ApiHelper";
import { Category } from "../../interfaces/category.interface"

class CategoriaService {
  private categoriaId: number;
  private nombre: String;
  private url = `${Cypress.env("URL")}/sistema_inventarios_unfv/api/categorias`;
  private authToken: string;

  public getCategoriaId(): number {
    return this.categoriaId;
  }

  public setCategoriaId(categoriaId: number): void {
    this.categoriaId = categoriaId;
  }

  public setAuthToken(token: string): void {
    this.authToken = token;
  }

  public getCategoriaById() {
    api.get(`${this.url}/${this.categoriaId}`);
  }

  public createCategoria(category: Category) {
    api.post(this.url, category ).then(response => this.setCategoriaId(response.body.id));
  }

  public updateCategoria(body: Category) {
    const url = this.url+ "/" +this.nombre;
    api.put(url,body)
  }

  public deleteCategoria() {
    const url = this.url+ "/" +this.nombre;
    api.delete(url);
  }

  public getAllCategorias() {
    api.get(this.url);
  }

  public setCategoriasFilterByName(nombre: string): void {
    this.nombre = nombre;
  }

  public getCategoriasFilterByName(): Cypress.Chainable<Cypress.Response<any>> {
    return api.get(this.url+ "/" +this.nombre);
  }


}

export default new CategoriaService();