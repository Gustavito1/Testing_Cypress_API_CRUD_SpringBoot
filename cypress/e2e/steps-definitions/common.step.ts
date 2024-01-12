import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { default as api } from "../api/ApiHelper";

//Step definitions que tienen en común todos los features

Then("Verify the response status code {int}", (statusCode: number) => {
  expect(api.getResponse().status).to.equal(statusCode);
  cy.log(api.getResponse().body);
});

Then("Verify the data", () => {
    const responseBody = api.getResponse().body.content;
    cy.log(JSON.stringify(responseBody, null, 2));

})

Then("Verify the response body contains the id and data", () => {
      // Verifica que la respuesta tenga una propiedad 'id'
      expect(api.getResponse().body).to.have.property("id").that.is.a("number");

      // Verifica que la respuesta tenga una propiedad 'nombre' que no esté vacía
      expect(api.getResponse().body).to.have.property("nombre").that.is.a("string").and.not.to.be.empty;
  
})