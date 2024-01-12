import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { Category } from "../../interfaces/category.interface"
import { Location } from "../../interfaces/location.interface"
import { default as api } from "../api/ApiHelper";
import FacultadService from "../api/Facultad.service"
import LocationService from "../api/Location.service";


Given("User acces on the API_TEST_INVENTARIOS_UNFV for table location", () => {});

Then("I access the API request endpoint to get all the location ids", () => {
    LocationService.getAllLocations();
});


When("I acces the API request endpoint to get all the location ids filtered by name", (dataTable: DataTable) => {
    //CategoryService.setCategoriasFilterByName(nombre);
    dataTable.hashes().forEach((row) => {
        LocationService.setLocationFilterByName(row.nombreLT);
        LocationService.getLocationFilterByName();
    })
});



When("I access the API request endpoint to create a new location", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        FacultadService.setFacultadFilterByAbreviatura(row.abreviaturaFCT);
        FacultadService.getFacultadFilterByAbreviatura().then((response) => {
            const facultadInfo = response.body;
            
            const location: Location = {
                nombre: row.nombreLT,
                facultad: facultadInfo,
              };
              LocationService.createLocation(location);
        });
      });
});


When("I access the API request endpoint to update a location", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        FacultadService.setFacultadFilterByAbreviatura(row.abreviaturaFCT);
        LocationService.setLocationFilterByName(row.nombreLT);
        FacultadService.getFacultadFilterByAbreviatura().then((response) => {
            const facultadInfo = response.body;
            
            const body = {
                nombre: row.nuevoNombreLT,
                facultad: facultadInfo,
              };
              LocationService.updateLocation(body);
        });
      });
        //
});

When("I access the API request escuela endpoint to delete a location by name", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        LocationService.setLocationFilterByName(row.nombreLT);
        LocationService.deleteLocation();
      });
});