Feature: SOFTWARE API_TEST CRUD

Feature Description

    @GetSoftware
    Scenario: Get software data
        Given User access on the API_TEST_INVENTARIOS_UNFV for table software
        When I access the API request endpoint to generate a Token
            |         email            |    password    |
            |    gtito@unfv.edu.pe     |     clave123   |
        Then I access the API request endpoint to get all the software ids
        Then Verify the response status code 200 
        And Verify the data

    @GetSoftware
    Scenario: Get software name in the API 
        Given User access on the API_TEST_INVENTARIOS_UNFV for table software
        When I acces the API request endpoint to get all the Software ids filtered by name
            | nombre     |
            | Windows 10 | 
        Then Verify the response status code 200 

    @CreateSoftware
    Scenario: Create a new software on the API
        Given User access on the API_TEST_INVENTARIOS_UNFV for table software
        When I access the API request endpoint to create a new software
            |        nombre      | nombreSW   |
            | Sistema Operativo  | Windows 111 | 
        Then Verify the response status code 201
        And Verify the response body contains the id and data

    @UpdateSoftware
    Scenario: Update software
        Given User access on the API_TEST_INVENTARIOS_UNFV for table software
        When I access the API request endpoint to update a software
            |      nombre           |      nombreSW       |  nuevoNombreSW  |
            | Sistema Operativo     |     Windows 111     |     Windows 11  |
        Then Verify the response status code 200

    @DeleteSoftware
    Scenario: Delete a software on the API
        Given User access on the API_TEST_INVENTARIOS_UNFV for table software
        When I access the API request endpoint to delete a software by name
            |      nombre      |    
            |   Windows 11     | 
        Then Verify the response status code 200