import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { Category } from "../../interfaces/category.interface"
import CategoryService from "../api/Category.service"
import { default as api } from "../api/ApiHelper";
import AuthGenerateTokenService from "../api/Auth.service"
import { Login } from "../../interfaces/Auth.interface"
let authToken: string;


Given("User acces on the API_TEST_INVENTARIOS_UNFV for table facultad", () => {
});

Then("I access the API request endpoint to get all the categoria ids", () => {

  CategoryService.getAllCategorias();

});


When("I acces the API request endpoint to get all the Category ids filtered by name", (dataTable: DataTable) => {
    //CategoryService.setCategoriasFilterByName(nombre);
    dataTable.hashes().forEach((row) => {

        CategoryService.setCategoriasFilterByName(row.nombre);
        CategoryService.getCategoriasFilterByName();
    })
});



When("I access the API request endpoint to create a new category", (dataTable: DataTable) => { 
    dataTable.hashes().forEach((row) => {
        const category: Category = {
          nombre: row.nombre,
        };
        CategoryService.createCategoria(category);
      });
});


When("I access the API request endpoint to update a category", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        CategoryService.setCategoriasFilterByName(row.nombre);
        const body = {
          nombre: row.nuevoNombre,
        };
        CategoryService.updateCategoria(body);
      });
});

When("I access the API request endpoint to delete a category by name", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        CategoryService.setCategoriasFilterByName(row.nombre);
        CategoryService.deleteCategoria();
      });
});