import { default as api } from "./ApiHelper";
import { Login } from "../../interfaces/Auth.interface"

class AuthGenerateTokenService {
  private email: String;
  private password: String;
  private url = `${Cypress.env("URL")}/sistema_inventarios_unfv/api/auth/login`;
  private token: String;
  
  public setToken(token: String) {
    this.token=token;
  }

  public GenerateToken(login: Login): Cypress.Chainable<Cypress.Response<any>> {
    return api.postLogin(this.url, login).its('body').then(body => {
        const token = body.token;
        this.setToken(token);
        Cypress.env("AUTH_TOKEN", token);
        console.log("Token generated:", token);
        return token;
    });
  /*
    const response = await api.post(this.url, login);
    const token = response.body.token;
    this.setToken(token);
    Cypress.env("AUTH_TOKEN", token);
    console.log("Token generated:", token);
    return token;*/
  }

  public getToken(): String {
    return this.token;
  }

  

}

export default new AuthGenerateTokenService();