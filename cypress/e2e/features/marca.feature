Feature: MARCA API_TEST CRUD

Feature Description

    @GetMarca
    Scenario: Get marca data
        Given User access on the API_TEST_INVENTARIOS_UNFV for table marca
        When I access the API request endpoint to generate a Token
            |         email            |    password    |
            |    gtito@unfv.edu.pe     |     clave123   |
        Then I access the API request endpoint to get all the marca ids
        Then Verify the response status code 200 
        And Verify the data

    @GetMarca
    Scenario: Get category name in the API 
        Given User access on the API_TEST_INVENTARIOS_UNFV for table marca
        When I acces the API request endpoint to get all the Marca ids filtered by name
            | nombre  |
            | EVGA    | 
        Then Verify the response status code 200 

    @CreateMarca
    Scenario: Create a new person on the API
        Given User access on the API_TEST_INVENTARIOS_UNFV for table marca
        When I access the API request endpoint to create a new marca
            |   nombre    |
            |    Memoria Ran     | 
        Then Verify the response status code 201
        And Verify the response body contains the id and data

    @UpdateMarca
    Scenario: Update person
        Given User access on the API_TEST_INVENTARIOS_UNFV for table marca
        When I access the API request endpoint to update a marca
            | nombre        | nuevoNombre     | 
            | Memoria Ran  | Memoria Ran1      |
        Then Verify the response status code 200

    @DeleteMarca
    Scenario: Delete a category on the API
        Given User access on the API_TEST_INVENTARIOS_UNFV for table marca
        When I access the API request endpoint to delete a marca by name
            |  nombre  |    
            |      Memoria Ran1     | 
        Then Verify the response status code 200