import AuthGenerateTokenService from '../api/Auth.service';
class ApiHelper {
    private response: Cypress.Response<any>;
  
    public getResponse(): Cypress.Response<any> {
      return this.response;
    }
    
    private GetToken(): String {
      return AuthGenerateTokenService.getToken();
    }
  
    public setResponse(response: Cypress.Response<any>): void {
      this.response = response;
    }

  
    public get(url: string, queryParams?: object): Cypress.Chainable<Cypress.Response<any>> {
      const token = this.GetToken();
      cy.log("Token:", token);
      return cy.request({
        method: "GET",
        url: url,
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        qs: queryParams,
      }).then((response) => this.setResponse(response));
    }
  
    public postLogin(url: string, body: Object): Cypress.Chainable<Cypress.Response<any>> {

      return cy.request({
        method: "POST",
        url: url,
        headers: {
          "Content-type": "application/json",
        },
        body: body,
      }).then((response) => this.setResponse(response));
    }

    public post(url: string, body: Object): Cypress.Chainable<Cypress.Response<any>> {
      const token = this.GetToken(); 
      return cy.request({
        method: "POST",
        url: url,
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: body,
      }).then((response) => this.setResponse(response));
    }
  
    // Add other methods for PUT, PATCH, and DELETE as needed
    // Ensure you add specific headers or modify functions as per your requirements
    public put(url: string, body: Object): void {
      const token = this.GetToken();  
      cy.request({
            method: "PUT",
            url: url,
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              "Authorization": `Bearer ${token}`
            },
            body: body,
          }).then((response) => this.setResponse(response));
    }
  
    public delete(url: string): void {
      const token = this.GetToken();
      // DELETE request implementation
      cy.request({
        method: "DELETE",
        url: url,
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      }).then((response) => this.setResponse(response));
    }

    public downloadExcelReport(url: string, queryParams?: Object): Cypress.Chainable<Cypress.Response<any>>{
      const token = this.GetToken();
      const filename = "Reportes_subcategorias";

      return cy.request({
        method: "GET",
        url: url,
        headers: {
          "Content-type": "application/octect-stream",
          "Authorization": `Bearer ${token}`,
          "Content-Disposition": `attachment; filename=${filename}.xlsx`
        },
        qs: queryParams,
      }).then((response) => {
        cy.writeFile(`cypress/downloads/${filename}.xlsx`, response.body, 'binary');
        this.setResponse(response);
      });
    }
  }
  
  export default new ApiHelper();