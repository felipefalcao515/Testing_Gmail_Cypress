//Imports class functions.
import Signup from "../support/pages/signup/signin"

//Test case 1.
describe('Sign up page test', () => {
    beforeEach(() => {
        Signup.openSignInPage();
    })
    it('Should log in successfully', async () => {
        Signup.signIn();
    })
})