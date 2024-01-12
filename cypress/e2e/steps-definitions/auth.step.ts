import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { Login } from "../../interfaces/Auth.interface"
import AuthGenerateTokenService from "../api/Auth.service"

let authToken: string;
Given("User access on the API_TEST_INVENTARIOS_UNFV for generate token", () => {});

When("I access the API request endpoint to generate a Token", (dataTable: DataTable) => {
      return dataTable.hashes().forEach(async (row) => {
    const login: Login = {
      email: row.email,
      password: row.password,
    };
        AuthGenerateTokenService.GenerateToken(login);
      });
});