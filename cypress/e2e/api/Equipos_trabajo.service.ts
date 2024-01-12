import { default as api } from "./ApiHelper";
import { E_trabajo } from "../../interfaces/equipos_trabajo.interface"

class Equipos_trabajoService {
  private hardwareId: number;
  private serie: String;
  private url = `${Cypress.env("URL")}/sistema_inventarios_unfv/api/equiposTrabajo`;

  public getEquipos_trabajoId(): number {
    return this.hardwareId;
  }

  public setEquipos_trabajoId(softwareId: number): void {
    this.hardwareId = softwareId;
  }

  public getEquipos_trabajoById() {
    api.get(`${this.url}/${this.hardwareId}`);
  }

  public createEquipos_trabajo(e_trabajo: E_trabajo) {
    api.post(this.url, e_trabajo ).then(response => this.setEquipos_trabajoId(response.body.id));
  }

  public updateEquipos_trabajo(body: E_trabajo) {
    const url = this.url+ "/" +this.serie;
    api.put(url,body)
  }

  public deleteEquipos_trabajo() {
    const url = this.url+ "/" +this.serie;
    api.delete(url);
  }

  public getAllEquipos_trabajo() {
    api.get(this.url);
  }

  public setEquipos_trabajoFilterByName(serie: string): void {
    this.serie = serie;
  }

  public setEquipos_trabajoFilterbySerieGenerated (): void {
    this.serie = Cypress.env("generatedSerie");
  }

  public getEquipos_trabajoFilterByName(): Cypress.Chainable<Cypress.Response<any>> {
    return api.get(this.url+ "/" +this.serie);
  }

}

export default new Equipos_trabajoService();