const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const BaseObject = require('../PageObjects/baseobject');


describe('Test of the sign up page', () => {
  it('Should open the sign up page', async () => {
    // Abrir a página de login
    await BaseObject.opensignup();
    
    // Encontrar os elementos de entrada para usuário e senha
    let inputUsuario = await driver.findElement(By.id('id_do_campo_usuario'));
    let inputSenha = await driver.findElement(By.id('id_do_campo_senha'));
    let botaoLogin = await driver.findElement(By.id('id_do_botao_login'));


  })
})

// Executar o teste
runTest();
