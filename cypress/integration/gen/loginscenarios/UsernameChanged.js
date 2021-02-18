/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import * as ScenarioUtils from "../../../acegen/src/ScenarioUtils";
import AppUtils from "../../../../es6/src/app/AppUtils";
import * as LoginActionIds from "../../../acegen/gen/login/LoginActionIds";
import * as CommonActionIds from "../../../acegen/gen/common/CommonActionIds";

const testId = ScenarioUtils.testId();

context('UsernameChanged', () => {
    beforeEach(() => {
    	let nonDeterministicValues;
    	let nonDeterministicValue;
			ScenarioUtils.getCypressFor(CommonActionIds.init, ).should(() => {
				ScenarioUtils.wait(2, 2).should(() => {
				});
			});
    })

    it('username ', () => {

ScenarioUtils.getCypressFor(LoginActionIds.usernameChanged, [`username-${testId}`]).should(() => {
	ScenarioUtils.wait(1, 0).should(() => {
        const appState = JSON.parse(localStorage.getItem('appState'))
        expect(appState.rootContainer.mainView.username, "username").to.eql(`username-${testId}`)
	})
})
    })
})




/******* S.D.G. *******/



