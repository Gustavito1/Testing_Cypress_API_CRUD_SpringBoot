import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { Software } from "../../interfaces/software.interface"
import { default as api } from "../api/ApiHelper";
import SoftwareService from "../api/Software.service"
import SubCategoryService from "../api/Subcategory.service";


Given("User access on the API_TEST_INVENTARIOS_UNFV for table software", () => {});

Then("I access the API request endpoint to get all the software ids", () => {
    SoftwareService.getAllSoftwares();
});


When("I acces the API request endpoint to get all the Software ids filtered by name", (dataTable: DataTable) => {
    //CategoryService.setCategoriasFilterByName(nombre);
    dataTable.hashes().forEach((row) => {
        SoftwareService.setSoftwareFilterByName(row.nombre);
        SoftwareService.getSoftwareFilterByName();
    })
});



When("I access the API request endpoint to create a new software", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        SubCategoryService.setSubCategoriasFilterByName(row.nombre);
        SubCategoryService.getSubCategoriasFilterByName().then((response) => {
            const subcategoriaInfo = response.body;
            
            const software: Software = {
                nombre: row.nombreSW,
                subcategoria: subcategoriaInfo,
              };
              SoftwareService.createSoftware(software);
        });
      });
});


When("I access the API request endpoint to update a software", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        SubCategoryService.setSubCategoriasFilterByName(row.nombre);
        SoftwareService.setSoftwareFilterByName(row.nombreSW);
        SubCategoryService.getSubCategoriasFilterByName().then((response) => {
            const subcategoriaInfo = response.body;
            
            const body = {
                nombre: row.nuevoNombreSW,
                subcategoria: subcategoriaInfo,
              };
              SoftwareService.updateSoftware(body);
        });
      });
});

When("I access the API request endpoint to delete a software by name", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        SoftwareService.setSoftwareFilterByName(row.nombre);
        SoftwareService.deleteSoftware();
      });
});