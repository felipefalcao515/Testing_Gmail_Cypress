//Imports class functions.
import Signup from "../support/pages/signup/signup"

//Test case 1.
describe('Sign up page test', () => {
    //Imports a method for opening the gmail url.
    beforeEach(() => {
        Signup.openSignUpPage();
    })
    it('Should register page successfully', async () => {
        //Imports a mothd for registry of a new account.
        Signup.register();
    })
})