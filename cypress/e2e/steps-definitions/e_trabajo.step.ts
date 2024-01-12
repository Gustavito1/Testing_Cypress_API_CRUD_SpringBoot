import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { Location } from "../../interfaces/location.interface";
import { E_trabajo } from "../../interfaces/equipos_trabajo.interface"
import ModelService from "../api/Model.service";
import { default as api } from "../api/ApiHelper";
import LocationService from "../api/Location.service";
import Equipos_trabajoService from "../api/Equipos_trabajo.service";
import { v4 as uuidv4 } from 'uuid';

let generatedSerie: string;

Given("User access on the API_TEST_INVENTARIOS_UNFV for table e_trabajo", () => {});

Then("I access the API request endpoint to get all the e_trabajo ids", () => {
    Equipos_trabajoService.getAllEquipos_trabajo();
});


When("I acces the API request endpoint to get all the e_trabajo ids filtered by serie", (dataTable: DataTable) => {
    //CategoryService.setCategoriasFilterByName(nombre);
    dataTable.hashes().forEach((row) => {
        Equipos_trabajoService.setEquipos_trabajoFilterByName(row.serie);
        Equipos_trabajoService.getEquipos_trabajoFilterByName();
    })
});



When("I access the API request endpoint to create a new e_trabajo", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
      ModelService.setModelId(Number(row.idModel));
      ModelService.getModelById().then((response) => {
        const modelInfo = response.body;

        //Generar UUID para la serie
        const serie = uuidv4();
        generatedSerie = serie;

        const e_trabajo: E_trabajo = {
          serie: serie,
          estado: row.estadoET,
          modelo: modelInfo,
          };

          Equipos_trabajoService.createEquipos_trabajo(e_trabajo);
    });
        })
    });


When("I access the API request endpoint to update a e_trabajo", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
      ModelService.setModelId(Number(row.idModel));
      Equipos_trabajoService.setEquipos_trabajoFilterByName(generatedSerie);
      ModelService.getModelById().then((response) => {
        const modelInfo = response.body;
        const serieToUpdate = generatedSerie;

        const body = {
          serie: serieToUpdate,
          estado: row.nuevaEstadoET,
          modelo: modelInfo,
          };

          Equipos_trabajoService.updateEquipos_trabajo(body);
    });
        })
    });

When("I access the API request endpoint to delete a e_trabajo by serie", () => {

    const serieToDelete = generatedSerie;
    Equipos_trabajoService.setEquipos_trabajoFilterByName(serieToDelete);
    Equipos_trabajoService.deleteEquipos_trabajo();

});