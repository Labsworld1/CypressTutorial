/// <reference types = "cypress" />
import { LoginPage, loginPage } from "../../pageObjects/loginPage"

describe ('Users should be able to login', () => {
    beforeEach('Navigate to the url', () => {
        cy.fixture('login').then((data) => {
            cy.visit(data.baseUrl)
        })
        
    })

    it ('Standard user should be able to login', () => {
        loginPage.inputUserName(data.standardUserName)
        loginPage.inputPassword(data.password)
        loginPage.clickSubmitBtn()
        loginPage.assertDashboard()

    })
})