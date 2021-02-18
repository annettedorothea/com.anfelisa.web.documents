/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import * as ScenarioUtils from "../../../acegen/src/ScenarioUtils";
import AppUtils from "../../../../es6/src/app/AppUtils";
import * as RegistrationActionIds from "../../../acegen/gen/registration/RegistrationActionIds";
import * as CommonActionIds from "../../../acegen/gen/common/CommonActionIds";
import * as Verifications from "../../../acegen/src/registrationscenarios/UsernameChangedVerifications";

const testId = ScenarioUtils.testId();

context('UsernameChanged', () => {
    beforeEach(() => {
    	let nonDeterministicValues;
    	let nonDeterministicValue;
			ScenarioUtils.getCypressFor(CommonActionIds.init, ).should(() => {
				ScenarioUtils.wait(2, 2).should(() => {
					ScenarioUtils.getCypressFor(CommonActionIds.route, [`#registration`]).should(() => {
						ScenarioUtils.wait(1, 0).should(() => {
						});
					});
				});
			});
    })

    it('username registerDisabled', () => {

ScenarioUtils.getCypressFor(RegistrationActionIds.usernameChanged, [`username-${testId}`]).should(() => {
	ScenarioUtils.wait(1, 2).should(() => {
        const appState = JSON.parse(localStorage.getItem('appState'))
        expect(appState.rootContainer.mainView.username, "username").to.eql(`username-${testId}`)
        Verifications.registerDisabled(testId);
	})
})
    })
})




/******* S.D.G. *******/



