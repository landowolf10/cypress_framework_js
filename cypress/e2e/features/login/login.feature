Feature: Login page
  Scenario: Success login
    Given app is open
    When login with user "Admin" and password "admin123"
    Then verify that user login was successful