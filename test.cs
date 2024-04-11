using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using Xunit;
using SignInPo;

public class WhenOpeningSignUp
{
    //

    [Fact]
    static void ShouldOpenFirefoxAtSignUpPage(string[] args)
    {
        driver.Navigate().GoToUrl("https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ARZ0qKJT0lJtRwl5GgAnoUJFhLaZQ741rLFCVjkliQezGX-QQdahFl0DZegPr3H8WM6WiK-ec4NY&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1190902660%3A1710870201262319&theme=mn&ddm=0");
        driver.FindElement(by.id("identifierId")).click;
    };
};