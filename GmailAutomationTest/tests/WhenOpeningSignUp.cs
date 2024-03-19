using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using Xunit;
using SignInPo;

public class WhenOpeningSignUp{
    //
    SignInPo signInInstance = new SignInPo;

    [Fact]
    static void ShouldOpenFirefoxAtSignUpPage(string[] args){
        signInInstance.Navigate;
    };
};