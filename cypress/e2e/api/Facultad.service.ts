import { default as api } from "./ApiHelper";
import { Faculty } from "../../interfaces/facultad.interface"

class FacultadService {
  private facultadId: number;
  private abreviatura : String;
  private url = `${Cypress.env("URL")}/sistema_inventarios_unfv/api/facultades`;

  public getFacultadId(): number {
    return this.facultadId;
  }

  public setFacultadId(facultadId: number): void {
    this.facultadId = facultadId;
  }

  public getFacultadById() {
    api.get(`${this.url}/${this.facultadId}`);
  }

  public createFacultad(faculty: Faculty) {
    api.post(this.url, faculty ).then(response => this.setFacultadId(response.body.id));
  }

  public updateFacultad(body: Faculty) {
    const url = this.url+ "/" +this.abreviatura;
    api.put(url,body)
  }

  public deleteFacultad() {
    const url = this.url+ "/" +this.abreviatura;
    api.delete(url);
  }

  public getAllFacultad() {
    api.get(this.url);
  }

  public setFacultadFilterByAbreviatura(abreviatura: string): void {
    this.abreviatura = abreviatura;
  }

  public getFacultadFilterByAbreviatura(): Cypress.Chainable<Cypress.Response<any>> {
    return api.get(this.url+ "/" +this.abreviatura);
  }

}

export default new FacultadService();