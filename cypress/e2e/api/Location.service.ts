import { default as api } from "./ApiHelper";
import { Location } from "../../interfaces/location.interface"

class LocationService {
  private LocationId: number;
  private nombre: String;
  
  private url = `${Cypress.env("URL")}/sistema_inventarios_unfv/api/ubicaciones`;

  public getLocationId(): number {
    return this.LocationId;
  }

  public setLocationId(SubCategoriaId: number): void {
    this.LocationId = SubCategoriaId;
  }

  public getLocationById() {
    api.get(`${this.url}/${this.LocationId}`);
  }

  public createLocation(location: Location) {
    api.post(this.url, location ).then(response => this.setLocationId(response.body.id));
  }

  public updateLocation(body: Location) {
    const url = this.url+ "/" +this.nombre;
    api.put(url,body)
  }

  public deleteLocation() {
    const url = this.url+ "/" +this.nombre;
    api.delete(url);
  }

  public getAllLocations() {
    api.get(this.url);
  }

  public setLocationFilterByName(nombre: string): void {
    this.nombre = nombre;
  }

  public getLocationFilterByName(): Cypress.Chainable<Cypress.Response<any>> {
    return api.get(this.url+ "/" +this.nombre);
  }

}

export default new LocationService();