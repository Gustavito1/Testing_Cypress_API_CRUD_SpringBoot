import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { SubCategory } from "../../interfaces/subcategory.interface";
import { Marca } from "../../interfaces/marca.interface";
import { Model } from "../../interfaces/model.interface"
import ModelService from "../api/Model.service";
import { default as api } from "../api/ApiHelper";
import MarcaService from "../api/Marca.service";
import SubcategoryService from "../api/Subcategory.service";


Given("User access on the API_TEST_INVENTARIOS_UNFV for table model", () => {});

Then("I access the API request endpoint to get all the model ids", () => {
    ModelService.getAllModels();
});


When("I acces the API request endpoint to get all the Facultad ids filtered by id", (dataTable: DataTable) => {
    //CategoryService.setCategoriasFilterByName(nombre);
    dataTable.hashes().forEach((row) => {
        ModelService.setModelId(Number(row.id));
        ModelService.getModelById();
    })
});



When("I access the API request endpoint to create a new model", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
      MarcaService.setMarcasFilterByName(row.nameMarca);
      MarcaService.getMarcasFilterByName().then((response) => {
        const marcaInfo = response.body;
        
        SubcategoryService.setSubCategoriasFilterByName(row.nameSubcategory);
        SubcategoryService.getSubCategoriasFilterByName().then((response) => {
          const subcategoryInfo = response.body;

          const model: Model = {
            nombre: row.nombreMD,
            descripcion: row.descripcion,
            marca: marcaInfo,
            subcategoria: subcategoryInfo
          };

          ModelService.createModel(model);
    });
        })
    });
});


When("I access the API request endpoint to update a model", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
      MarcaService.setMarcasFilterByName(row.nameMarca);
      ModelService.setModelId(Number(row.id));
      MarcaService.getMarcasFilterByName().then((response) => {
        const marcaInfo = response.body;
        
        SubcategoryService.setSubCategoriasFilterByName(row.nameSubcategory);
        SubcategoryService.getSubCategoriasFilterByName().then((response) => {
          const subcategoryInfo = response.body;

          const body = {
            nombre: row.nuevoNombreMD,
            descripcion: row.nuevaDescripcion,
            marca: marcaInfo,
            subcategoria: subcategoryInfo
          };

          ModelService.updateModel(body);
    });
        })
    });
});

When("I access the API request endpoint to delete a model by id", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        ModelService.setModelId(Number(row.id));
        ModelService.deleteModel();
      });
});