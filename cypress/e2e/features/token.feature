Feature: TOKEN API_TEST CRUD

Feature Description

    @GetToken
    Scenario: Get Token data
        Given User access on the API_TEST_INVENTARIOS_UNFV for generate token
        When I access the API request endpoint to generate a Token
            |         email            |    password    |
            |    gtito@unfv.edu.pe     |     clave123   |
        Then Verify the response status code 200 
        And Verify the data