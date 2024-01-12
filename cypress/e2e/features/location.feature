Feature: FACULTAD API_TEST CRUD

Feature Description


    @GetLocation
    Scenario: Get location data
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table location
        When I access the API request endpoint to generate a Token
            |         email            |    password    |
            |    gtito@unfv.edu.pe     |     clave123   |
        Then I access the API request endpoint to get all the location ids
        Then Verify the response status code 200
        And Verify the data

    @GetLocation
    Scenario: Get location name in the API
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table location
        When I acces the API request endpoint to get all the location ids filtered by name
            | nombreLT |
            | B-512   | 
        Then Verify the response status code 200
        
    @CreateLocation
    Scenario: Create a new location on the API
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table location
        When I access the API request endpoint to create a new location
            | abreviaturaFCT  | nombreLT    |
            |      FIIS       |     B-501   |
        Then Verify the response status code 201
        And Verify the response body contains the id and data
        
    @UpdateLocation
    Scenario: Update location
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table location
        When I access the API request endpoint to update a location
            | abreviaturaFCT     |  nombreLT  | nuevoNombreLT  |
            |       FIIS         |   B-502    |     B-505      |
        Then Verify the response status code 200 

    @DeleteLocation
    Scenario: Delete location on the API
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table location
        When I access the API request escuela endpoint to delete a location by name
            |  nombreLT    |    
            |     B-505    |
        Then Verify the response status code 200