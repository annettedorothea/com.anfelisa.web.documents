

const { By, until } = require('selenium-webdriver');


module.exports = {
    saveDisabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('save')), 5000);
        expect(await driver.findElement(By.id("save")).isEnabled()).toBeFalse();
    },
    saveEnabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('save')), 5000);
        expect(await driver.findElement(By.id("save")).isEnabled()).toBeTrue();
    },
    givenLanguageDisabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('givenLanguage')), 5000);
        expect(await driver.findElement(By.id("givenLanguage")).isEnabled()).toBeFalse();
    },
    wantedLanguageDisabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('wantedLanguage')), 5000);
        expect(await driver.findElement(By.id("wantedLanguage")).isEnabled()).toBeFalse();
    },
    givenLanguageEnabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('givenLanguage')), 5000);
        expect(await driver.findElement(By.id("givenLanguage")).isEnabled()).toBeTrue();
    },
    wantedLanguageEnabled: async function(driver, testId) {
        await driver.wait(until.elementLocated(By.id('wantedLanguage')), 5000);
        expect(await driver.findElement(By.id("wantedLanguage")).isEnabled()).toBeTrue();
    }
}
