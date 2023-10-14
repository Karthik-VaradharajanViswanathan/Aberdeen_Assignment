Feature: locked_out_user attempts to login.

    Application Swag Labs
    @Smoke
    Scenario: Login as locked_out_user and assert the error message
    Given I enter locked_out_user credentials
    When I try to login as locked_out_user
    Then I find error message
    Then I am able to assert the error message