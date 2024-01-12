import { default as api } from "./ApiHelper";
import { Marca } from "../../interfaces/marca.interface"

class MarcaService {
  private MarcaId: number;
  private nombre: String;
  private url = `${Cypress.env("URL")}/sistema_inventarios_unfv/api/marcas`;

  public getMarcaId(): number {
    return this.MarcaId;
  }

  public setMarcaId(categoriaId: number): void {
    this.MarcaId = categoriaId;
  }

  public getMarcaById() {
    api.get(`${this.url}/${this.MarcaId}`);
  }

  public createMarca(marca: Marca) {
    api.post(this.url, marca ).then(response => this.setMarcaId(response.body.id));
  }

  public updateMarca(body: Marca) {
    const url = this.url+ "/" +this.nombre;
    api.put(url,body)
  }

  public deleteMarca() {
    const url = this.url+ "/" +this.nombre;
    api.delete(url);
  }

  public getAllMarcas() {
    api.get(this.url);
  }

  public setMarcasFilterByName(nombre: string): void {
    this.nombre = nombre;
  }

  public getMarcasFilterByName(): Cypress.Chainable<Cypress.Response<any>> {
    return api.get(this.url+ "/" +this.nombre);
  }

}

export default new MarcaService();