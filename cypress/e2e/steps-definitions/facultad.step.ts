import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { Faculty } from "../../interfaces/facultad.interface"
import FacultadService from "../api/Facultad.service"
import { default as api } from "../api/ApiHelper";


Given("User access on the API_TEST_INVENTARIOS_UNFV for table category", () => {});

When("I access the API request endpoint to get all the facultad ids", () => {
    FacultadService.getAllFacultad();
});


Then("I acces the API request endpoint to get all the Facultad ids filtered by name", (dataTable: DataTable) => {
    //CategoryService.setCategoriasFilterByName(nombre);
    dataTable.hashes().forEach((row) => {
        FacultadService.setFacultadFilterByAbreviatura(row.abreviatura);
        FacultadService.getFacultadFilterByAbreviatura();
    })
});



When("I access the API request endpoint to create a new faculty", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        const faculty: Faculty = {
          nombre: row.nombre,
          abreviatura: row.abreviatura,
        };
        FacultadService.createFacultad(faculty);
      });
});


When("I access the API request endpoint to update a faculty", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        FacultadService.setFacultadFilterByAbreviatura(row.abreviatura);
        const body = {
          nombre: row.nuevoNombre,
          abreviatura: row.nuevaAbreviatura,
        };
        FacultadService.updateFacultad(body);
      });
});

When("I access the API request endpoint to delete a faculty by abreviature", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        FacultadService.setFacultadFilterByAbreviatura(row.abreviatura);
        FacultadService.deleteFacultad();
      });
});