/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const Verifications = require("../../src/registrationscenarios/PasswordRepetitionChangedVerifications");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appState;
    
describe("registrationscenarios.PasswordRepetitionChanged", function () {
    beforeAll(async function () {
    	driver = new Builder()
    			    .forBrowser(ScenarioUtils.browserName)
    			    .build();
		await ScenarioUtils.invokeAction(driver, CommonActionIds.init);
		await ScenarioUtils.invokeAction(driver, CommonActionIds.route, [`#registration`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.usernameChanged, [`username-${testId}`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordChanged, [`pas`]);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordRepetitionChanged, [`password`]);

		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.passwordRepetitionChanged, [`pas`]);
		
		appState = await ScenarioUtils.getAppState(driver);
    });

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
	it("password", async () => {
		expect(appState.rootContainer.mainView.password, "password").toEqual(`cd0acfe085eeb0f874391fb9b8009bed`)
	});
	it("passwordRepetition", async () => {
		expect(appState.rootContainer.mainView.passwordRepetition, "passwordRepetition").toEqual(`cd0acfe085eeb0f874391fb9b8009bed`)
	});
	it("passwordMatch", async () => {
		expect(appState.rootContainer.mainView.passwordMismatch, "passwordMatch").toEqual(false)
	});
    
	it("registerDisabled", async () => {
		await Verifications.registerDisabled(driver, testId);
	});
    
});





/******* S.D.G. *******/




