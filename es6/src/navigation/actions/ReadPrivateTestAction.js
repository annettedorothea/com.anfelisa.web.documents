import AbstractReadPrivateTestAction from "../../../gen/navigation/actions/AbstractReadPrivateTestAction";
import CommonView from "../../common/views/CommonView";

export default class ReadPrivateTestAction extends AbstractReadPrivateTestAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.testId = this.actionParam.testId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
