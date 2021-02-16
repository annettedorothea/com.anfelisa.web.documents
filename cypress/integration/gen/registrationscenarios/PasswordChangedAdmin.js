/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import * as ScenarioUtils from "../../../acegen/src/ScenarioUtils";
import AppUtils from "../../../../es6/src/app/AppUtils";
import * as RegistrationActionIds from "../../../acegen/gen/registration/RegistrationActionIds";
import * as CommonActionIds from "../../../acegen/gen/common/CommonActionIds";

const testId = ScenarioUtils.testId();

context('PasswordChangedAdmin', () => {
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
															ScenarioUtils.getCypressFor(RegistrationActionIds.emailChanged, [`info@anfelisa.de`]).should(() => {
																ScenarioUtils.wait(1, 0).should(() => {
															nonDeterministicValues = JSON.parse(localStorage.getItem('nonDeterministicValues'));
		if (!nonDeterministicValues) {
			nonDeterministicValues = [];
		}
		nonDeterministicValue = {
			uuid: `uuid-${testId}`
		};
		nonDeterministicValues.push(nonDeterministicValue);
		AppUtils.httpPut(`/api/test/non-deterministic/value?uuid=uuid-${testId}&key=token&value=${testId}-TOKEN`);
		localStorage.setItem('nonDeterministicValues', JSON.stringify(nonDeterministicValues));
																	ScenarioUtils.getCypressFor(RegistrationActionIds.registerUser, ).should(() => {
																		ScenarioUtils.wait(2, 1).should(() => {
																			ScenarioUtils.getCypressFor(CommonActionIds.logout, ).should(() => {
																				ScenarioUtils.wait(2, 0).should(() => {
																					ScenarioUtils.getCypressFor(CommonActionIds.route, [`#registration`]).should(() => {
																						ScenarioUtils.wait(1, 0).should(() => {
																							ScenarioUtils.getCypressFor(RegistrationActionIds.usernameChanged, [`Admin`]).should(() => {
																								ScenarioUtils.wait(1, 2).should(() => {
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

    it('password passwordMismatch ', () => {

ScenarioUtils.getCypressFor(RegistrationActionIds.passwordChanged, [`password`]).should(() => {
	ScenarioUtils.wait(1, 0).should(() => {
        const appState = JSON.parse(localStorage.getItem('appState'))
        expect(appState.rootContainer.mainView.password, "password").to.eql(`5f4dcc3b5aa765d61d8327deb882cf99`)
        expect(appState.rootContainer.mainView.passwordMismatch, "passwordMismatch").to.eql(true)
	})
})
    })
})




/******* S.D.G. *******/




