import { DashboardPage } from "../pages/dashboard_page";
import {LoginPage} from "../pages/login_page";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

export function login(user, password)
{
    loginPage.enterUserName(user);
    loginPage.enterPassword(password);
    loginPage.clickLoginBtn();
}

export function validateSuccessfulLogin()
{
    dashboardPage.validateSuccessfulLogin();
}

export function validateInvalidLogin()
{
    loginPage.validateInvalidLogin();
}