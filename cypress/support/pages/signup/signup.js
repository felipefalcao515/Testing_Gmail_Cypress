class SignUp {
    openSignUpPage() {
        //Opens the SignUp url.
        cy.visit('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ARZ0qKIVY2zgcfBPcC7nj9QFnA1TBRLz6XN_r6_NdLvb27w3m3jNdoGT9lHv2NiiJ_ccatmGyNx63g&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1124215575%3A1710784723402762&theme=glif&ddm=0');
        cy.intercept('Post', 'https://accounts.google.com/v3/signin/_/AccountsSignInUi/data/batchexecute?rpcids=UEkKwb&source-path=%2Fv3%2Fsignin%2Fidentifier&f.sid=-6153156473786991609&bl=boq_identityfrontendauthuiserver_20240407.08_p0&hl=pt-BR&_reqid=51436&rt=c', { statuscode: 200 });

    }
    openSignUP() {
        //Finds the "Create account" button and clicks.
        cy.get('[jsname="QkNstf"]').click();
        //Finds the "Personal use" option and clicks.
        cy.get('[jsname="RZzeR"]').click();
    }
    register() {
        //Finds the "Name" field and types.
        cy.get('[id="firstName"]').type('nameHere');
        //Finds the "Surname" field and types.
        cy.get('[id="lastName"]').type('surNameHere');
        //Finds the "Advance" button and clicks.
        cy.get('[jsname="LgbsSe"]')//.click();
    }
}
export default new SignUp();