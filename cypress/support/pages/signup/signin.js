class SignIn {
    openSignInPage(){
        //Opens the SignUp url.
        cy.visit('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ARZ0qKIVY2zgcfBPcC7nj9QFnA1TBRLz6XN_r6_NdLvb27w3m3jNdoGT9lHv2NiiJ_ccatmGyNx63g&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1124215575%3A1710784723402762&theme=glif&ddm=0');
        cy.intercept('Post', 'https://accounts.google.com/v3/signin/_/AccountsSignInUi/data/batchexecute?rpcids=UEkKwb&source-path=%2Fv3%2Fsignin%2Fidentifier&f.sid=-6153156473786991609&bl=boq_identityfrontendauthuiserver_20240407.08_p0&hl=pt-BR&_reqid=51436&rt=c',
            { statuscode: 200 });
        
    }
    signIn(){
        //Finds the "Email" field and fills with test info.
        cy.get('[id="identifierId"]').type('emailHere@test.com');
        //Finds the advance button and clicks.
        cy.get('button[class=".VfPpkd-LgbsSe-OWXEXe-k8QpJ"]').click;
        //Checks if the page opened, checks for successful API request and password field.
        cy.intercept('Post', 'https://accounts.google.com/v3/signin/_/AccountsSignInUi/data/batchexecute?rpcids=jfk2af%2CWZfWSd%2CAho3hb%2Ci3kFoc%2CzKAP2e%2CRzSO2e&source-path=%2Fv3%2Fsignin%2Fchallenge%2Fpwd&f.sid=-8544335041711730427&bl=boq_identityfrontendauthuiserver_20240407.08_p0&hl=pt-BR&TL=AEzbmxxD7v-6U_CaUJykAr4wPbKAIBV-HOQj211qf7147OXAMJt5loJt3hQhNlUk&_reqid=851773&rt=c',
            { statuscode: 200 });
        cy.get('input[class="Passwd"]').should('be.visible');
        //Finds the "Password" field and fills with test info.
        cy.get('input[class="Passwd"]').type('passwordHere');
        //Checks if the page opened, checks for succesful API request and account options in header.
        cy.intercept('Post', 'https://play.google.com/log?hasfast=true&auth=SAPISIDHASH+f37e512f3fd1b49b5b1bfd2c2ce3e857efe78035&authuser=0&format=json',
            { statuscode: 200 });
        cy.intercept('Post', 'https://mail.google.com/mail/u/0/logstreamz',
            { statuscode: 200 });
        cy.get('.gb_Ia').should('be.visible').and('have.attr', 'href', 'https://accounts.google.com/SignOutOptions?hl=pt-BR&continue=https://mail.google.com/mail/&service=mail&ec=GBRAFw');
    }
}
export default new SignIn();