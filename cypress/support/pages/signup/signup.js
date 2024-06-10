class SignUp {
    openSignUpPage() {
        //Opens the SignUp url.
        cy.visit('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ARZ0qKIVY2zgcfBPcC7nj9QFnA1TBRLz6XN_r6_NdLvb27w3m3jNdoGT9lHv2NiiJ_ccatmGyNx63g&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1124215575%3A1710784723402762&theme=glif&ddm=0');
        cy.intercept('Post', 'https://accounts.google.com/v3/signin/_/AccountsSignInUi/data/batchexecute?rpcids=UEkKwb&source-path=%2Fv3%2Fsignin%2Fidentifier&f.sid=-6153156473786991609&bl=boq_identityfrontendauthuiserver_20240407.08_p0&hl=pt-BR&_reqid=51436&rt=c', { statuscode: 200 });

    }
    register() {
        //Finds the "Create account" button from signin page and clicks.
        cy.get('[jsname="lqvTlf"]').click();
        //Finds the "Personal use" option and clicks.
        cy.get('[jsname="RZzeR"]').click();

        //In "Insert Name" page.
        //Finds the "Name" field and types.
        cy.get('input[id="firstName"]').type('nameHere');
        //Finds the "Surname" field and types.
        cy.get('input[id="lastName"]').type('surNameHere');
        //Finds the "Advance" button and clicks.
        cy.get('button[jsname="LgbsSe"]').click();

        //In the "Date Born and Gender" page.
        //Finds the "Day"" input and fills.
        cy.get('input[id="day"').type('22');
        //Finds the "Month" dropdown and selects index 1 for "January".
        cy.get('select[id="month"').select(1);
        //Finds the "Year" input and fills.
        cy.get('input[id="year"').type('1998');
        //Finds the "Gender" dropdown and selects index 2 for "Male".
        cy.get('select[id="gender"').select(2);
        //Finds the "Advance" button and clicks.
        cy.get('button[jsname="LgbsSe"').click();


        //In the "Create Email" page.
        //Finds the "Email"" input and fills.
        cy.get('input[jsname="YPqjbf"').type('emailhere');
        //Finds the "Advance" button and clicks.
        cy.get('button[jsname="LgbsSe"').click();

        //In the "Create a password" page.
        //Finds the "Password" input and fills.
        cy.get('input[jsname="YPqjbf"').as('Passwd').type('');
        //Finds the "Confirm Password" input and fills.
        cy.get('input[jsname="YPqjbf"').as('PasswdAgain').type('');
    }
}
export default new SignUp();