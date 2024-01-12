import { default as api } from "./ApiHelper";
import { Hardware } from "../../interfaces/hardware.interface"

class HardwareService {
  private hardwareId: number;
  private serie: String;
  private url = `${Cypress.env("URL")}/sistema_inventarios_unfv/api/hardware`;

  public getHardwareId(): number {
    return this.hardwareId;
  }

  public setHardwareId(softwareId: number): void {
    this.hardwareId = softwareId;
  }

  public getHardwareById() {
    api.get(`${this.url}/${this.hardwareId}`);
  }

  public createHardware(hardware: Hardware) {
    api.post(this.url, hardware ).then(response => this.setHardwareId(response.body.id));
  }

  public updateHardware(body: Hardware) {
    const url = this.url+ "/" +this.serie;
    api.put(url,body)
  }

  public deleteHardware() {
    const url = this.url+ "/" +this.serie;
    api.delete(url);
  }

  public getAllHardware() {
    api.get(this.url);
  }

  public setHardwareFilterByName(serie: string): void {
    this.serie = serie;
  }

  public getHardwareFilterByName(): Cypress.Chainable<Cypress.Response<any>> {
    return api.get(this.url+ "/" +this.serie);
  }

}

export default new HardwareService();