Feature: Login page
  Scenario: Login with invalid password
    Given app is open
    When login with user "Admin" and password "admin1234"
    Then verify that user login was not successful