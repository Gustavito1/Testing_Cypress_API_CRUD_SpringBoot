Feature: FACULTAD API_TEST CRUD

Feature Description


    @GetFacultad
    Scenario: Get facultad data
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table facultad
        When I access the API request endpoint to generate a Token
            |         email            |    password    |
            |    gtito@unfv.edu.pe     |     clave123   |
        Then I access the API request endpoint to get all the facultad ids
        Then Verify the response status code 200
        And Verify the data

    @GetFacultad
    Scenario: Get facultad name in the API
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table facultad
        Then I acces the API request endpoint to get all the Facultad ids filtered by name
            | abreviatura|
            | FIIS       | 
        Then Verify the response status code 200
        
    @CreateFacultad
    Scenario: Create a new facultad on the API
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table facultad
        When I access the API request endpoint to create a new faculty
            |              nombre    |   abreviatura |
            | Facultad de Psicologi |      FPS      |
        Then Verify the response status code 201
        And Verify the response body contains the id and data
        
        #And Verify the response body contains the Personid

    @UpdateFacultad
    Scenario: Update facultad
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table facultad
        When I access the API request endpoint to update a faculty
            | abreviatura | nuevoNombre                  | nuevaAbreviatura |
            |     FPS     | Facultad de Psicologia       |       FPSI       |
        Then Verify the response status code 200

    @DeleteFacultad
    Scenario: Delete a facultad on the API
        Given User acces on the API_TEST_INVENTARIOS_UNFV for table facultad
        When I access the API request endpoint to delete a faculty by abreviature
            |  abreviatura  |    
            |      FPSI     | 
        Then Verify the response status code 200