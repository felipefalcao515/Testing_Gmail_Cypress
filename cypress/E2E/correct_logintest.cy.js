//Imports class functions.
import Signup from "../support/pages/signup/signup"

//Test case 1.
describe('Sign up page test', () => {
    beforeEach(() => {
        Signup.openSignUpPage();
    })
    it('Should log in successfully', async () => {
        Signup.signIn();
    })
})