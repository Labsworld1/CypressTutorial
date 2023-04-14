const userNameField = "#user-name"
const passwordField = "#login-button"
const loginBtn = "#login-button"
const dashboardAssertion = ".header_secondary_container"


export class LoginPage {

    inputUserName(userName) {
        cy.get(userNameField).clear()
        .type(userName)
    }

    inputPassword(password) {
        cy.get(passwordField).clear()
        .type(password)
    }

    clickSubmitBtn() {
        cy.get(loginBtn).click()
    }

    assertDashboard() {
        cy.get(dashboardAssertion).contains("Projects")
    }
}

export const loginPage = new LoginPage()