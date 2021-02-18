/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import * as ScenarioUtils from "../../../acegen/src/ScenarioUtils";
import AppUtils from "../../../../es6/src/app/AppUtils";
import * as RegistrationActionIds from "../../../acegen/gen/registration/RegistrationActionIds";
import * as CommonActionIds from "../../../acegen/gen/common/CommonActionIds";
import * as Verifications from "../../../acegen/src/registrationscenarios/EmailChangedVerifications";

const testId = ScenarioUtils.testId();

context('EmailChanged', () => {
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
											ScenarioUtils.getCypressFor(RegistrationActionIds.passwordRepetitionChanged, [`password`]).should(() => {
												ScenarioUtils.wait(1, 0).should(() => {
													ScenarioUtils.getCypressFor(RegistrationActionIds.passwordChanged, [`password`]).should(() => {
														ScenarioUtils.wait(1, 0).should(() => {
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
    })

    it('email emailValid registerEnabled', () => {

ScenarioUtils.getCypressFor(RegistrationActionIds.emailChanged, [`info@anfelisa.de`]).should(() => {
	ScenarioUtils.wait(1, 0).should(() => {
        const appState = JSON.parse(localStorage.getItem('appState'))
        expect(appState.rootContainer.mainView.email, "email").to.eql(`info@anfelisa.de`)
        expect(appState.rootContainer.mainView.emailInvalid, "emailValid").to.eql(false)
        Verifications.registerEnabled(testId);
	})
})
    })
})




/******* S.D.G. *******/



