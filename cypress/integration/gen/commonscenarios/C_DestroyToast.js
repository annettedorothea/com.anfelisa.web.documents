/********************************************************************************
 * generated by de.acegen 1.2.1
 ********************************************************************************/




import * as ScenarioUtils from "../../../acegen/src/ScenarioUtils";
import AppUtils from "../../../../es6/src/app/AppUtils";
import * as LoginActionIds from "../../../acegen/gen/login/LoginActionIds";
import * as CommonActionIds from "../../../acegen/gen/common/CommonActionIds";

const testId = ScenarioUtils.testId();

context('C_DestroyToast', () => {
    beforeEach(() => {
    	let nonDeterministicValues;
    	let nonDeterministicValue;
		ScenarioUtils.getCypressFor(CommonActionIds.init);
		ScenarioUtils.waitInMillis(7000);
		ScenarioUtils.getCypressFor(LoginActionIds.usernameChanged, [`username-${testId}`]);
		ScenarioUtils.getCypressFor(LoginActionIds.passwordChanged, [`password`]);
		ScenarioUtils.getCypressFor(LoginActionIds.login);
    })

    it('errorDestroyed ', () => {
		ScenarioUtils.waitInMillis(7000).should(() => {
			const appState = JSON.parse(localStorage.getItem('appState'))
			expect(appState.rootContainer.messages, "errorDestroyed").to.eql([
			]
			)
		});
    })
})




/******* S.D.G. *******/



