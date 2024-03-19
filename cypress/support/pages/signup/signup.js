class SignUp {
    openSignUpPage(){
        //Opens the SignUp url.
        cy.visit('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ARZ0qKIVY2zgcfBPcC7nj9QFnA1TBRLz6XN_r6_NdLvb27w3m3jNdoGT9lHv2NiiJ_ccatmGyNx63g&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1124215575%3A1710784723402762&theme=glif&ddm=0');
        
    }
    signIn(){
        //Finds the "email" field and fills with test info.
        cy.get('[id="identifierId"]').type('teste@teste.com');
        //Finds the advance button and clicks.
        cy.get('.VfPpkd-LgbsSe-OWXEXe-k8QpJ').click;
    }
}
export default new SignUp();