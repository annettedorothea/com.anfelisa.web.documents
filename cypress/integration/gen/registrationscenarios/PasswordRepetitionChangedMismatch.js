/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import * as ScenarioUtils from "../../../acegen/src/ScenarioUtils";
import AppUtils from "../../../../es6/src/app/AppUtils";
import * as RegistrationActionIds from "../../../acegen/gen/registration/RegistrationActionIds";
import * as CommonActionIds from "../../../acegen/gen/common/CommonActionIds";
import * as Verifications from "../../../acegen/src/registrationscenarios/PasswordRepetitionChangedMismatchVerifications";

const testId = ScenarioUtils.testId();

context('PasswordRepetitionChangedMismatch', () => {
    beforeEach(() => {
    	let nonDeterministicValues;
    	let nonDeterministicValue;
			ScenarioUtils.getCypressFor(CommonActionIds.init, ).should(() => {
				ScenarioUtils.wait(2, 2).should(() => {
					ScenarioUtils.getCypressFor(CommonActionIds.route, [`#registration`]).should(() => {
						ScenarioUtils.wait(1, 0).should(() => {
							ScenarioUtils.getCypressFor(RegistrationActionIds.usernameChanged, [`username-${testId}`]).should(() => {
								ScenarioUtils.wait(1, 2).should(() => {
									ScenarioUtils.getCypressFor(RegistrationActionIds.passwordChanged, [`pas`]).should(() => {
										ScenarioUtils.wait(1, 0).should(() => {
										});
									});
								});
							});
						});
					});
				});
			});
    })

    it('password passwordRepetition passwordMismatch registerDisabled', () => {

ScenarioUtils.getCypressFor(RegistrationActionIds.passwordRepetitionChanged, [`password`]).should(() => {
	ScenarioUtils.wait(1, 0).should(() => {
        const appState = JSON.parse(localStorage.getItem('appState'))
        expect(appState.rootContainer.mainView.password, "password").to.eql(`cd0acfe085eeb0f874391fb9b8009bed`)
        expect(appState.rootContainer.mainView.passwordRepetition, "passwordRepetition").to.eql(`5f4dcc3b5aa765d61d8327deb882cf99`)
        expect(appState.rootContainer.mainView.passwordMismatch, "passwordMismatch").to.eql(true)
        Verifications.registerDisabled();
	})
})
    })
})




/******* S.D.G. *******/




