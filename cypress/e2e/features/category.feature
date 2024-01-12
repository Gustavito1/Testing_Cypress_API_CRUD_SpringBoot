Feature: CATEGORIA API_TEST CRUD

Feature Description

    @GetCategory
    Scenario: Get category data
        Given User access on the API_TEST_INVENTARIOS_UNFV for table category
        When I access the API request endpoint to generate a Token
            |         email            |    password    |
            |    gtito@unfv.edu.pe     |     clave123   |
        Then I access the API request endpoint to get all the categoria ids
        Then Verify the response status code 200
        And Verify the data

    @GetCategory
    Scenario: Get category name in the API 
        Given User access on the API_TEST_INVENTARIOS_UNFV for table category
        When I acces the API request endpoint to get all the Category ids filtered by name
            | nombre  |
            | Software | 
        Then Verify the response status code 200 
        
    @CreateCategory
    Scenario: Create a new person on the API
        Given User access on the API_TEST_INVENTARIOS_UNFV for table category
        When I access the API request endpoint to create a new category
            |   nombre    |
            | Memoria Ra | 
        Then Verify the response status code 201
        And Verify the response body contains the id and data

    @UpdateCategory
    Scenario: Update person
        Given User access on the API_TEST_INVENTARIOS_UNFV for table category
        When I access the API request endpoint to update a category
            | nombre        | nuevoNombre     | 
            | Memoria Ra  | Memoria Ra1      |
        Then Verify the response status code 200

    @DeleteCategory
    Scenario: Delete a category on the API
        Given User access on the API_TEST_INVENTARIOS_UNFV for table category
        When I access the API request endpoint to delete a category by name
            |  nombre  |    
            |      Memoria Ra1     | 
        Then Verify the response status code 200