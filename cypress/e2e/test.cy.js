import Signup from "../support/signup"

describe('Sign up page test', () => {
    beforeEach(() => {
        Signup.openSignUpPage();
    })
    it('Should log in successfully', async () => {
        cy.get('[id="identifierId"]').type('teste@teste.com')
    })
})