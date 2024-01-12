import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { SubCategory } from "../../interfaces/subcategory.interface"
import { default as api } from "../api/ApiHelper";
import CategoryService from "../api/Category.service"
import SubCategoryService from "../api/Subcategory.service";
import SubcategoryService from "../api/Subcategory.service";


Given("User acces on the API_TEST_INVENTARIOS_UNFV for table subcategory", () => {});

Then("I access the API request endpoint to get all the subcategory ids", () => {
    SubCategoryService.getAllSubCategorias();
});


When("I acces the API request endpoint to get all the subcategory ids filtered by name", (dataTable: DataTable) => {
    //CategoryService.setCategoriasFilterByName(nombre);
    dataTable.hashes().forEach((row) => {
        SubCategoryService.setSubCategoriasFilterByName(row.nombreSC);
        SubCategoryService.getSubCategoriasFilterByName();
    })
});



When("I access the API request endpoint to create a new subcategory", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        CategoryService.setCategoriasFilterByName(row.nombre);
        CategoryService.getCategoriasFilterByName().then((response) => {
            const categoriaInfo = response.body;
            
            const subcategory: SubCategory = {
                nombre: row.nombreSC,
                categoria: categoriaInfo,
              };
              SubCategoryService.createSubCategoria(subcategory);
        });
      });
});


When("I access the API request endpoint to update a subcategory", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        CategoryService.setCategoriasFilterByName(row.nombre);
        SubCategoryService.setSubCategoriasFilterByName(row.nombreSC);
        CategoryService.getCategoriasFilterByName().then((response) => {
            const categoriaInfo = response.body;
            
            const body = {
                nombre: row.nuevoNombreSC,
                categoria: categoriaInfo,
              };
              SubCategoryService.updateSubCategoria(body);
        });
      });
        //
});

When("I access the API request escuela endpoint to delete a subcategory by name", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row) => {
        SubCategoryService.setSubCategoriasFilterByName(row.nombreSC);
        SubCategoryService.deleteSubCategoria();
      });
});

When("I access the API request endpoint to download an Excel report", () => {
    SubCategoryService.getAllSubCategorias();
    SubcategoryService.ExcelReport();
});