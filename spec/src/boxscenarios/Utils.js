

const { By, until } = require('selenium-webdriver');


module.exports = {
    saveDisabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('save')), 5000);
        expect(await driver.findElement(By.id("save")).isEnabled()).toBeFalse();
    },
    saveEnabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('save')), 5000);
        expect(await driver.findElement(By.id("save")).isEnabled()).toBeTrue();
    }
}
