
describe("PRUEBA", function() {
  browser.ignoreSynchronization = true;
  it("Login correcto", function() {
  	browser.get('https://www.saucedemo.com/',80000);
  	element(by.id('user-name')).sendKeys('standard_user');
    element(by.id('password')).sendKeys('secret_sauce');
 	element(by.name('login-button')).click();
 	expect(browser.getCurrentUrl()).toBe('https://www.saucedemo.com/inventory.html');
  });
  it("Login incorrecto", function() {
  	browser.get('https://www.saucedemo.com/',800000);
  	element(by.id('user-name')).sendKeys('locked_out_user');
    element(by.id('password')).sendKeys('secret_sauce');
 	element(by.name('login-button')).click();
  });
  

});