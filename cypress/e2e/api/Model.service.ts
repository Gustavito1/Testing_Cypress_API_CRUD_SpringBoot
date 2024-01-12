import { default as api } from "./ApiHelper";
import { Model } from "../../interfaces/model.interface"

class ModelService {
  private modeloId: number;
  private nombre: String;
  private url = `${Cypress.env("URL")}/sistema_inventarios_unfv/api/modelos`;

  public getModelId(): number {
    return this.modeloId;
  }

  public setModelId(modeloId: number): void {
    this.modeloId = modeloId;
  }

  public getModelById(): Cypress.Chainable<Cypress.Response<any>> {
    return api.get(`${this.url}/${this.modeloId}`);
  }

  public createModel(model: Model) {
    api.post(this.url, model ).then(response => this.setModelId(response.body.id));
  }

  public updateModel(body: Model) {
    const url = this.url+ "/" +this.modeloId;
    api.put(url,body)
  }

  public deleteModel() {
    const url = this.url+ "/" +this.modeloId;
    api.delete(url);
  }

  public getAllModels() {
    api.get(this.url);
  }

  public setModelsFilterByName(nombre: string): void {
    this.nombre = nombre;
  }

  public getModelsFilterByName(): Cypress.Chainable<Cypress.Response<any>> {
    return api.get(this.url+ "/" +this.nombre);
  }

}

export default new ModelService();