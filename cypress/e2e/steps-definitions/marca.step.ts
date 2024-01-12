import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { Marca } from "../../interfaces/marca.interface"
import { default as api } from "../api/ApiHelper";
import MarcaService from "../api/Marca.service";


Given("User access on the API_TEST_INVENTARIOS_UNFV for table marca", () => {});

Then("I access the API request endpoint to get all the marca ids", () => {
    MarcaService.getAllMarcas();
});


When("I acces the API request endpoint to get all the Marca ids filtered by name", (dataTable: DataTable) => {
    //CategoryService.setCategoriasFilterByName(nombre);
    dataTable.hashes().forEach((row) => {
        MarcaService.setMarcasFilterByName(row.nombre);
        MarcaService.getMarcasFilterByName();
    })
});



When("I access the API request endpoint to create a new marca", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        const marca: Marca = {
          nombre: row.nombre,
        };
        MarcaService.createMarca(marca);
      });
});


When("I access the API request endpoint to update a marca", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        MarcaService.setMarcasFilterByName(row.nombre);
        const body = {
          nombre: row.nuevoNombre,
        };
        MarcaService.updateMarca(body);
      });
});

When("I access the API request endpoint to delete a marca by name", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        MarcaService.setMarcasFilterByName(row.nombre);
        MarcaService.deleteMarca();
      });
});