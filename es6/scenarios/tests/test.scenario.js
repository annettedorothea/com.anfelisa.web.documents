// Require modules used in the logic below
const {Builder, By, Key, until} = require('selenium-webdriver');

// You can use a remote Selenium Hub, but we are not doing that here
//require('chromedriver');
//require('geckodriver');
const driver = new Builder()
    .forBrowser('firefox')
    .build();

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

describe("Basic element tests", function () {
    beforeEach(async function () {
        await driver.get('http://127.0.0.1:8888/');
    });
    afterAll(async function () {
        await driver.quit();
    });

    it("first test", async function () {
        expect(await driver.findElement(By.css('.primary')).isDisplayed()).toBe(true);

        await driver.findElement(By.css('.primary')).click();

        const appState = await driver.executeScript('return Anfelisa.getAppState()');

        expect(appState).toEqual({
            rootContainer: {
                language: 'de',
                loggedInUser: null,
                mainView: {
                    isLoginView: true,
                    password: '',
                    saveInLocalStorage: false,
                    username: ''
                },
                messages: [
                    {
                        code: 401,
                        id: 0,
                        text: 'Unauthorized',
                        textKey: 'loginFailed',
                        type: 'error',
                        visible: true
                    }
                ],
                spinner: Object({display: false})

            }
        })
    });

});