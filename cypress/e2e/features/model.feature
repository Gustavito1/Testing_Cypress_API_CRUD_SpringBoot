Feature: CATEGORIA API_TEST CRUD

Feature Description

    @GetModel
    Scenario: Get model data
        Given User access on the API_TEST_INVENTARIOS_UNFV for table model
        When I access the API request endpoint to generate a Token
            |         email            |    password    |
            |    gtito@unfv.edu.pe     |     clave123   |
        Then I access the API request endpoint to get all the model ids
        Then Verify the response status code 200
        And Verify the data

    @GetModel
    Scenario: Get model name in the API 
        Given User access on the API_TEST_INVENTARIOS_UNFV for table model
        When I acces the API request endpoint to get all the Facultad ids filtered by id
            | id  |
            | 2   | 
        Then Verify the response status code 200 

    @CreateModel
    Scenario: Create a new model on the API
        Given User access on the API_TEST_INVENTARIOS_UNFV for table model
        When I access the API request endpoint to create a new model
            |   nameMarca | nameSubcategory |  nombreMD        |       descripcion         |
            |    EVGA     |       PSU       | FUENTE EVGA 600  |  Fuente de poder de 600w  |
        Then Verify the response status code 201
        And Verify the response body contains the id and data

    @UpdateModel
    Scenario: Update model
        Given User access on the API_TEST_INVENTARIOS_UNFV for table model
        When I access the API request endpoint to update a model
            |  id  |   nameMarca | nameSubcategory |  nuevoNombreMD   |   nuevaDescripcion     |
            |   23 |    EVGA     |       PSU       |  FUENTE EVGA 650  |  Fuente de poder de 650w  |
        Then Verify the response status code 200

    @DeleteModel
    Scenario: Delete model on the API
        Given User access on the API_TEST_INVENTARIOS_UNFV for table model
        When I access the API request endpoint to delete a model by id
            |      id       |    
            |     23        | 
        Then Verify the response status code 200