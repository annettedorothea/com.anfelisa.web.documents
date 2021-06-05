/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const Verifications = require("../../src/registrationscenarios/PasswordChangedMatchVerifications");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appState;
    
describe("registrationscenarios.PasswordChangedMatch", function () {
    beforeAll(async function () {
    	driver = new Builder()
    			    .forBrowser(ScenarioUtils.browserName)
    			    .build();
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.route, [`#registration`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`pas`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordRepetitionChanged, [`password`]);

		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`password`]);
		
		appState = await ScenarioUtils.getAppState(driver);
    });

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
	it("password", async () => {
		expect(appState.rootContainer.mainView.password, "password").toEqual(`5f4dcc3b5aa765d61d8327deb882cf99`)
	});
	it("passwordRepetition", async () => {
		expect(appState.rootContainer.mainView.passwordRepetition, "passwordRepetition").toEqual(`5f4dcc3b5aa765d61d8327deb882cf99`)
	});
	it("passwordMatch", async () => {
		expect(appState.rootContainer.mainView.passwordMismatch, "passwordMatch").toEqual(false)
	});
    
	it("registerDisabled", async () => {
		await Verifications.registerDisabled(driver, testId);
	});
    
});





/******* S.D.G. *******/




