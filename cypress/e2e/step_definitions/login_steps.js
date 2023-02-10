import { login, validateSuccessfulLogin, validateInvalidLogin } from '../tasks/login'
import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

When("login with user {string} and password {string}", (user, password) => {
    login(user, password)
});

Then("verify that user login was successful", () => {
    validateSuccessfulLogin()
});

Then("verify that user login was not successful", () => {
    validateInvalidLogin()
});