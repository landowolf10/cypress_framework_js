import { loginButton, passwordTextBox, usernameTextBox, errorMessage } from '../locators/login_locators';

export class LoginPage
{
    enterUserName(username)
    {
        cy.get(usernameTextBox).type(username);
    }

    enterPassword(password)
    {
        cy.get(passwordTextBox).type(password);
    }

    clickLoginBtn()
    {
        cy.get(loginButton).click()
    }

    validateInvalidLogin()
    {
        cy.get(loginButton).should('be.visible')
        cy.get(errorMessage).should('be.visible')
    }
}