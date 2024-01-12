Feature: FACULTAD API_TEST CRUD

Feature Description


    @GetSubcategory
    Scenario: Get subcategory data
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table subcategory
        When I access the API request endpoint to generate a Token
            |         email            |    password    |
            |    gtito@unfv.edu.pe     |     clave123   |
        Then I access the API request endpoint to get all the subcategory ids
        Then Verify the response status code 200
        And Verify the data

    @GetSubcategory
    Scenario: Get subcategory name in the API
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table subcategory
        When I acces the API request endpoint to get all the subcategory ids filtered by name
            | nombreSC |
            | PSU | 
        Then Verify the response status code 200
        
    @CreateSubcategory
    Scenario: Create a new subcategory on the API
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table subcategory
        When I access the API request endpoint to create a new subcategory
            | nombre     | nombreSC    |
            | Software    |     AM      |
        Then Verify the response status code 201
        And Verify the response body contains the id and data
        
    @UpdateSubcategory
    Scenario: Update subcategory
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table subcategory
        When I access the API request endpoint to update a subcategory
            | nombre     |  nombreSC  | nuevoNombreSC  |
            | Software    |     AM     |     AMD        |
        Then Verify the response status code 200 

    @DeleteSubcategory
    Scenario: Delete subcategory on the API
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table subcategory
        When I access the API request escuela endpoint to delete a subcategory by name
            |  nombreSC    |    
            |      AMD     |
        Then Verify the response status code 200

    @ReportSubcategory
    Scenario: Report subcategory on the API in format Excel
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table subcategory
        When I access the API request endpoint to download an Excel report