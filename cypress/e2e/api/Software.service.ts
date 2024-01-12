import { default as api } from "./ApiHelper";
import { Software } from "../../interfaces/software.interface"

class SoftwareService {
  private softwareId: number;
  private nombre: String;
  private url = `${Cypress.env("URL")}/sistema_inventarios_unfv/api/software`;

  public getSoftwareId(): number {
    return this.softwareId;
  }

  public setSoftwareId(softwareId: number): void {
    this.softwareId = softwareId;
  }

  public getSoftwareById() {
    api.get(`${this.url}/${this.softwareId}`);
  }

  public createSoftware(software: Software) {
    api.post(this.url, software ).then(response => this.setSoftwareId(response.body.id));
  }

  public updateSoftware(body: Software) {
    const url = this.url+ "/" +this.nombre;
    api.put(url,body)
  }

  public deleteSoftware() {
    const url = this.url+ "/" +this.nombre;
    api.delete(url);
  }

  public getAllSoftwares() {
    api.get(this.url);
  }

  public setSoftwareFilterByName(nombre: string): void {
    this.nombre = nombre;
  }

  public getSoftwareFilterByName(): Cypress.Chainable<Cypress.Response<any>> {
    return api.get(this.url+ "/" +this.nombre);
  }

}

export default new SoftwareService();