

const { By, until } = require('selenium-webdriver');


module.exports = {
    registerDisabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('register')), 5000);
        expect(await driver.findElement(By.id("register")).isEnabled()).toBeFalse();
    },
    registerEnabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('register')), 5000);
        expect(await driver.findElement(By.id("register")).isEnabled()).toBeTrue();
    }
}
