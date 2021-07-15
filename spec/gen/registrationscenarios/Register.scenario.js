/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




const ScenarioUtils = require("../../src/ScenarioUtils");
const RegistrationActionIds  = require("../../gen/actionIds/registration/RegistrationActionIds");
const CommonActionIds  = require("../../gen/actionIds/common/CommonActionIds");
const Verifications = require("../../src/registrationscenarios/RegisterVerifications");
const { Builder } = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = ScenarioUtils.defaultTimeout;

const testId = ScenarioUtils.generateTestId();

let driver;

let appState;
    
describe("registrationscenarios.Register", function () {
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
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.emailChanged, [`info@anfelisa.de`]);

		await ScenarioUtils.addSquishyValueClient(
			driver,
			{
				uuid: `uuid-${testId}`
			}
		);
		await ScenarioUtils.addSquishyValueServer(driver, `uuid-${testId}`, "token", `${testId}-TOKEN`);
		await ScenarioUtils.invokeAction(driver, RegistrationActionIds.registerUser);
		await ScenarioUtils.waitInMillis(1000);
		
		appState = await ScenarioUtils.getAppState(driver);
    });

    afterAll(async function () {
        await ScenarioUtils.tearDown(driver);
    });
    
	it("userLoggedIn", async () => {
		expect(appState.rootContainer.loggedInUser, "userLoggedIn").toEqual({ 
			password : `5f4dcc3b5aa765d61d8327deb882cf99`,
			username : `username-${testId}`
		}
		)
	});
	it("role", async () => {
		expect(appState.rootContainer.role, "role").toEqual(`STUDENT`)
	});
	it("infoShown", async () => {
		expect(appState.rootContainer.messages, "infoShown").toEqual([
			{ 
				textKey : `confirmEmail`,
				type : `info`,
				visible : true,
				id : 0
			}
		]
		)
	});
    
	it("loginDataWasNotSetInLocalStorage", async () => {
		await Verifications.loginDataWasNotSetInLocalStorage(driver, testId);
	});
    
});





/******* S.D.G. *******/




