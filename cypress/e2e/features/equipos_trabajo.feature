Feature: EQUIPOS_TRABAJO API_TEST CRUD

Feature Description

    @GetE_trabajo
    Scenario: Get model data
        Given User access on the API_TEST_INVENTARIOS_UNFV for table e_trabajo
        When I access the API request endpoint to generate a Token
            |         email            |    password    |
            |    gtito@unfv.edu.pe     |     clave123   |
        Then I access the API request endpoint to get all the e_trabajo ids
        Then Verify the response status code 200
        And Verify the data

    @GetE_trabajo
    Scenario: Get model name in the API 
        Given User access on the API_TEST_INVENTARIOS_UNFV for table e_trabajo
        When I acces the API request endpoint to get all the e_trabajo ids filtered by serie
            | serie  |
            | 23ff863b-9a6a-43fc-bc6f-07faa3e1d2d0   | 
        Then Verify the response status code 200 

    @CreateE_trabajo
    Scenario: Create a new model on the API
        Given User access on the API_TEST_INVENTARIOS_UNFV for table e_trabajo
        When I access the API request endpoint to create a new e_trabajo
            |   idModel |       estadoET       |
            |   13      |         Stock        |
        Then Verify the response status code 201
        And Verify the response body contains the id and data

    @UpdateE_trabajo
    Scenario: Update model
        Given User access on the API_TEST_INVENTARIOS_UNFV for table e_trabajo
        When I access the API request endpoint to update a e_trabajo
            |   idModel | generatedSerie    |nuevaEstadoET | 
            |     13    | "serieToUpdate" |Mantenimiento |
        Then Verify the response status code 200

    @DeleteE_trabajo
    Scenario: Delete model on the API
        Given User access on the API_TEST_INVENTARIOS_UNFV for table e_trabajo
        When I access the API request endpoint to delete a e_trabajo by serie
        Then Verify the response status code 200